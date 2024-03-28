'use server'

import revalidateData from "./revalidataData"


const backend_url = process.env.BACKEND_URL

export default async function deleteTimeSlot (user : any , timeslotId : string) {
    const deleteTimeSlot = await fetch(`${backend_url}/api/companies/${user.data._id}/timeslot/${timeslotId}` , {
        method : 'DELETE',
        headers : {
            authorization : `Bearer ${user.data.token}`
        }
    })
    if (!deleteTimeSlot.ok)
        return null
    
    revalidateData()
    return await deleteTimeSlot.json()
}