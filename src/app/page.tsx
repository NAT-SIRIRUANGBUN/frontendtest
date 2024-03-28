'use client'

import { useEffect, useState } from 'react'
import styles from './page.module.css'
import ImageList from '@/components/SlideShowImage/SlideShowImage'
import { Button } from '@mui/material'
import Footer from '@/components/Footer/Footer'

export default function Landing() {

  const [imageIndex , setImageIndex] = useState(0)
  
  setTimeout(() => {
      setImageIndex((imageIndex + 1) % ImageList.length)
  }, 4000);

  return (
      <div className={styles.Landing}>
        <section className={styles.LandingSec1}>
            <img className={styles.SlideShowImage} src={ImageList[imageIndex]} width={0} height={0} alt='SlideShowImage' sizes='100vh'/>
          <div className={styles.LandingCover}>
            <div className={styles.LandingCoverTextWrapper}>
              <h1>CEDT Online Job Fair 2022</h1>
              <h2>Look for your own opportunities.</h2>
              <Button className={styles.LandingCoverButton}>Get started</Button>
            </div>
          </div>
        </section>

        <section className={styles.LandingSec2}>

          <div className={styles.LandingSec2BlockRight + ' ' + styles.LandingSec2Block}>
            <h1 className={styles.LandingSec2TextContainer}>Explore Diverse Opportunities : Whether you're seeking your first job, transitioning to a new career path, or aiming for career advancement, 
            our job fair showcases a wide range of opportunities across computer industries</h1>
            <div className={styles.LandingSec2IconContainer}>
              <img src='/LandingIcon/1.png' alt="1" />
            </div>
          </div >

          <div className={styles.LandingSec2BlockLeft + ' ' + styles.LandingSec2Block}>
            <div className={styles.LandingSec2IconContainer}>
            <img src='/LandingIcon/2.png' alt="2" />
            </div>
            <h1 className={styles.LandingSec2TextContainer}>Engage with Employers : Connect directly with recruiters and hiring managers from top companies. This is your chance to ask questions, 
            learn about company culture, and showcase your skills and experience.</h1>
          </div>

          <div className={styles.LandingSec2BlockRight + ' ' + styles.LandingSec2Block}>
            <h1 className={styles.LandingSec2TextContainer}>Convenient and Flexible : No need to worry about commuting or scheduling conflicts. Our online platform gives you the flexibility to participate at your own pace, 
            anytime, anywhere.</h1>
              <div className={styles.LandingSec2IconContainer}>
              <img src='/LandingIcon/3.png' alt="3" />
              </div>
          </div>


          

        </section>
        <div className={styles.footer}>
          <Footer/>
        </div>

        
        
      </div>
  )
}
