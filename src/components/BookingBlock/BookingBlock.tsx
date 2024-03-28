import BookingDelete from '../BookingDeleteBlock/BookingDeleteBlock'
import BookingDeletePanel from '../BookingDeletePanel/BookingDeletePanel'
import styles from './bookingBlock.module.css'

export default function BookingBlock({userName, tel, email , reserv} : {userName:string, tel:string, email:string , reserv:object} ) {
    return (
        
            
                <div className={styles.userBlock}>
                    <div className={styles.detailBlock}>
                        <div className={styles.infoBlock}>
                            <div className={styles.cover}>
                                <div className={styles.userName}>{userName}</div>
                                <div className={styles.tel}>{tel}</div>
                                <div className={styles.email}>{email}</div>
                            </div>
                        </div>    
                        <BookingDeletePanel reserv={reserv}/>
                    </div>
                </div>
        
    )
}