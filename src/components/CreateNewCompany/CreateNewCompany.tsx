'use client'

import styles from './createnewcompany.module.css'
import { Button, TextField } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { IconButton } from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { useState } from 'react';
import createNewCompany from '@/app/libs/createNewCompany';
import Image from 'next/image';
export default function CreateNewCompany({user} : {user : any}) {
    
    const [name , setName] = useState('')
    const [website , setWebsite] = useState('')
    const [tel , setTel] = useState('')
    const [login_email , setLoginEmail] = useState('')
    const [contact_email , setContactEmail] = useState('')
    const [description , setDescription] = useState('')
    const [password , setPassword] = useState('')
    const [imageurl , setImageUrl] = useState('https://lh3.googleusercontent.com/d/1fEupp6pabESavw2XvXXmYRpK46vLf2Ea')
    const [address , setAddress] = useState('')
    async function createCompanyHandler () {

        
       if (!imageurl)
            setImageUrl('https://lh3.googleusercontent.com/d/1fEupp6pabESavw2XvXXmYRpK46vLf2Ea')
            
       const companyData =  {
            name : name,
            website : website,
            tel : tel,
            description : description,
            contact_email : contact_email,
            login_email: login_email,
            password : password,
            imageurl : imageurl
        }

        const newCompany = await createNewCompany(user , companyData)

        if (newCompany && newCompany.success == true) 
            window.location.reload()
    }
    return (
        <div className={styles.fullPage}>
        <div className={styles.fullBlock}>
            <div className={styles.topPart}>
                <div className={styles.imageBlock}>
                    <Image width={0} height={0} sizes='100vh' src={imageurl} alt='Profile x picture' className={styles.image}/>
                    <div className={styles.iconBlock}>
                    <IconButton onClick={() => {const newImage = prompt('New Image Url') ; if (newImage){setImageUrl(newImage)}}} aria-label="edit">
                        <PhotoCameraIcon className={styles.cameraButton}/>
                    </IconButton> 
                    </div>
                </div>
                <div className={styles.textBlock}>
                    <div className={styles.rowBlock}>
                        <div className={styles.topicBlock}>
                            Name*
                        </div>
                        <div className={styles.inputBlock}>
                            <TextField value={name} onChange={(newValue) => {setName(newValue.target.value)}} id="name" variant="standard" className={styles.textField}/>
                        </div>
                    </div>
                    <div className={styles.rowBlock}>
                        <div className={styles.topicBlock}>
                            Website
                        </div>
                        <div className={styles.inputBlock}>
                            <TextField value={website} onChange={(newValue) => {setWebsite(newValue.target.value)}} id="website" variant="standard" className={styles.textField}/>
                        </div>
                    </div>

                    <div className={styles.rowBlock}>
                        <div className={styles.topicBlock}>
                            Address
                        </div>
                        <div className={styles.inputBlock}>
                            <TextField value={address} onChange={(newValue) => {setAddress(newValue.target.value)}} id="address" variant="standard" className={styles.textField}/>
                        </div>
                    </div>



                    <div className={styles.rowBlock}>
                        <div className={styles.topicBlock}>
                            Tel. number
                        </div>
                        <div className={styles.inputBlock}>
                            <TextField value={tel} onChange={(newValue) => {setTel(newValue.target.value)}} id="tel" variant="standard" className={styles.textField}/>
                        </div>
                    </div>
                    <div className={styles.rowBlock}>
                        <div className={styles.topicBlock}>
                            Description
                        </div>
                        <div className={styles.inputBlock}>
                            <TextField value={description} onChange={(newValue) => {setDescription(newValue.target.value)}} id="desc" variant="standard" className={styles.textField}/>
                        </div>
                    </div>
                    <div className={styles.rowBlock}>
                        <div className={styles.topicBlock}>
                            Contact Email
                        </div>
                        <div className={styles.inputBlock}>
                            <TextField value={contact_email} onChange={(newValue) => {setContactEmail(newValue.target.value)}} id="contactemail" variant="standard" className={styles.textField}/>
                        </div>
                    </div>
                    <div className={styles.rowBlock}>
                        <div className={styles.topicBlock}>
                            Sign-up Email*
                        </div>
                        <div className={styles.inputBlock}>
                            <TextField value={login_email} onChange={(newValue) => {setLoginEmail(newValue.target.value)}} id="signupemail" variant="standard" className={styles.textField}/>
                        </div>
                    </div>
                    <div className={styles.rowBlock}>
                        <div className={styles.topicBlock}>
                            Password*
                        </div>
                        <div className={styles.inputBlock}>
                            <TextField value={password} onChange={(newValue) => {setPassword(newValue.target.value)}} id="password" type="password" variant="standard" className={styles.textField}/>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
            <div className={styles.botPart}>
                <div className={styles.buttonBlock}>
                    <Button onClick={async () => { await createCompanyHandler()}} variant="contained" className={styles.addButton}>
                        Create new Company
                    </Button>
                </div>
            </div>
        </div>
        </div>
    )
}