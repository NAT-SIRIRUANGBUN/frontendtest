'use server'

import revalidateData from "./revalidataData"


const backend_url = process.env.BACKEND_URL

export default async function updateTimeSlot (user : any , timeslotId : string , newData : any) {
    const updatedTimeSlot = await fetch(`${backend_url}/api/companies/${user.data._id}/timeslot/${timeslotId}` , {
        method : 'PUT',
        headers : {
            authorization : `Bearer ${user.data.token}`,
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(newData)
    })


    if (!updatedTimeSlot.ok)
        return null
    
    revalidateData()
    return await updatedTimeSlot.json()
}