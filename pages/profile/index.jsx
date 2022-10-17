import React from 'react'
import FormProfile from '../../components/formProfile'
import NavbarProfile from '../../components/navbarProfile'
import styles from './profile.module.css'

const Profile = () => {
  return (
    <div className={styles.container}>
      <NavbarProfile />
      <FormProfile/>
    </div>
  )
}

export default Profile