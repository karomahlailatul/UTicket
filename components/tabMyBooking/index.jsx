import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link'
import React from 'react'
import styles from './tabMyBooking.module.css';

const TabMyBooking = () => {
    return (
        <div className={styles.tab}>
            <div className="card" style={{ borderRadius: "15px", marginBottom: "1.5rem" }}>
                <div className={styles["card-body"]}>
                    <p className={styles.title}>My Booking</p>
                    <div className={styles.row1}>
                        <h1 className={styles["sub-title"]}>My Booking</h1>
                        <Link href={"#"}>
                            <a className={styles["order-history"]}>Order History</a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="card" style={{ borderRadius: "15px", marginBottom: "1.5rem" }}>
                <div className={styles["card-body-second"]}>
                    <p className={styles.date}>Monday, 20 July 2020 - 12:33</p>
                    <div className={styles.destination}>
                        <h1 className={styles["dest-city"]}>IDN</h1>
                        <FontAwesomeIcon className={styles["plane-icon"]} color="#979797" icon="fa-solid fa-plane-departure" />
                        <h1 className={styles["dest-city"]}>JPN</h1>
                    </div>
                    <p className={styles.airlines}>Garuda Indonesia, AB-221</p>
                </div>
                <hr style={{marginTop: "0"}}/>
                <div className={styles["bottom-card"]}>
                    <div className={styles.row1}>
                        <div className={styles["row-status"]}>
                            <p className={styles["status-title"]}>Status</p>
                            <div className={styles["waiting-status"]}>Waiting for payment</div>
                        </div>
                        <Link href="#">
                            <a className={styles["view-details"]}>View Details</a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="card" style={{ borderRadius: "15px", marginBottom: "1.5rem" }}>
                <div className={styles["card-body-second"]}>
                    <p className={styles.date}>Monday, 20 July 2020 - 12:33</p>
                    <div className={styles.destination}>
                        <h1 className={styles["dest-city"]}>IDN</h1>
                        <FontAwesomeIcon className={styles["plane-icon"]} color="#979797" icon="fa-solid fa-plane-departure" />
                        <h1 className={styles["dest-city"]}>JPN</h1>
                    </div>
                    <p className={styles.airlines}>Garuda Indonesia, AB-221</p>
                </div>
                <hr style={{marginTop: "0"}}/>
                <div className={styles["bottom-card"]}>
                    <div className={styles.row1}>
                        <div className={styles["row-status"]}>
                            <p className={styles["status-title"]}>Status</p>
                            <div className={styles["issue-status"]}>Payment Complete</div>
                        </div>
                        <Link href="#">
                            <a className={styles["view-details"]}>View Details</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TabMyBooking