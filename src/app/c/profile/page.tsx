import CompanyDetailCard from "@/components/CompanyDetailCard/CompanyDetailCard"
import styles from './page.module.css'
import CreateSession from "@/components/CreateSession/CreateSession"
import CompanyTimeSlot from "@/components/CompanyTimeSlot/ConpanyTimeSlot"
import SessionPanel from "@/components/SessionPanel/SessionPanel"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import getUserData from "@/app/libs/getUserData"
import LogoutButton from "@/components/LogoutButton/LogoutButton"
import { redirect, RedirectType } from "next/navigation"

export default async function TestAttendee(){

    const session = await getServerSession(authOptions)

    if (session?.user.role !== 'company')
        redirect('/profile')

    
    const thisUser = await getUserData(session)
    return(
        <div>
            <div className={styles.Sec1}>
                <CompanyDetailCard user = {thisUser} />
            </div>

            <div className={styles.Sec2}>
                <LogoutButton/>
                <h2 className={styles.HeaderText}>Create Sesison</h2>
                <CreateSession user = {thisUser}/>
            </div>

            <div className={styles.Sec3}>
                <h2 className={styles.HeaderText}>Your Session</h2>
                <SessionPanel user={thisUser}></SessionPanel>
            </div>
        </div>
        
    )
}