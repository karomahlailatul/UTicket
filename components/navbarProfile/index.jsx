import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import Logo from '../logo'
import Searchbar from '../searchbar'
import styles from './navbar.module.css'
import userPhoto from '../../assets/img/user-photo.png';
import { findIconDefinition } from '@fortawesome/fontawesome-svg-core';
import Image from 'next/image'

const envelope = findIconDefinition({prefix: 'far', iconName: 'envelope'})
const bell = findIconDefinition({prefix: 'far', iconName: 'bell'})

const NavbarProfile = () => {
  return (
    <div className={styles["nav-container"]}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <Searchbar />
      <div className={styles["btn-group"]}>
        <button
          type="button"
          className={styles["menu-btn"]}
          // onClick={"#"}
        >
          Find Ticket
        </button>

        <button
          type="button"
          className={styles["menu-btn"]}
        >
          My Booking  
        </button>
      </div>

      <div className={styles["profile-section"]}>
        <Link href="#">
          <a>
            <FontAwesomeIcon className={styles["fa-icon"]} icon={envelope} color="#595959" />
          </a>
        </Link>
        <Link href="#">
          <a>
            <FontAwesomeIcon className={styles["fa-icon"]} icon={bell} color="#595959" />
          </a>
        </Link>
        <Link href="/profile">
          <a className={styles["profile-nav"]}>
            <Image src={userPhoto} width={40} height={40} />
          </a>
        </Link>
      </div>
    </div>
  )
}

export default NavbarProfile