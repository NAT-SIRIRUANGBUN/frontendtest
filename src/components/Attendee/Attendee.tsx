import styles from './attendee.module.css'

export default function Attendee({name,tel,email}:{name:string,tel:string,email:string}){
    return(
        <div className={styles.fullBlock}>
            <div className={styles.textBlock}> {name} </div>
            <div className={styles.textBlock}> {tel} </div>
            <div className={styles.textBlock}> {email} </div>
        </div>
    )
}