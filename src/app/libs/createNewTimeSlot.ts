'use server'

import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import revalidateData from "./revalidataData"


const backend_url = process.env.BACKEND_URL

export default async function createNewTimeSlot (user : any , date : string, startTime : string , endTime : string , capacity : number , description : string) {
    
    const newTimeSlot = await (await fetch(`${backend_url}/api/companies/${user.data._id}/timeslot` , 
    
    {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json',
            authorization : `Bearer ${user.data.token}`
        },
        body : JSON.stringify({
            date , startTime , endTime , capacity , description
        })
    })).json()

    revalidateData()
    return newTimeSlot

}