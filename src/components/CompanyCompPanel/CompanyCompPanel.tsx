// import styles from './companyComppanel.module.css'
// import CompanyBlock from '../CompanyBlock/CompanyBlock';
// import getAllCompanies from '@/app/libs/getAllCompanies';

// export default async function(){
//     // const mockTimeslotRepo = [
//     //     {
//     //         id: "001",
//     //         compName: "AunnieInwZa",
//     //         image: "/Icon/account-black.png",
//     //         currentCapa: 0,
//     //         maxCapa: 3,
//     //         date: new Date('2023-03-24'),
//     //         time: '14:00',
//     //         reserv: true,
//     //         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,....",
//     //         website: "www.example.com",
//     //         tel: "123-456-7890",
//     //         email: "info@example.com",
//     //         address: "123 Example St, Example City"
//     //     },
//     //     { id: "002", compName: "Aunnoon", image: "/Icon/account-black.png", currentCapa: 2, maxCapa: 5, date: new Date('2023-03-25'), time: '10:30', reserv: false, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,....", website: "www.example.com", tel: "123-456-7890", email: "info@example.com", address: "123 Example St, Example City" },
//     //     { id: "003", compName: "Aunneeeee", image: "/Icon/account-black.png", currentCapa: 1, maxCapa: 4, date: new Date('2023-03-26'), time: '16:00', reserv: true, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,....", website: "www.example.com", tel: "123-456-7890", email: "info@example.com", address: "123 Example St, Example City" },
//     //     { id: "004", compName: "Aunni", image: "/Icon/account-black.png", currentCapa: 3, maxCapa: 3, date: new Date('2023-03-27'), time: '09:00', reserv: false, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,....", website: "www.example.com", tel: "123-456-7890", email: "info@example.com", address: "123 Example St, Example City" },
//     //     { id: "005", compName: "Aunnnn", image: "/Icon/account-black.png", currentCapa: 0, maxCapa: 2, date: new Date('2023-03-28'), time: '13:30', reserv: true, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,....", website: "www.example.com", tel: "123-456-7890", email: "info@example.com", address: "123 Example St, Example City" }
//     // ];
    
//     const allCompanies = await getAllCompanies()

//       return(
//         <div className={styles.fullPage}>
//             <div className={styles.fullOutline}>
//             <div className={styles.fullBlock}>
//                 {allCompanies.data.map((company : any) => (
                    
//                     <CompanyBlock key={company._id} compName={company.name}
//                         website={company.website}
//                         tel={company.tel}
//                         email={company.contact_email}
//                         address={company.address}
//                         desc={company.description}
//                         img={'https://drive.usercontent.google.com/download?id=1ZJwdRn4YZWioLHBIpa9zTXMzAsFtcf1k'}
//                         timeslot={company.timeslot}
//                     />
//                 ))}
//             </div>
//             </div>
            
//         </div>
//       )
// }