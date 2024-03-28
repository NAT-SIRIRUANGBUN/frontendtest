import styles from './bookingDeleteBlock.module.css'
import { Button } from '@mui/material';


export default function BookingDeleteBlock({compName, date, time} : {compName:string, date:string, time:string}) {


    return (
        
            <div className={styles.reserve}>
                <div className={styles.compName}>{compName}</div>
                <div className={styles.date}>{date}</div>
                <div className={styles.time}>{time}</div>
                <div className={styles.buttonBlock}>
                    <Button variant="contained" className={styles.deleteButton}>
                        Delete 
                    </Button>
                </div>
                
            </div>

    )

}