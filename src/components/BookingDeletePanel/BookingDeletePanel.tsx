import BookingDeleteBlock from '../BookingDeleteBlock/BookingDeleteBlock';
import styles from './bookingDeletePanel.module.css'


export default function BookingDeletePanel({reserv}:{reserv:any}){
    return(
        <div className={styles.mock}>
            <div className={styles.fullBlock}>
            
            {reserv.map((reservation:any) => (
                <div className={styles.companyIntBlock}>
                    <BookingDeleteBlock
                    key={reservation._id}
                    compName={reservation.timeslot.company.name}
                    date={reservation.timeslot.date.split('T')[0]}
                    time={reservation.timeslot.startTime + " - " + reservation.timeslot.endTime}
                    />
                </div>
            ))}
        </div>
        </div>
        
    )
}