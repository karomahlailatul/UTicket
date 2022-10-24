import React, { useEffect, useState } from 'react'
import styles from './profileCard.module.css';
import userIcon from "../../assets/img/user.svg";
import settingIcon from "../../assets/img/settings.svg";
import ratingIcon from "../../assets/img/review.svg";
import logOutIcon from "../../assets/img/logout.svg";
import Image from 'next/image';
import Link from 'next/link';
import Cookies from "js-cookie";
import { useDispatch, useSelector } from 'react-redux';
import { getCreditCard } from '../../config/redux/actions/creditCardActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { findIconDefinition } from '@fortawesome/fontawesome-svg-core';
import { updateProfileImage } from '../../config/redux/actions/profileActions';
import userPhoto from '../../assets/img/user-photo.png';
import ModalAdd from '../modalAdd';


const userFA = findIconDefinition({ prefix: 'fas', iconName: 'user' })

const ProfileCard = ({ picture, name, country, city, token, user_id }) => {
  // console.log('dataCC: ', dataCC);
  const dispatch = useDispatch();
  const [active, setActive] = useState(false)
  const { creditCard } = useSelector((state) => state.cc)
  // console.log('cc: ', creditCard);
  // const [token, setToken] = useState(null)
  // const [form, setForm] = useState([
  //   {
  //     cc_number: "",
  //     cc_exp: "",
  //   }
  // ])
  const [previewImage, setPreviewImage] = useState()
  const [image, setImage] = useState(picture)

  const handleLogout = () => {
    if (token !== undefined || token !== null) {
      Cookies.remove("token")
      Cookies.remove("user_id")
      // setToken(null)
    }
  }

  const handleImageUpload = (e) => {
    setActive(true)
    const file = e.target.files[0];
    setImage(file)
    setPreviewImage(URL.createObjectURL(e.target.files[0]));
    // console.log('file: ', file)
  };

  const handleCancel = () => {
    setActive(false)
    setPreviewImage()
  }

  useEffect(() => {
    // const cookiesToken = Cookies.get("token")
    // setToken(cookiesToken)
    dispatch(getCreditCard(token, user_id))
  }, [token, dispatch])

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfileImage(image, token))
    setActive(false)
  }



  return (
    <div className={styles.sect1}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles["photo-container"]}>
            {picture !== null ?
              <Image
                width={137}
                height={137}
                style={{borderRadius: "50%"}}
                src={
                  previewImage == undefined || previewImage == null ?
                    (picture == undefined || picture == null ?
                      userPhoto
                      : picture) : previewImage
                }
                alt="photo profile" />
              :
              <FontAwesomeIcon className={styles["fa-user"]} icon={userFA} />
            }
          </div>
          <div onSubmit={handleSubmit} className={styles.upload}>
            <form className={styles["form-upload"]}>
              {active === true ?
                <>
                  <div className="d-flex mt-3">
                    <button className={styles["btn-cancel"]} onClick={handleCancel} type="submit">Cancel</button>
                    <button className={styles.btn} type="submit">Save</button>
                  </div>
                </> :
                <>
                  <label className={styles["btn-label"]} htmlFor={"upload-photo"}>
                    Select Photo
                  </label>
                  <input
                    onChange={(e) => handleImageUpload(e)}
                    name="image"
                    type="file"
                    id="upload-photo"
                    className={styles["btn-upload"]}
                    accept=".jpeg, .jpg, .png"
                  />
                </>
              }
            </form>
            <div className={styles.username}>{name}</div>
            {city !== null && country !== null ? (
              <div className={styles["user-origin"]}>{city}, {country}</div>
            ) : ""
            }
            <div className={styles.cards}>
              <p>Cards</p>
              <ModalAdd token={token} user_id={user_id}>
                <p className={styles["btn-add"]}>+ Add</p>
              </ModalAdd>
            </div>
            {creditCard.map((res) => (
              <>
                <ul style={{ width: "100%", height: "100%" }} >
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
            <div className={styles.bottomsect} id={styles.profile}>
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
            <Link href="/home">
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
    </div>
  )
}

export default ProfileCard