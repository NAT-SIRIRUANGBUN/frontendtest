import styles from './sessionpanel.module.css'
import SessionBlock from '../Session/SessionBlock'
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';

export default async function SessionPanel({user} : {user : any}){

    const thisCompanyTimeSlot = user.data.timeslot

    return(
            <div className={styles.fullBlock}>
            {thisCompanyTimeSlot.map((timeslot : any) => (
                        <SessionBlock key={timeslot._id} user = {user} timeslot = {timeslot}/>
                ))}
            </div>
        
    )
}