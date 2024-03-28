'use server'

import revalidateData from "./revalidataData"


const backend_url = process.env.BACKEND_URL

export default async function userUpdate (token : any , newData : Object) {
    try {

    const updateUser = await fetch(`${backend_url}/api/auth/me` , {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json',
            authorization : `Bearer ${token}`
        },
        body : JSON.stringify(
            newData
        )
    })

    if (!updateUser.ok)
        return null

        
    revalidateData()
    return await updateUser.json()
}
    catch(err) {
        console.error("return same session")
        return null
    }

}