import TimeSlotAdmin from '../TimeSlotAdmin/TimeSlotAdmin';
import styles from './timeslotadminpanel.module.css'

export default function TimeSlotAdminPanel({company, user} : {company : any , user : any}){



    return(
            <div className={styles.fullBlock}>
                {company.timeslot.map((timeslot : any) => (

                       <TimeSlotAdmin key={timeslot._id} user={user} company={company} timeslot={timeslot}/>
                ))}
            </div>
    )
    
}