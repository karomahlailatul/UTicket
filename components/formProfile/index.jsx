import React from 'react'
import ProfileCard from '../profileCard'
import styles from './formProfile.module.css'

const FormProfile = () => {
    return (
        <form className={styles.form}>
            <div className={styles.wrapper}>
                <div className={styles.sect1}>
                <ProfileCard />
                </div>
                <div className={styles.sect2}>
                    <p className={styles.text}>PROFILE</p>
                    <p className={styles.text2}>Profile</p>
                    <div className={styles.formSheet}>
                        <div className={styles.contact}>
                            <p className={styles.contactText}>Contact</p>
                            <label htmlFor="email" className={styles["label-form"]}>
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className={styles.input}
                                placeholder="Input your email"
                                disabled
                            />
                            <label htmlFor="city" className={styles["label-form"]}>
                                Country
                            </label>
                            <input
                                type="text"
                                name="city"
                                id="city"
                                className={styles.input}
                                placeholder="Input your city"
                            />
                            <label htmlFor="phone_number" className={styles["label-form"]}>
                                Phone Number
                            </label>
                            <input
                                id={styles["phone-number"]}
                                type="number"
                                name="phone_number"
                                className={styles.input}
                                placeholder="Input your phone number"
                            />
                        </div>
                        <div className={styles.biodata}>
                            <p className={styles.biodataText}>Biodata</p>
                            <label htmlFor="username" className={styles["label-form"]}>
                                Username
                            </label>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                
                                className={styles.input}
                                placeholder="Input your name"
                            />
                            <label htmlFor="city" className={styles["label-form"]}>
                                City
                            </label>
                            <input
                                type="text"
                                name="city"
                                id="city"
                                className={styles.input}
                                placeholder="Input your city"
                            />
                            <label htmlFor="address" className={styles["label-form"]}>
                                Address
                            </label>
                            <input
                                type="text"
                                id="address"
                                className={styles.input}
                                placeholder="Input your address"
                            />
                            <label htmlFor="postcode" className={styles["label-form"]}>
                                Post Code
                            </label>
                            <input
                                type="number"
                                id="postcode"
                                className={styles.input}
                                name="post_code"
                                placeholder="Input your zip code"
                            />
                        </div>
                    </div>
                    <div className={styles.btnDiv}>
                        <button className={styles.btn} type="submit">Save</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default FormProfile