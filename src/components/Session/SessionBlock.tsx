'use client'

import AttendeePanel from '../AttendeePanel/AttendeePanel'
import styles from './sessionblock.module.css'
import { Button } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
import deleteTimeSlot from '@/app/libs/deleteTimeSlot';
import { useRef, useState } from 'react';
import updateTimeSlot from '@/app/libs/updateTimeSlot';


export default function SessionBlock({timeslot , user}:{timeslot : any , user : any}){
    const [value , setValue] = useState(timeslot.description)
    const [isEdit , setEdit] = useState(false)
    const formm : any = useRef(null)
    async function editHandler () {
        if (isEdit == false) {
            setEdit(!isEdit)
            if (formm.current)
                formm.current.disabled = false
        }
        else {
            const newData = {description : value}
            const updated = await updateTimeSlot(user , timeslot._id , newData)
            setEdit(!isEdit)
            if (formm.current)
                formm.current.disabled = true
        }
    }

    return (
        <form className={styles.fullBlock}>
            <div className={styles.rowBlock}> 
                <div className={styles.topic}> 
                    {timeslot.date.split('T')[0]} 
                    
                </div>
                <div className={styles.Time}> 
                    {timeslot.startTime + "-" + timeslot.endTime} 
                    
                </div>
                <div className={styles.Capa}> 
                    Capacity:{timeslot.reservation.length}/{timeslot.capacity} 
                </div>
            </div>
            <div className={styles.topic}>Description</div>
            <input ref={formm} disabled onChange={(e : any) => setValue(e.target.value)} type='text' className={styles.DescInp} value={value}/> 

        
            <AttendeePanel reservation = {timeslot.reservation} />
            <div className={styles.buttonBlock}> 
                <Button onClick ={async () => {await editHandler()}} className={isEdit? styles.blockButtonConfirm : styles.blockButton }>{isEdit? 'Save' : 'Edit session'}</Button>
                <Button onClick = {async () => {await deleteTimeSlot(user , timeslot._id)}} className={styles.blockButtonDelete}>
                    Delete session
                </Button> 
            </div>
        </form>
    )
}