'use server'
const backend_url = process.env.BACKEND_URL
export default async function registerUser (userEmail : string , userPassword : string , userName : string , userTel : string) {
    const newUser = await fetch(`${backend_url}/api/auth/register` , {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
            email : userEmail,
            password : userPassword,
            name : userName,
            tel : userTel
        })
    })

    if (!newUser.ok)
        throw new Error ("Can't Register User")
    
    const newUserJson = await newUser.json()
    
    const thisUser = await getUserDetail(newUserJson.token)

    thisUser.data.token = newUserJson.token
    
    return thisUser
}

async function getUserDetail (userToken : string) {

    const userDetail = await fetch(`${backend_url}/api/auth/me` , {
        headers : {
            authorization : `Bearer ${userToken}`
        }
    })

    if (!userDetail)
        throw new Error ('Faild to get User')

    return await userDetail.json()
}