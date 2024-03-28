'use client'

import { use } from 'react'
import styles from './logoutbutton.module.css'
import { signOut } from 'next-auth/react'

export default function LogoutButton () {
    return (
        <button className={styles.LogoutButton} onClick={() => {signOut({callbackUrl : '/'})}}>Sign Out</button>
    )
}