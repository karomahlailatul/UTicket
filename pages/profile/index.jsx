import React from 'react'
import NavbarProfile from '../../components/navbarProfile'
import ProfileCard from '../../components/profileCard'
import styles from './profile.module.css'

const Profile = () => {
  return (
    <div className={styles.container}>
      <NavbarProfile />
      <form className={styles.form}>
        <div className={styles.wrapper}>
          <div className={styles.sect1}>
            <ProfileCard />
          </div>
        </div>
      </form>
    </div>
  )
}

export default Profile