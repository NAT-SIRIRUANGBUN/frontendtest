import styles from './companyadminpanel.module.css'
import CompanyAdminBlock from '../CompanyAdminBlock/CompanyAdminBlock';
import getAllCompanies from '@/app/libs/getAllCompanies';

export default async function({user} : {user : any}){
    

    const allCompanies = await getAllCompanies()

      return(
        <div className={styles.fullPage}>
            <div className={styles.fullOutline}>
            <div className={styles.fullBlock}>
                {allCompanies.data.map((company : any) => (
                    <CompanyAdminBlock key={company._id} user={user} company={company}/>
                ))}
            </div>
            </div>
            
        </div>
      )
}