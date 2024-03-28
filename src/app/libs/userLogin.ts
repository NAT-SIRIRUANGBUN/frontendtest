const backend_url = process.env.BACKEND_URL

export default async function userLogin(userEmail : string , userPassword : string) {
    const userToken = await getUserToken(userEmail , userPassword)
    const userDetail = await getUserDetail(userToken.token)

    return userDetail

}

async function getUserToken (userEmail : string, userPassword : string) {
    const responseToken = await fetch(`${backend_url}/api/auth/login` , {
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

async function getUserDetail (userToken : string) {

    const userDetail = await (await fetch(`${backend_url}/api/auth/me` , {
        headers : {
            authorization : `Bearer ${userToken}`
        }
        ,
        cache : 'no-store'
    })).json()

    if (!userDetail)
        throw new Error ('Faild to get User')

    const userDetailMinimal = {_id : userDetail.data._id , role : userDetail.data.role , token : userToken}
    
    return  userDetailMinimal
}