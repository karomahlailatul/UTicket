import React, { useState } from 'react'
import styles from '../auth.module.css'
// import Link from 'next/link'
import BannerAuth from '../../../components/bannerAuth'
import Logo from '../../../components/logo'
import Link from 'next/link'
import { useDispatch } from "react-redux";
import { register } from '../../../config/redux/actions/authActions';
import { useRouter } from 'next/router'

const Signup = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const [form, setForm] = useState({
        email: "",
        password: "",
        name: ""
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        dispatch(register(form, router, setLoading))
    }

    return (
        <div style={{ display: "flex" }}>
            <div className={styles.divider}>
                <BannerAuth />
            </div>

            <div className={styles.auth}>
                <Logo />

                <p className={styles.title}>Register</p>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <input
                        id="fullname"
                        name="name"
                        type="text"
                        className={styles.input}
                        style={{
                            marginBottom: "25px",
                        }}
                        placeholder="Fullname"
                        onChange={handleChange}
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
                        onChange={handleChange}
                    />
                    <input
                        id="password"
                        name="password"
                        type="password"
                        className={styles.input}
                        placeholder="Password"
                        onChange={handleChange}
                    />
                    {loading ? (
                        <button
                            title="Register"
                            type="submit"
                            className={styles["auth-btn"]}
                        >
                            <span
                                className="spinner-border spinner-border-sm"
                                role="status"
                                aria-hidden="true"
                            />
                        </button>
                    ) : (
                        <button
                            title="Register"
                            type="submit"
                            className={styles["auth-btn"]}
                        >
                            Sign Up
                        </button>
                    )
                    }
                    <div className={styles["accept-terms"]}>
                        <label>
                            <input className="input-check" type="checkbox" name="checkbox" />
                            <span className={styles["accept-label"]}>Accept terms and condition</span>
                        </label>
                    </div>
                    <hr
                        style={{ marginTop: "45px" }}
                        className={styles.seperator}
                    />
                    <div className={styles["have-account"]}>
                        <p className={styles["signin-title"]}>Already have an account?</p>
                        <Link href="/auth/login">
                            <a
                                title="Login"
                                type="submit"
                                className={styles["auth-btn"]}
                                style={{
                                    marginTop: "20px",
                                    backgroundColor: "#fff",
                                    color: "#2395FF",
                                    border: "1px solid #2395FF",
                                    textDecoration: "none"
                                }}
                            >
                                Sign In
                            </a>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup