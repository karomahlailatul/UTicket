// import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from './formProfile.module.css'
import Cookies from "js-cookie";
// import { toast } from "react-toastify";
import { useDispatch } from 'react-redux';
import { updateUserProfile } from '../../config/redux/actions/profileActions';

const FormProfile = ({ name, 
        email, username, country, city, phone, address, postal_code 
    }) => {

    const dispatch = useDispatch()
    const [token, setToken] = useState(null)
    const [form, setForm] = useState({
        email,
        username,
        country,
        city,
        phone,
        address,
        postal_code,
    })

    useEffect(() => {
        const tokenCookies = Cookies.get("token")
        setToken(tokenCookies)
    }, [token])

    const [active, setActive] = useState(false)
    const [disabled, setDisabled] = useState(true)
    const handleActive = (e) => {
        e.preventDefault()
        if (active === false) {
            setActive(true)
            setDisabled(false)
        } else {
            setActive(false)
            setDisabled(true)
        }
    }

    const handleCancel = () => {
        setActive(false)
        setDisabled(true)
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUserProfile(name, form, token))
        setActive(false)
        setDisabled(true)
    }
    console.log('form: ', form);
    return (
        <form
            onSubmit={handleSubmit}
            className={styles.sect2}
        >
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
                        defaultValue={email || ""}
                        className={styles["input-disabled"]}
                        placeholder="Input your email"
                        disabled
                        onChange={handleChange}
                    />
                    <label htmlFor="country" className={disabled ? styles["label-form"] : styles["not-disabled"]}>
                        Country
                    </label>
                    <input
                        type="text"
                        name="country"
                        id="country"
                        defaultValue={country || ""}
                        className={disabled ? styles["input-disabled"] : styles.input}
                        placeholder="Input your country"
                        disabled={disabled}
                        onChange={handleChange}
                    />
                    <label htmlFor="phone_number" className={disabled ? styles["label-form"] : styles["not-disabled"]}>
                        Phone Number
                    </label>
                    <input
                        id={styles["phone-number"]}
                        defaultValue={phone ||  ""}
                        type="number"
                        name="phone"
                        className={disabled ? styles["input-disabled"] : styles.input}
                        disabled={disabled}
                        placeholder="Input your phone number"
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.biodata}>
                    <p className={styles.biodataText}>Biodata</p>
                    <label htmlFor="username" className={disabled ? styles["label-form"] : styles["not-disabled"]}>
                        Username
                    </label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        defaultValue={username || ""}
                        className={disabled ? styles["input-disabled"] : styles.input}
                        disabled={disabled}
                        placeholder="Input your name"
                        onChange={handleChange}
                    />
                    <label htmlFor="city" className={disabled ? styles["label-form"] : styles["not-disabled"]}>
                        City
                    </label>
                    <input
                        type="text"
                        name="city"
                        id="city"
                        defaultValue={city || ""}
                        className={disabled ? styles["input-disabled"] : styles.input}
                        disabled={disabled}
                        placeholder="Input your city"
                        onChange={handleChange}
                    />
                    <label htmlFor="address" className={disabled ? styles["label-form"] : styles["not-disabled"]}>
                        Address
                    </label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        defaultValue={address || ""}
                        className={disabled ? styles["input-disabled"] : styles.input}
                        disabled={disabled}
                        placeholder="Input your address"
                        onChange={handleChange}
                    />
                    <label htmlFor="postcode" className={disabled ? styles["label-form"] : styles["not-disabled"]}>
                        Post Code
                    </label>
                    <input
                        type="number"
                        id="postcode"
                        defaultValue={postal_code || ""}
                        className={disabled ? styles["input-disabled"] : styles.input}
                        disabled={disabled}
                        name="postal_code"
                        placeholder="Input your zip code"
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className={styles.btnDiv}>
                {active ?
                    <>
                        <button className={styles["btn-cancel"]} onClick={handleCancel} type="submit">Cancel</button>
                        <button className={styles.btn} type="submit">Save</button>
                    </>
                    :
                    <button className={styles.btn} onClick={handleActive} type="button">Edit Profile</button>
                }
            </div>
        </form>
    )
}

export default FormProfile