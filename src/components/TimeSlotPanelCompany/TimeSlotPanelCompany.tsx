// 'use client'

// import { useSession } from "next-auth/react"
// import TimeSlot from "../TimeSlot/TimeSlot"
// import styles from './timeslotpanelCompany.module.css'

// export default function TimeSlotPanelCompany({companyTimeSlot} : {companyTimeSlot : any}){

//     const {data : session} = useSession()
//     function isReserved (timeslotId : string) {
//         for (let i = 0 ; i < session?.user.reservation.length ; i++) {
//             if (timeslotId === session?.user.reservation[i].timeslot)
//                 return true
//         }

//         return false
//     }

//     return(
//             <div className={styles.fullBlock}>
//                 {companyTimeSlot.map((timeslot : any) => (
//                         <TimeSlot tid={timeslot._id} key={timeslot._id} currentCapacity={timeslot.reservation.length}
//                             maxCapacity={timeslot.capacity}
//                             date={new Date(timeslot.date.split('T')[0])}
//                             time={timeslot.startTime + '-' + timeslot.endTime}
//                             reserv={session ? (isReserved(timeslot._id) ? -1 : (timeslot.reservation.length >= timeslot.capacity ? -2 : 1) ) : 0}
//                             desc={timeslot.description}/>
//                 ))}
//             </div>
//     )
    
// }