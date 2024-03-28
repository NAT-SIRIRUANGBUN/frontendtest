'use server'
import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import revalidateData from "./revalidataData"


const backend_url = process.env.BACKEND_URL

export default async function deleteReservation (reservationId : string) {

    const session = await getServerSession(authOptions)

    const deleteReservation = await (await fetch(`${backend_url}/api/reservation/${reservationId}` , {
        method : 'DELETE',
        headers : {
            authorization : `Bearer ${session?.user.token}`
        }
    })).json()

    revalidateData()
    return deleteReservation
}