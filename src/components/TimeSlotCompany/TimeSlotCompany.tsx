'use client'

import styles from './timeslotCompany.module.css'
import { Button } from '@mui/material'
import { IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { useState } from 'react';
import reserveTimeSlot from '@/app/libs/reserveTimeSlot';
import { useSession } from 'next-auth/react';
import getMe from '@/app/libs/getMe';

export default function TimeSlotComapny({date,time,currentCapacity,maxCapacity,reserv,desc,tid}:{date:Date , time:string , currentCapacity:number , maxCapacity:number , reserv:number , desc:string , tid : string}){

    const [expanded, setExpanded] = useState(false);
    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    const {data : session , update : updateSession} = useSession()

    

    return(
        <div className={styles.fullBlock}>
            <div className={styles.rowBlock}>
                <div className={styles.textBlock}>{date.toLocaleDateString()}</div>
                <div className={styles.textBlock}>{time}</div>
                <div className={styles.textBlock}>Capacity : {currentCapacity}/{maxCapacity}</div>
                {/* remove  BUTTON */}
                <div className={styles.minimizeBlock}> 
                    <IconButton onClick={toggleExpand} aria-label={expanded ? 'Collapse' : 'Expand'}>
                        {expanded ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                    </IconButton>
                </div>
            </div>
            {expanded && <div className={styles.description}>{desc}</div>}
        </div>
    )
}