'use server'

import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/authOptions"

export default async function getMe () {

    const session = await getServerSession(authOptions)

    const backend_url = process.env.BACKEND_URL
    const Me = await (await (fetch(`${backend_url}/api/auth/me` , {
        cache : 'no-store',
        headers : {
            authorization : `Bearer ${session?.user.token}`
        }
    }))).json()

    return Me
}