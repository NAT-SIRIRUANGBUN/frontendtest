'use client'

import TimeSlotAdminPanel from '../TimeSlotAdminPanel/TimeSlotAdminPanel';
import styles from './companyadminblock.module.css'
import { IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { useState } from 'react';
import Image from "next/image";
import { Button } from '@mui/material';
import { useRef } from 'react';

export default function CompanyAdminBlock({company , user}:{company : any , user : any}){

    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

      return(
        <div className={styles.mock}>
            <div className={styles.fullBlock}>
                <div className={styles.minimizeBlock}> 
                    <IconButton onClick={toggleExpand} aria-label={expanded ? 'Collapse' : 'Expand'}>
                        {expanded ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                    </IconButton>
                </div>
                <div className={styles.topPart}>
                    <div className={styles.textBlock}>
                        <div className={styles.compName}>{company.name}</div>
                        <div className={styles.compDesc}>{company.description}</div>
                    </div>
                    <div className={styles.imgBlock}>
                        <div className={styles.logoBlock}>
                            <Image width={0} height={0} sizes="100vh" src={company.imageurl} alt="company logo" className={styles.compLogo}/>
                        </div>
                    </div>
                </div>
                {expanded &&<div className={styles.bottomPart}>
                    <div className={styles.bottomTextBlock}>
                        <div className={styles.web}>
                                <div className={styles.topic}>Email : </div> 
                                <div> {company.contact_email} </div>
                            </div>
                            <div className={styles.web}>
                            <div className={styles.topic}>Tel. number : </div> 
                            <div> {company.tel? company.tel : 'none'} </div>
                        </div>
                        <div className={styles.web}>
                            <div className={styles.topic}>Website : </div> 
                            <div> 
                                <a href={company.website} target="_blank" rel="noopener noreferrer" className={styles.link}>{company.website? company.website : 'none'}</a> 
                            </div> 
                        </div> 
                        <div className={styles.web}>
                            <div className={styles.topic}>Address : </div> 
                            <div> {company.address? company.address : 'none'} </div>
                        </div>
                        
                        
                        
                    </div>
                    <div className={styles.session}> Session :</div>
                    <TimeSlotAdminPanel user = {user} company={company}/>
                </div>}
            </div>
        </div>
      )
}