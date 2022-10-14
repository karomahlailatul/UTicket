import React from 'react'
import styles from './banner.module.css'
import bannerImg from '../../assets/img/banner-img.svg'
import Image from 'next/image'

const BannerAuth = () => {
  return (
    <div className={styles.banner}>
    <Image src={bannerImg} alt='' />
  </div>
  )
}

export default BannerAuth