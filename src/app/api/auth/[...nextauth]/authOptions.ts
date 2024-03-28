import NextAuth from "next-auth/next";
import nextAuth, { AuthOptions , NextAuthOptions} from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";
import userLogin from "@/app/libs/userLogin";
import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import { AdapterUser } from "next-auth/adapters";
import companyLogin from "@/app/libs/companyLogin";


export const authOptions : NextAuthOptions = {
    providers : [
        CredentialsProvider({

            name: "Credentials",
            
            credentials: {
                email: { label: "Email", type: "text", placeholder: "Email" },
                password: { label: "Password", type: "password" },
                isCompany : {label : "isCompany" }
            },
            async authorize(credentials, req) {
                
                if (!credentials)
                    return null

                var user

                if (!credentials.isCompany || credentials.isCompany === 'false'){
                    user = await userLogin(credentials.email , credentials.password)
                }
                else{
                    user = await companyLogin(credentials.email , credentials.password)
                }

                if (user) 
                    return user as any
                else
                    return null
                            
        }
      })
    ],
    session : {strategy : 'jwt'},
    callbacks : {
        async jwt({token , user , session}) {
            return {...token , ...user}
        } , 
        async session({session , token , user} : {session : Session , token : any , user : any}) {
        
            session.user = {_id : token._id  , role : token.role , token : token.token}
            return session
        }
    },
    pages : {
        signIn : '/signin',
    }
}