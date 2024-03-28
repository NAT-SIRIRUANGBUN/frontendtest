// import Image from 'next/image'
// import styles from './page.module.css'
// import CompanyIntBlock from '@/components/CompanyIntBlock/CompanyBlock'
// import CompanyIntPanel from '@/components/CompanyIntPanel/CompanyIntPanel'
// import TimeSlot from '@/components/TimeSlot/TimeSlot'
// import TimeSlotPanel from '@/components/TimeSlotPanel/TimeSlotPanel'
// import CompanyBlock from '@/components/CompanyBlock/CompanyBlock'
import CompanyPanel from '@/components/CompanyPanel/CompanyPanel'
import getAllCompanies from '../libs/getAllCompanies'
import getUserData from '../libs/getUserData'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { setEngine } from 'crypto'
import { redirect } from 'next/navigation'
import revalidateData from '../libs/revalidataData'
export default async function CompanyPage() {

    const session = await getServerSession(authOptions)

    const allCompanies = await getAllCompanies()


    const thisUser = await getUserData(session)

    if (session && thisUser.data.role === 'admin')
        redirect('/a/companies')

    return (
        
            <CompanyPanel allCompanies = {allCompanies} thisUser = {thisUser}/>
         
    )
}
