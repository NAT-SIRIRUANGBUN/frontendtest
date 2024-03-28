'use client'

import styles from './signin.module.css'
import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

import registerUser from '@/app/libs/registerUser'
import { signIn, useSession } from 'next-auth/react'

export default function SignIn() {

    async function SignUpClickHandler () {

        const email = document.forms[0]['email'].value
        const password = document.forms[0]['password'].value
        const name = document.forms[0]['namee'].value
        const tel = document.forms[0]['tel'].value

        const thisUser = await registerUser(email , password , name , tel)
        if (thisUser) {
            await signIn('credentials' , {
                email : thisUser.data.email,
                password : password,
                callbackUrl : '/'
            })
        }
    }

    async function SignInClickHandler () {

        const email = document.forms[1]['email'].value
        const password = document.forms[1]['password'].value
        const isCompany = document.forms[1]['isCompany'].checked
        await signIn('credentials' , {
            email : email,
            password : password,
            isCompany : isCompany,
            callbackUrl : '/'
        })

    }

    const router = useRouter()

    const [state , updateState] = useState(true)
    
    function stateHandler (newState : boolean) {
        if (state != newState)
            updateState(newState)
    }

    const {data : session} = useSession()

        return (
            <div className={styles.ContentWrapper}>
                <div className={(state? styles.SignUpPageMinimal :  styles.SignUpPage)}>
                    <div className={styles.SignUpHeader } onClick={() => {stateHandler(false)}}>Sign Up</div>
                        <form onSubmit={(e) => {e.preventDefault();}} name="SignUp" className={styles.SignUpForm}>
                            <input type="email" name="email" placeholder='Email' required/>
                            <input type="password"  name="password" placeholder='Password' required/>
                            <input type="text" name="namee" placeholder='Name Lastname (Optional)' />
                            <input type="tel" name="tel" placeholder='Telephone Number (Optional)' />
                            <input className={styles.SignUpButton} type="submit" value="Sign Up" onClick={() => {SignUpClickHandler();}}/>
                        </form>
                </div>
                <div className={(state? styles.SignInPageExpand : styles.SignInPage)}>
                    <div className={styles.SignInHeader} onClick={() => {stateHandler(true)}}>Sign In</div>
                    <form onSubmit={(e) => {e.preventDefault();}} name="SignIn" className={styles.SignInForm}>
                        <input type="email" name="email" placeholder='Email' required/>
                        <input type="password"  name="password" placeholder='Password' required/>
                        <div className={styles.CheckboxWrapper}>
                            <input type="checkbox" name="isCompany" />
                            <label>Sign In as Company</label>
                        </div>
                        
                        <input className={styles.SignInButton} type="submit" value="Sign In" onClick={() => {SignInClickHandler() ;}}/>
                    </form>
                </div>
            </div>
        )
}