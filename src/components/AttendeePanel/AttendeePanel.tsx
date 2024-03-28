'use client'

import styles from './attendeepanel.module.css'
import Attendee from '../Attendee/Attendee'
import { IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { useState } from 'react';

export default function AttendeePanel({reservation} : {reservation : any}){


    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        if (reservation.length != 0)
            setExpanded(!expanded);
    };
    return(
    
            <div className={styles.fullBlock}>
                <div className={styles.rowBlock}> 
                    {expanded &&
                        <div className={styles.Heading}>Attendee :</div>
                    }
                    {!expanded &&
                        <div className={styles.numbersOfAttendee}> {reservation.length} attendees in this session </div>
                    }
                    

                    <div className={styles.minimizeBlock}> 
                        <IconButton onClick={toggleExpand} aria-label={expanded ? 'Collapse' : 'Expand'}>
                            {expanded ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                        </IconButton>
                    </div>
                </div>
                {expanded && (
                    <>
                    {reservation.map((attendee : any) => (
                        <Attendee
                        key={attendee.user.email ? attendee.user.email : 'unknow email'}
                        name={attendee.user.name ? attendee.user.name : 'unknow name'}
                        tel={attendee.user.tel ? attendee.user.tel : 'unknow tel'}
                        email={attendee.user.email}
                        />
                    ))}
                    </>
                )}
            </div>
        
        
    )
}