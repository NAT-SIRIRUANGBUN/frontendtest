'use client'
import { useState } from 'react'
import styles from './userreservationblock.module.css'
import Image from 'next/image'
import ReservedTimeSlotBlock from '../ReservedTimeSlotBlock/ReservedTimeSlotBlock'

export default function UserReservationBlock ({user} : {user : any}) {
    const [isExpand , setExpand] = useState(false)

    return (
        <div className={styles.Block}>
            <div className={styles.UpperBlock}>
                <div className={styles.UserInfoBlock}>
                    <div className={styles.UpperInfo}><h1>Email : {user.email}</h1></div>
                    <div className={styles.LowerInfo}> <h2>name : {user.name? user.name : 'none'}</h2>
                    <h2>Tel : {user.tel? user.tel : 'none'}</h2></div>
                </div>

                <div className={styles.RightBlock}>
                    <div className={styles.ImageWrapper}>
                        <Image className={styles.ProfileImage} src={user.imageurl} height={100} width={100} alt='Profile Image' />
                    </div>

                    <div className={styles.ImageWrapper}>
                        <Image onClick={() => {setExpand(!isExpand)}} className={styles.Arrow} src={isExpand? '/Icon/Arrow-Up.png' : '/Icon/Arrow-Down.png'} height={100} width={100} alt='Profile Image' />
                    </div>

                </div>

            </div>

            {isExpand? 
            
            <div className={styles.UserReserationWrapper}>
                {user.reservation.map((reservedTimeSlot : any) => (
                    <ReservedTimeSlotBlock reservation={reservedTimeSlot} key={reservedTimeSlot}/>
                ))}
            </div>
            
            
            : ''}
        </div>
    )
}