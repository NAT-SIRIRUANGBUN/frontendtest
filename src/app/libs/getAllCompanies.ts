'use server'

import { revalidateTag } from "next/cache"

export default async function getAllCompanies () {

    const backend_url = process.env.BACKEND_URL
    const allCompanies = await (await fetch('http://localhost:1234/api/companies' , {next : {tags : ['allCompanies']}})).json()

    
    return allCompanies

}