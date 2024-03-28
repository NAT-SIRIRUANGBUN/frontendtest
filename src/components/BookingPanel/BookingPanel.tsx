import getAllUser from "@/app/libs/admingetalluser";
import BookingBlock from "../BookingBlock/BookingBlock";
import CompanyIntBlock from "../CompanyIntBlock/CompanyBlock";
import styles from './bookingPanel.module.css'

export default async function BookingPanel() {
    
    const allUser = await getAllUser();

    return(
        <div className={styles.fullBlock}>
            
            {allUser.data.map((user:any) => (
                <div className={styles.bookingPanel}>
                    <BookingBlock
                        key={user._id}
                        userName={user.name}
                        tel={user.tel}
                        email={user.email}
                        reserv={user.reservation}
                    />
                </div>
            ))}
        </div>
    )
}