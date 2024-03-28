import NextAuth from "next-auth/next";
import nextAuth, { AuthOptions , NextAuthOptions} from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";
import userLogin from "@/app/libs/userLogin";
import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import { AdapterUser } from "next-auth/adapters";
import companyLogin from "@/app/libs/companyLogin";
import { authOptions } from "./authOptions";



const handler  = nextAuth(authOptions)

export {handler as GET , handler as POST}


