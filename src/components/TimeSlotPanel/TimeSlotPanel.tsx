'use client'

import { useSession } from "next-auth/react"
import TimeSlot from "../TimeSlot/TimeSlot"
import styles from './timeslotpanel.module.css'
import getUserData from "@/app/libs/getUserData"

export default function TimeSlotPanel({companyTimeSlot , thisUser} : {companyTimeSlot : any , thisUser : any}){

    function isReserved (timeslotId : string) {

        if (!thisUser || thisUser.data.role === 'company')
            return false

        for (let i = 0 ; i < thisUser.data.reservation.length ; i++) {
            const isMatch = (timeslotId === thisUser.data.reservation[i].timeslot._id.toString())
            
            if (isMatch){
                return true
            }
        }
        return false
    }


    return(
            <div className={styles.fullBlock}>
                {companyTimeSlot.map((timeslot : any) => (
                        <TimeSlot user = {thisUser} tid={timeslot._id} key={timeslot._id} currentCapacity={timeslot.reservation.length}
                            maxCapacity={timeslot.capacity}
                            date={new Date(timeslot.date.split('T')[0])}
                            time={timeslot.startTime + '-' + timeslot.endTime}
                            reserv={thisUser ? (isReserved(timeslot._id) ? -1 : (timeslot.reservation.length >= timeslot.capacity ? -2 : 1) ) : 0}
                            desc={timeslot.description}/>
                ))}
            </div>
    )
    
}