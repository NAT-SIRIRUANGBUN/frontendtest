import Image from 'next/image'
import styles from './page.module.css'
import RegisterForm from '@/components/RegisterForm/RegisterForm'
import LoginForm from '@/components/LoginForm/LoginForm'

export default function Home() {
  return (
      <div>
        <RegisterForm/>
        <LoginForm/>
      </div>
  )
}
