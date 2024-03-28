'use server'

import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

const backend_url = process.env.BACKEND_URL

export default async function getUserReservation () {

    const session = await getServerSession(authOptions)
    const reservationArray  = new Array()

    for (let i = 0 ; i < session?.user.reservation.length ; i++) {
        const thisReservation = await (await fetch(`${backend_url}/api/reservation/${session?.user.reservation[i]}` , {
            headers : {
                authorization : `Bearer ${session?.user.token}`
            },
            cache : 'no-cache'
        })).json()
        reservationArray.push(thisReservation.data)
    }

    return reservationArray
}