'use client'

import styles from './userdetailcard.module.css'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import userUpdate from '@/app/libs/userUpdate'
import { revalidatePath } from 'next/cache'

function UserDetailForm ({text  , keyy  , value } : {text : string , keyy : string , value : string}) {
    const [inpVal , setValue] = useState(value)

    return (
        <div className={styles.InputWrapper}>
            <div className={styles.InputWrapperText}>{text} :</div>
            <input type="text" name={keyy} value={inpVal} disabled onChange={(e) => {setValue(e.target.value)}}/>
        </div>
    )
}

export default  function UserDetailCard ({userData} : {userData : any}) {

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

            const updatedUser = await userUpdate(userData.token , newData)

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

                    {userData.data.role === 'user' ? <div className={state == 1 ? styles.RightTopBlock : styles.RightTopBlockOneItem}>
                    
                    {state == 1 ? <button onClick={() => {imageBuffer = prompt('Enter Picture URL')}}>Change Picture</button> : ''}
                    <button onClick={updateClickHandler} className={styles.SaveButton}>{state == 0 ? 'Edit' : 'Save'}</button>
                </div>:'' }
                    
                
            </div>

            <div className={styles.BottomBlock}>
                <Image className={styles.LeftBottomBlock} src={userData.data.imageurl} width={0} height={0} sizes='100vh' alt='UserProfilePic'></Image>
                
                <div className={styles.RightBottomBlock}>
                    <form name='user-update-form' className={styles.FormBlock}>
                        <UserDetailForm text='Name' keyy='name' value={userData.data.name}/>
                        <UserDetailForm text='Email' keyy='email' value={userData.data.email}/>
                        <UserDetailForm text='Tel' keyy='tel' value={userData.data.tel}/>
                    </form>
                    
                    
                </div>
            </div> 
        </div>
    )
}

