// import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from './formProfile.module.css'

const FormProfile = ({ email, username, country, city, phone, address, postal_code }) => {
    const [form, setForm] = useState({})

    useEffect(() => {
        setForm({
            ...form,
            email,
            username,
            country,
            city,
            phone,
            address,
            postal_code
        })
    }, [])

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
        setForm({
            ...form,
            email,
            username,
            country,
            city,
            phone,
            address,
            postal_code
        })
        setActive(false)
        setDisabled(true)
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const form = new FormData();
        
    //     form.append("username", username)
    //     form.append("username", country)
    //     form.append("username", city)
    //     form.append("username", phone)
    //     form.append("username", address)
    //     form.append("username", postal_code)

    //     axios.put(process.env.API_BACKEND + "")
    // }
    console.log('form: ', form);
    return (
        <form className={styles.sect2}>
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
                        value={form.email !== null ? form.email : ""}
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
                        value={form.country !== null ? form.country : ""}
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
                        value={form.phone !== null ? form.phone : ""}
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
                        value={form.username !== null ? form.username : ""}
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
                        value={form.city !== null ? form.city : ""}
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
                        value={form.postal_code !== null ? form.postal_code : ""}
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