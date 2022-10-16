import Image from 'next/image'
import React from 'react'
import styles from './logo.module.css'
import logoImg from '../../assets/logo/logo_colour.svg'

const Logo = () => {
  return (
    <div className={styles.logo}>
        <Image src={logoImg} alt="logo icon"/>
    </div>
  )
}

export default Logo