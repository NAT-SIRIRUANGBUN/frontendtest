'use server'

import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/authOptions"
import revalidateData from "./revalidataData"

const backend_url = process.env.BACKEND_URL

export default async function reserveTimeSlot(timeslot : string) {
    
    const session = await getServerSession(authOptions)

    const reservedTimeSlot = await (await fetch(`${backend_url}/api/timeslot/${timeslot}/reservation`,{
        method : 'POST',
        headers : {
            'Content-Type' : 'application.json',
            authorization : `Bearer ${session?.user.token}`
        }
    })).json()

    revalidateData()
    
    return reserveTimeSlot
}