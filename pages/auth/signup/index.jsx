import React from 'react'
import styles from '../auth.module.css'
// import Link from 'next/link'
import BannerAuth from '../../../components/bannerAuth'
import Logo from '../../../components/logo'

const Signup = () => {
    return (
        <div style={{ height: "100vh", display: "flex" }}>
            <div className={styles.divider}>
                <BannerAuth />
            </div>

            <div className={styles.auth}>
                <Logo />

                <p className={styles.title}>Register</p>

                <form className={styles.form}>
                    <input
                        id="fullname"
                        name="fullname"
                        type="text"
                        className={styles.input}
                        style={{
                            marginBottom: "25px",
                        }}
                        placeholder="Fullname"
                    />
                    <input
                        id="email"
                        name="email"
                        type="email"
                        className={styles.input}
                        style={{
                            marginBottom: "25px",
                        }}
                        placeholder="Email"
                    />
                    <input
                        id="password"
                        name="password"
                        type="password"
                        className={styles.input}
                        placeholder="Password"
                    />

                    <button
                        title="Login"
                        type="submit"
                        className={styles["auth-btn"]}
                    >
                        Sign Up
                    </button>
                    <div className="accept-terms">
                        <label>
                            <input className="input-check" type="checkbox" name="checkbox" />
                            <span className={styles["accept-label"]}>Accept terms and condition</span>
                        </label>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup