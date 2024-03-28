import { TextField } from '@mui/material'
import styles from './registerform.module.css'

export default function RegisterForm(){
    
    return (
        <div className={styles.registerBlock}>
            <h1 className={styles.title}>Sign up</h1>
            <form id='register-form' className={styles.registerForm}>
                <TextField
                required
                id="name"
                label="Name-Lastname"
                variant="outlined"
                className={styles.TextField}
                margin='dense'/>
                <TextField
                required
                id="email"
                label="Email"
                variant="outlined"
                
                className={styles.TextField}
                margin='dense'/>
                <TextField
                required
                id="telnumber"
                label="Telephone number"
                variant="outlined"
                
                className={styles.TextField}
                margin='dense'/>
                <TextField
                required
                id="password"
                label="Create your password"
                variant="outlined"
                
                type='password'
                className={styles.TextField}
                margin='dense'/>
                <TextField
                required
                id="confirm-password"
                label="Confirm your password"
                variant="outlined"
                
                type='password'
                className={styles.TextField}
                margin='dense'/>
                <button className={styles.registerButton} type='submit'>
                    Sign up
                </button>
            </form>
        </div>
    )
}