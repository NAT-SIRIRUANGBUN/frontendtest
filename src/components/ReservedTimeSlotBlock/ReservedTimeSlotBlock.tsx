import dayjs from 'dayjs'
import styles from './reservedtimeslotblock.module.css'
import Image from 'next/image'
import deleteReservation from '@/app/libs/deleteReservation'

export default function ReservedTimeSlotBlock ({reservation} : {reservation : any}) {
    return (
        <div className={styles.ReservedTimeSlotBlock}>
            <h2>{reservation.timeslot.company.name}</h2>
            <h2>{dayjs(reservation.timeslot.date).format('YYYY/MM/DD')}</h2>
            <h2>{reservation.timeslot.startTime + "-" + reservation.timeslot.endTime}</h2>
            <div className={styles.ButtonWrapper}>

                <Image onClick={async () => {await deleteReservation(reservation._id)}} className={styles.DeleteButton} src='/Icon/Delete.png' width={0} height={0} sizes='100vh' alt='Delete'/>
            </div>
        </div>
    )
}