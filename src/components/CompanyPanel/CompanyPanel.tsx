import styles from './companypanel.module.css'
import CompanyBlock from '../CompanyBlock/CompanyBlock';
import getAllCompanies from '@/app/libs/getAllCompanies';

export default async function({allCompanies , thisUser} : {allCompanies : any , thisUser : any}){

      return(
        <div className={styles.fullPage}>
            <div className={styles.fullOutline}>
            <div className={styles.fullBlock}>
                {allCompanies.data.map((company : any) => (
                    <CompanyBlock key={company._id} company = {company} thisUser = {thisUser}/>
                ))}
            </div>
            </div>
            
        </div>
      )
}