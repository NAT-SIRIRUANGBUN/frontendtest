import getAllUser from "@/app/libs/admingetalluser"
import styles from './page.module.css'
import UserReservationBlock from "@/components/UserReservationBlock/UserReservationBlock"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
export default async function viewAllReservation() {

    const session = await getServerSession(authOptions)

    if (session?.user.role !== 'admin')
        redirect('/companies')

    const allUser = ((await getAllUser()).data).filter((user : any) => user.role === 'user' && user.reservation.length > 0)
    
    return (
        <div className={styles.Sec1}>
            <div className={styles.ReservationWrapper}>

                {allUser.map((user : any) => (<UserReservationBlock user={user} key={user._id}/>))}

            </div>
        </div>
    )

}