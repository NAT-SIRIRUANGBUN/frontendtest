import CompanyIntBlock from "../CompanyIntBlock/CompanyBlock";
import styles from './companyintpanel.module.css'

    const mockTimeslotRepo = [
        {
          id: "001",
          compName: "AunnieInwZa",
          image: "/Icon/account-black.png",
          currentCapa: 0,
          maxCapa: 3,
          date: new Date('2023-03-24'),
          time: '14:00',
          fav: true
        },
        {id: "002",compName: "Aunnoon",image: "/Icon/account-black.png",currentCapa: 2,maxCapa: 5,date: new Date('2023-03-25'),time: '10:30',fav: false},
        {id: "003",compName: "Aunneeeee",image: "/Icon/account-black.png",currentCapa: 1,maxCapa: 4,date: new Date('2023-03-26'),time: '16:00',fav: true},
        {id: "004",compName: "Aunni",image: "/Icon/account-black.png",currentCapa: 3,maxCapa: 3,date: new Date('2023-03-27'),time: '09:00',fav: false},
        {id: "005",compName: "Aunnnn",image: "/Icon/account-black.png",currentCapa: 0,maxCapa: 2,date: new Date('2023-03-28'),time: '13:30',fav: true},
        {id: "006",compName: "Aunnannnnnn",image: "/Icon/account-black.png",currentCapa: 0,maxCapa: 2,date: new Date('2023-03-28'),time: '13:30',fav: true},
        {id: "007",compName: "Aunnannnnnn",image: "/Icon/account-black.png",currentCapa: 0,maxCapa: 2,date: new Date('2023-03-28'),time: '13:30',fav: true},
        {id: "008",compName: "Aunnannnnnn",image: "/Icon/account-black.png",currentCapa: 0,maxCapa: 2,date: new Date('2023-03-28'),time: '13:30',fav: true},
        {id: "009",compName: "Aunnannnnnn",image: "/Icon/account-black.png",currentCapa: 0,maxCapa: 2,date: new Date('2023-03-28'),time: '13:30',fav: true},
        {id: "010",compName: "Aunnannnnnn",image: "/Icon/account-black.png",currentCapa: 0,maxCapa: 2,date: new Date('2023-03-28'),time: '13:30',fav: true}
      ];


export default function CompanyIntPanel(){
    return(
        <div className={styles.fullBlock}>
            {mockTimeslotRepo.map((timeslot) => (
                <div className={styles.companyIntBlock}>
                    <CompanyIntBlock
                    key={timeslot.id}
                    companyName={timeslot.compName}
                    imgSrc={timeslot.image}
                    currentCapacity={timeslot.currentCapa}
                    maxCapacity={timeslot.maxCapa}
                    date={timeslot.date}
                    time={timeslot.time}
                    fav={timeslot.fav}
                    />
                </div>
            ))}
        </div>
    )
}