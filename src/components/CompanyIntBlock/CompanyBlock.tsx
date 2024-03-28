import styles from './companyintblock.module.css'
import { Button } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'

export default function CompanyIntBlock({companyName, imgSrc , currentCapacity , maxCapacity , date , time ,fav} : {companyName:string, imgSrc:string ,currentCapacity:number , maxCapacity:number , date:Date , time:string , fav:boolean}){
    return(
        <div className={styles.fullBlock}>
            <div className={styles.leftBlock}>
                <div className={styles.textContent}>{companyName}</div>
                <div className={styles.textContent}>Capacity : {currentCapacity}/{maxCapacity}</div>
                <div className={styles.textContent}>{date.toLocaleDateString()}</div>
                <div className={styles.textContent}>{time}</div>
                
                    {
                        fav?<Button variant="contained" endIcon={<StarIcon className={styles.customIcon} />} className={styles.addButton}>
                            Add to your favourite
                        </Button>:
                        <Button variant="contained" disabled className={styles.disabledButton}>
                            Already in your favourite
                        </Button>
                    }
                
            </div>
            <div className={styles.rightBlock}>
                <img src={imgSrc} 
                    alt='Company Picture'
                    className={styles.compImg}
                />
            </div>
        </div>
    )
}