import { getServerSession, Session } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
const backend_url = process.env.BACKEND_URL

export default async function getUserData(session : any) {

    if (!session)
        return null 
        
    var userData 

    if (session.user.role === 'user' || session.user.role === 'admin') {
        userData = await (await fetch(`${backend_url}/api/auth/me` , {
            headers : {
                authorization : `Bearer ${session.user.token}`
            },
            next : {
                tags : ['userData']
            }
        })).json()
    }
    else if (session.user.role === 'company') {
        userData = await (await fetch(`${backend_url}/api/companies/auth/getdetail` , {
            headers : {
                authorization : `Bearer ${session.user.token}`
            },
            next : {
                tags : ['companyData']
            }
        })).json()
    }
    
    userData.data.token = session.user.token
    return userData
    
}