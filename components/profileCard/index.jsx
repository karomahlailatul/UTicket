import React, { useEffect, useState } from 'react'
import styles from './profileCard.module.css';
// import userPhoto from '../../assets/img/user-photo.png';
import userIcon from "../../assets/img/user.svg";
import settingIcon from "../../assets/img/settings.svg";
import ratingIcon from "../../assets/img/review.svg";
import logOutIcon from "../../assets/img/logout.svg";
import Image from 'next/image';
import Link from 'next/link';
import Cookies from "js-cookie";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProfileCard = ({ picture, name, dataCC, setFocus }) => {
  console.log('dataCC: ', dataCC);
  const cookiesToken = Cookies.get("token")
  const [token, setToken] = useState(null)
  const [form, setForm] = useState({
    picture,
    name,
    cc_number: "",
    cc_exp: ""
  })

  const mappingDataCC = () => {
    dataCC.map(res => {
      setForm({...form, cc_number: res.cc_number, cc_exp: res.cc_number})
    })
  }

  const handleLogout = () => {
    if (token !== undefined || token !== null) {
      Cookies.remove("token")
      Cookies.remove("user_id")
    }
  }

  // const handleChange = (e) => {
  //   setForm({
  //     ...form,
  //     [e.target.name] : e.target.value
  //   })
  // }

  useEffect(() => {
    setToken(cookiesToken)
    mappingDataCC()
  }, [token])
  console.log('form-cc: ', form);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles["photo-container"]}>
          {picture === null ?
            <FontAwesomeIcon className={styles["fa-user"]} icon="fa-solid fa-user" />
            :
            <Image width={137} height={137} src={picture} alt="photo profile" />
          }
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
          <div className={styles.username}>{form.name}</div>
          <div className={styles["user-origin"]}>Medan, Indonesia</div>
          <div className={styles.cards}>
            <p>Cards</p>
            <p className={styles["btn-add"]}>+ Add</p>
          </div>
          {dataCC.map((res) => (
            <>
            <ul style={{width: "100%", height: "100%"}} >
              <div className={styles.cardBox}>
                <div className={styles.cardIdentity}>
                  <p>{res.cc_number}</p>
                  <p>{res.cc_exp}</p>
                </div>
              </div>
            </ul>
            </>
          )
          )}
          <div onClick={() => setFocus("profile")} className={styles.bottomsect} id={styles.profile}>
              <Image src={userIcon} className={styles.userLogo} alt="user" />
              <p>Profile</p>
          </div>
          <div className={styles.bottomsect}>
              <Image src={ratingIcon} className={styles.rating} alt="user" />
              <p>My Review</p>
          </div>
          <div className={styles.bottomsect}>
              <Image src={settingIcon} className={styles.setting} alt="user" />
              <p>Setting</p>
          </div>
            <Link href="/">
              <a id={styles["logout-link"]} onClick={handleLogout}>
                <div className={styles.bottomsect}>
                  <Image src={logOutIcon} className={styles.logout} alt="user" />
                  <p>Logout</p>
                </div>
              </a>
            </Link>
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}

export default ProfileCard