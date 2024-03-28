'use server'

import revalidateData from "./revalidataData"


export default async function createNewCompany(user : any , companyData : any) {
    const backend_url = process.env.BACKEND_URL
    const newCompany = await fetch(`${backend_url}/api/companies` , {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json',
            authorization : `Bearer ${user.data.token}`
        },
        body : JSON.stringify({
            ...companyData
        })
    })
    if (!newCompany.ok)
        return null
    
    revalidateData()

    return await newCompany.json()
}