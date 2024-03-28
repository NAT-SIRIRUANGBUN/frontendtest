// 'use client'
// import { useSession } from 'next-auth/react'
// import CreateSession from '../CreateSession/CreateSession'
// import SessionPanel from '../SessionPanel/SessionPanel'
// import styles from './companyprofile.module.css'
// import { Button } from '@mui/material'

// export default function CompanyProfile({name,web,tel,email,desc,img}:{name:string,web:string,tel:string,email:string,desc:string,img:string}){
//     return(
//         <div className={styles.mock}>
//         <div className={styles.fullBlock}>
//             <div className={styles.rowBlock}>
//                 <div className={styles.topic}> Your Profile </div>
//                 <div className={styles.editBlock}> 
//                     <Button variant="contained" className={styles.editButton}>
//                         Edit
//                     </Button> 
//                 </div>
//             </div>
//             <div className={styles.rowBlock}>
//                 <div className={styles.imageBlock}>
//                     <img src={img} alt='Profile Picture' className={styles.pic}/>
//                 </div>
//                 <div className={styles.textBlock}>
//                     <div className={styles.topicBlock}>
//                         <div> Name </div>
//                         <div> Website </div>
//                         <div> Tel. number </div>
//                         <div> Email </div>
//                         <div> Description </div>
//                     </div>
//                     <div className={styles.contentBlock}>
//                         <div> {name} </div>
//                         <div> {web} </div>
//                         <div> {tel} </div>
//                         <div> {email} </div>
//                         <div> {desc} </div>
//                     </div>
//                 </div>
//             </div>
//             <div className={styles.session}> Create new session </div>
//             <div> <CreateSession/> </div>
//             <div className={styles.session}> Your Session </div>
//             <div> <SessionPanel/> </div>
//             <div className={styles.signOutBlock}> 
//                 <Button variant="contained" className={styles.signoutButton}>
//                     Sign Out
//                 </Button> 
//             </div>
//         </div>
//         </div>
//     )
// }