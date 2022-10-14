import React from 'react'
import styles from '../auth.module.css'
import Link from 'next/link'
import BannerAuth from '../../../components/bannerAuth'
import Logo from '../../../components/logo'
import googleLogo from '../../../assets/img/google.svg'
import facebookLogo from '../../../assets/img/facebook.svg'
import Image from 'next/image'

const Login = () => {
    return (
        <div style={{ height: "100vh", display: "flex" }}>
            <div className={styles.divider}>
                <BannerAuth />
            </div>
            <div className={styles.auth}>
                <Logo />
                <p className={styles.title}>Login</p>
                <form className={styles.form}>
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
                    Sign In
                    </button>
                    <small className={styles.small}>
                        Did you forgot your password?{" "}
                        <Link href="/forgotpassword" className={styles.links}>
                            <a>Tap here to reset</a>
                        </Link>
                    </small>
                </form>
                <hr className={styles.seperator}/>
                <p className={styles["sso-title"]}>or signin with</p>
                <div className={styles["sso-account"]}>
                    <button type="submit" className={styles["sso-btn"]}>
                        <Image src={googleLogo}/>
                    </button>
                    <button type="submit" className={styles["sso-btn"]}>
                        <Image src={facebookLogo}/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login