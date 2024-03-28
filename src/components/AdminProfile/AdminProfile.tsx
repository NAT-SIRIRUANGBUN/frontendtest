import styles from './adminprofile.module.css'
import { IconButton } from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { Button, TextField } from '@mui/material';

export default function AdminProfile(){
    return (
        <div className={styles.fullBlock}>
            <div className={styles.topPart}>
                <div className={styles.leftSide}>
                    <div className={styles.rowBlock}>
                        <div className={styles.profile}>Your Profile</div>
                        <IconButton aria-label="edit">
                            <PhotoCameraIcon className={styles.cameraButton}/>
                        </IconButton> 
                    </div>
                    <div className={styles.imageBlock}>
                        <img src="/Icon/account-black.png" alt='Profile picture' className={styles.image}/>
                    </div>
                </div>
                <div className={styles.rightSide}>
                    <div className={styles.editBlock}>
                        <Button variant="contained" className={styles.editButton}>
                            Edit
                        </Button>
                    </div>
                    <div className={styles.content}>
                            <div className={styles.rowBlock1}>
                                <div className={styles.text}>
                                    Name
                                </div>
                                <div className={styles.fieldBlock}>
                                    <TextField id="name" variant="standard" className={styles.textField}/>
                                </div>      
                            </div>
                            <div className={styles.rowBlock1}>
                                <div className={styles.text}>
                                    Email
                                </div>
                                <div className={styles.fieldBlock}>
                                    <TextField id="name" variant="standard" className={styles.textField}/>
                                </div>  
                            </div>
                    </div>
                </div>
            </div>
            <div className={styles.botPart}>
                <Button variant="contained" className={styles.signoutButton}>
                    Sign out
                </Button>
            </div>
        </div>
    )
}