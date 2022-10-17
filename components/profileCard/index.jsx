import React from 'react'
import styles from './profileCard.module.css';
import userPhoto from '../../assets/img/user-photo.png';
import userIcon from "../../assets/img/user.svg";
import settingIcon from "../../assets/img/settings.svg";
import ratingIcon from "../../assets/img/review.svg";
import logOutIcon from "../../assets/img/logout.svg";
import Image from 'next/image';
import Link from 'next/link';
import Cookies from "js-cookie";

const ProfileCard = () => {
  const token = Cookies.get("token")

  const handleLogout = () => {
    if (token !== undefined || token !== null) {
      Cookies.remove("token")
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles["photo-container"]}>
          <Image width={137} height={137} src={userPhoto} alt="photo profile" />
        </div>
        <div className={styles.upload}>
          <label className={styles["btn-label"]} htmlFor={"upload-photo"}>
            Select Photo
          </label>
          <input
            // onChange={onChange}
            // name={names}
            type="file"
            id="upload-photo"
            className={styles["btn-upload"]}
            accept=".jpeg, .jpg, .png"
          />
          <div className={styles.username}>Mike Kowalski</div>
          <div className={styles["user-origin"]}>Medan, Indonesia</div>
          <div className={styles.cards}>
            <p>Cards</p>
            <p className={styles["btn-add"]}>+ Add</p>
          </div>
          <div className={styles.cardBox}>
            <p className={styles.cardNumber}>7569511535</p>
            <div className={styles.cardIdentity}>
              <p>BCA</p>
              <p>$ 250,00</p>
            </div>
          </div>
          <div className={styles.bottomsect} id={styles.profile}>
            <div className={styles.bottomsect}>
              <Image src={userIcon} className={styles.userLogo} alt="user" />
              <p>Profile</p>
            </div>
          </div>
          <div className={styles.bottomsect}>
            <div className={styles.bottomsect}>
              <Image src={ratingIcon} className={styles.rating} alt="user" />
              <p>My Review</p>
            </div>
          </div>

          <div className={styles.bottomsect}>
            <div className={styles.bottomsect}>
              <Image src={settingIcon} className={styles.setting} alt="user" />
              <p>Setting</p>
            </div>
          </div>
          <div
            className={styles.bottomsect}
            id={styles.logout}
          >
            <Link href="/">
              <a id={styles["logout-link"]} onClick={handleLogout}>
                <div className={styles.bottomsect}>
                  <Image src={logOutIcon} className={styles.logout} alt="user" />
                  <p>Logout</p>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard