import { Button } from '@mui/material'
import Link from 'next/link'
import styles from './navbar.module.css'
import { useSession } from 'next-auth/react'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import Image from 'next/image'
import getUserData from '@/app/libs/getUserData'
import { redirect } from 'next/navigation'

export function NavBarButton ({text , link , imgSrc} : {text? : string , link : string , imgSrc? : string}) {
    
    if (imgSrc) {
        return (
            <Link href={link} className={styles.NavBarImageButton}>
                <Image className={styles.NavBarProfileImage} src={imgSrc} width={0} height={0} sizes='100vh' alt='profileImage'></Image>
            </Link>
        )
    }
    else {
        return (
            <Link href={link} className={styles.NavBarButton}>
                <Button>{text}</Button>
            </Link>
        )
    }

}

export default async function NavBar () {

    const session = await getServerSession(authOptions)

    const userData = await getUserData(session)

    
    let  userImageUrl : string = ''

    if (userData)
        userImageUrl= userData.data.imageurl

    return (
        <div className={styles.NavBar}>
            {/* <div className={styles.NavBarContainer}> */}

            <Link className={styles.NavBarLogoPic} href="/">
                <div><img src='/Icon/logo.png' alt='Logo image' className={styles.image}/></div>
            </Link>
                
            <div className={styles.NavBarButtonWrapper}>
                    {session && session.user.role === 'admin'? <NavBarButton text='reservation' link='/a/reservations'></NavBarButton>  : ''}
                    <NavBarButton link= {(session && session.user.role === 'admin' ? '/a' : '') +  '/companies'} text='Companies'/>
                    {
                    userData ? 
                    <NavBarButton link='/profile' imgSrc={userImageUrl}></NavBarButton> 
                    : <NavBarButton link='/signin' text='Sign-In'/>}
                    
                    <div className={styles.NavBarButtonCollection}></div>
                    
            </div>
            {/* </div> */}
        </div>
    )
}