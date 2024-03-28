'use server'

import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"

export default async function getTimeSlotDetail (timeslot : Array<string>) {

    const backend_url = process.env.BACKEND_URL

    const timeSlotArray = new Array<Object>

    const session = await getServerSession(authOptions)

    for (let i = 0 ; i < timeslot.length ; i++) {
        const timeSlot = await (await (fetch(`${backend_url}/api/timeslot/${timeslot[i]}` , {
            headers : {
                authorization : `Bearer ${session?.user.token}`
            }
        }))).json()
        timeSlotArray.push(timeSlot)
    }

    return timeSlotArray

}