import Image from 'next/image'
import styles from './page.module.css'
import CompanyIntBlock from '@/components/CompanyIntBlock/CompanyBlock'
import CompanyIntPanel from '@/components/CompanyIntPanel/CompanyIntPanel'

export default function InterviewPage() {
  return (
      <div>
        {/* <CompanyIntBlock companyName='AunnieInwZa' imgSrc='/Icon/account-black.png' currentCapacity={0} maxCapacity={3} date={new Date('2023-03-24')} time='14:00' fav={true}/>
        <CompanyIntBlock companyName='AunnieInwZa' imgSrc='/Icon/account-black.png' currentCapacity={0} maxCapacity={3} date={new Date('2023-12-24')} time='14:00' fav={false}/> */}
        <CompanyIntPanel/>
      </div>
  )
}
