'use client'

import styles from './companydetailcard.module.css'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import companyUpdate from '@/app/libs/companyUpdate'
function CompanyDetailForm ({text  , keyy  , value } : {text : string , keyy : string , value : string}) {

    const [inpVal , setValue] = useState(value)

    return (
        <div className={styles.InputWrapper}>
            <div className={styles.InputWrapperText}>{text} :</div>
            <input type="text" name={keyy} value={inpVal} disabled onChange={(e) => {setValue(e.target.value)}}/>
        </div>
    )
}

export default  function CompanyDetailCard ({user} : {user : any}) {

    const [state , updateState]= useState(0)
    
    var imageBuffer : string | null = null

    async function updateClickHandler () {

        const inpForm = document.forms[0]
        
        if (state == 0) {
            
            Array.from(inpForm).forEach((X : any)  => {
                X.disabled = false
            });

            imageBuffer = null

            updateState((state + 1) % 2)

            
        }

        else {

            const newData : any = {}

            Array.from(inpForm).forEach((X : any)  => {
                X.disabled = true
                newData[X.name] = X.value
            });

            if (imageBuffer)
                newData.imageurl = imageBuffer

            const updatedCompany = await companyUpdate(user.data._id , user.data.token ,newData)

            updateState((state + 1) % 2)

        }
        
    }

    useEffect(() => {

        const inpForm = document.forms[0]
            Array.from(inpForm).forEach((X : any)  => {
                X.disabled = true
            });


        if (state != 0) {
            updateState(0)
        }
    } , [])
    return(
        
        <div className={styles.DetailCard}>
            <div className={styles.TopBlock}>
                <div className={styles.LeftTopBlock}>
                    <h2>Your Profile</h2>
                </div>

                <div className={state == 1 ? styles.RightTopBlock : styles.RightTopBlockOneItem}>
                    
                    {state == 1 ? <button onClick={() => {imageBuffer = prompt('Enter Picture URL')}}>Change Picture</button> : ''}
                    <button onClick={updateClickHandler} className={styles.SaveButton}>{state == 0 ? 'Edit' : 'Save'}</button>
                </div>
                
            </div>

            <div className={styles.BottomBlock}>
                <Image className={styles.LeftBottomBlock} src={user.data.imageurl} width={0} height={0} sizes='100vh' alt='companyProfilePic'></Image>
                
                <div className={styles.RightBottomBlock}>
                    <form name='company-update-form' className={styles.FormBlock}>
                        <CompanyDetailForm text='Name' keyy='name' value={user.data.name}/>
                        <CompanyDetailForm text='Website' keyy='website' value={user.data.website}/>
                        <CompanyDetailForm text='Tel' keyy='tel' value={user.data.tel}/>
                        <CompanyDetailForm text='Email' keyy='email' value={user.data.contact_email}/>

                        <CompanyDetailForm text='Description' keyy='description' value={user.data.description}/>
                    </form>
                    
                    
                </div>
            </div>
{/*             
            <div className={styles.LeftBlock}>
                <div className={styles.LeftBlockTop}>
                    <text>Your Profile</text>
                    <text>[]</text>
                </div>
                <Image className={styles.LeftBlockBottom} src={session!.user.imageurl} width={0} height={0} sizes='100vh' alt='UserProfilePic'></Image>
            </div>

            <div className={styles.RightBlock}></div> */}
        </div>
    )
}

