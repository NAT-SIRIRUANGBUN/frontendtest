'use client'

import styles from './timeslotadmin.module.css'
import { Button } from '@mui/material'
import { IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { useEffect, useRef, useState } from 'react';
import updateTimeSlot from '@/app/libs/updateTimeSlot';
import deleteTimeSlot from '@/app/libs/deleteTimeSlot';

export default function TimeSlotAdmin({timeslot , company , user} : {timeslot : any  , company : any, user : any}){
    const [edited , setEdited] = useState(false)
    const [value , setValue] = useState(timeslot.description)

    const inp : any= useRef(null)

    async function setEditHandler () {
        if (edited) {
            
            const newData = {description : value}
            const tmpUser = user
            tmpUser.data._id = company._id
            const updated = await updateTimeSlot( tmpUser , timeslot._id , newData)

            inp.current.disabled = true

            setEdited(!edited)
        }
        else {
            inp.current.disabled = false
            setEdited(!edited)
        }
    }

    return(
        <div className={styles.fullBlock}>
            <div className={styles.rowBlock}>
                <div  className={styles.textBlock}>{new Date(timeslot.date.split('T')[0]).toLocaleDateString()}</div>
                <div className={styles.textBlock}>{timeslot.startTime + '-' + timeslot.endTime}</div>
                <div className={styles.textBlock}>Capacity : {timeslot.reservation.length}/{timeslot.capacity}</div>
                <div className={styles.buttonBlock}> 
                    <div className={styles.editBlock}>
                        <Button onClick={async() => {await setEditHandler()}} variant="contained" className={edited? styles.saveButton : styles.editButton}>
                        {edited ? 'Save' : 'Edit'}
                        </Button>
                    </div>
                    <div className={styles.deleteBlock}>
                        <Button onClick={async () => {const tmpUser = user ; tmpUser.data._id = company._id ;  await deleteTimeSlot(tmpUser , timeslot._id)}} variant="contained" className={styles.deleteButton}>
                            Delete
                        </Button>
                    </div>
                </div>
                
            </div>
            <div className={styles.InputWrapper}>
                <input disabled ref={inp} type="text" value={value} onChange={(newValue) => {inp.current.value = setValue(newValue.target.value)}} className={styles.description}/>
            </div>
             </div>
    )
}