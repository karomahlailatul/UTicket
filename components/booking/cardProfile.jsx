import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react'
import UserLogo from "../../assets/img/booking/user.svg";
import styles from './cardPro.module.css';

function cardProfile() {
  return (
    <div className={styles.container}>
    <div className={styles.wrapper}>
      <div className={styles.ava}>
        <Image src={UserLogo} alt="photoprofile" />
      </div>
      <div className={styles.upload}>
        <label className={styles.btnLabel} htmlFor={"uploadAva"}>
          Select Photo
        </label>
        <div className={styles.userName}><b>Nhana</b></div>
        <div className={styles.userOrigin}>
          <span className='me-2 text-primary w-25'>
            <FontAwesomeIcon icon="fa-solid fa-location-dot" />
          </span>
          <span>
            Medan, Indonesia
          </span>
        </div>
        <div className={styles.cards}>
          <p><b>Cards</b></p>
          <p className={styles.btn2}><b>+ Add</b></p>
        </div>
        <div className={styles.cardBox}>
          <p className={styles.cardNumber}>4441 1235 5512 5551</p>
          <div className={styles.cardIdentity}>
            <p>X Card</p>
            <p>$ 1,440.2</p>
          </div>
        </div>
        <div className={styles.bottomsect} id={styles.profile}>
          <div className={styles.bottomsect}>
            {/* <Image src={UserLogo} className={styles.userLogo} alt="user" /> */}
            <FontAwesomeIcon icon="fa-solid fa-user" />
            <p>Profile</p>
          </div>
          <p><FontAwesomeIcon icon="fa-solid fa-chevron-right" /></p>
        </div>
        <div className={styles.bottomsect}>
          <div className={styles.bottomsect}>
            {/* <img src={Rating} className={styles.rating} alt="user" /> */}
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <p>My Review</p>
          </div>
          <p><FontAwesomeIcon icon="fa-solid fa-chevron-right" /></p>
        </div>

        <div className={styles.bottomsect}>
          <div className={styles.bottomsect}>
            {/* <img src={Setting} className={styles.setting} alt="user" /> */}
            <FontAwesomeIcon icon="fa-solid fa-gear" />
            <p>Setting</p>
          </div>
          <p><FontAwesomeIcon icon="fa-solid fa-chevron-right" /></p>
        </div>
        <div
          className={styles.bottomsect}
          id={styles.logout}
        >
          <div className={styles.bottomsect}>
            {/* <img src={LogOut} className={styles.logout} alt="user" /> */}
            <FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" />
            <p>Logout</p>
          </div>
          <p><FontAwesomeIcon icon="fa-solid fa-chevron-right" /></p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default cardProfile;