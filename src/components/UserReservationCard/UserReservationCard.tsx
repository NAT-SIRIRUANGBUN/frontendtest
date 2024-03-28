'use client'

import { useSession } from 'next-auth/react'
import styles from './userreservationcard.module.css'
import Image from 'next/image'
import getUserReservation from '@/app/libs/getUserReservation'
import { useEffect, useState } from 'react'
import deleteReservation from '@/app/libs/deleteReservation'
const backend_url = process.env.BACKEND_URL
import getMe from '@/app/libs/getMe'
import getUserData from '@/app/libs/getUserData'

function ReservationBlock ({reservation} : {reservation : any}) {

    const [state , updateState] = useState(false)

    if (!state) {
        return (
            <div className={styles.ReservationBlock} key={reservation._id}>
                <h2>{reservation.timeslot.company.name}</h2>
                <h2>{reservation.timeslot.date.split('T')[0]}</h2>
                <h2>{reservation.timeslot.startTime + " - " + reservation.timeslot.endTime}</h2>
                <h2>{reservation.timeslot.reservation.length + " / " + reservation.timeslot.capacity}</h2>
                <div className={styles.ArrowFlexBlock}>
                    <Image className={styles.ArrowImage} src='/Icon/Arrow-Down.png' width={0} height={0} sizes='100vh' alt='arrow' onClick={() => updateState(!state)}></Image>
                </div>
            </div>
            
        )
    }
    else {
        return (
            <div className={styles.ReservationBlockExpand} key={reservation._id}>

                <div className={styles.LeftBlock}>
                    <div className={styles.LeftTopBlock}>
                        <h2>{reservation.timeslot.company.name}</h2>
                        <h2>{'Date : ' + reservation.timeslot.date.split('T')[0]}</h2>
                        <h2>{'Capacity : ' + reservation.timeslot.reservation.length + "/" + reservation.timeslot.capacity}</h2>
                        <h2>{'Time : ' + reservation.timeslot.startTime + " - " + reservation.timeslot.endTime}</h2>
                    </div>
                    <p>{reservation.timeslot.description}</p>
                    <button  onClick={async () => {await deleteReservation(reservation._id)}}>Delete</button>
                </div>

                <div className={styles.RightBlock}>
                <Image className={styles.CompanyImage} src = {reservation.timeslot.company.imageurl} alt='CompanyPicture' height={0} width={0}sizes='100vh'></Image>
                <div className={styles.ArrowFlexBlock}>
                    <Image className={styles.ArrowImage} src='/Icon/Arrow-Up.png' width={0} height={0} sizes='100vh' alt='arrow' onClick={() => updateState(!state)}></Image>
                </div>
                </div>
            </div>
        )
    }
}

export default function UserReservationCard ({userData} : {userData : any}) {


        const reservartionArray = userData.data.reservation
        return (
        <div className={styles.Card}>
            <h2 className={styles.ReservationHeader}>Your Reservation</h2>
            <div className={styles.CardWrapper}>
                {reservartionArray.map((reservation : any) => (
                    <ReservationBlock reservation={reservation} key={reservation._id}/>
                ))}

            </div>
            
        </div>
        
    )
}