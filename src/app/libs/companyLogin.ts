import getUserData from "./getUserData"

const backend_url = process.env.BACKEND_URL

export default async function companyLogin(userEmail : string , userPassword : string) {
    const userToken = await getUserToken(userEmail , userPassword)
    const tempSession = {user : {
        role : 'company',
        token : userToken.token
    }}

    const userDetail = (await getUserData(tempSession)).data
    userDetail.token = userToken.token

    return userDetail

}

async function getUserToken (userEmail : string, userPassword : string) {
    const responseToken = await fetch(`${backend_url}/api/companies/auth/login` , {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
            email : userEmail , 
            password : userPassword
        })
    })

    if (!responseToken.ok)
        throw new Error ('Faild to get token')

    return await responseToken.json()
}

