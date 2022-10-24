import { findIconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from './invoiceTicket.module.css'
import garudaIndonesia from '../../assets/img/garuda-indonesia.png'
import Image from 'next/image'

const backIcon = findIconDefinition({ prefix: 'fas', iconName: 'chevron-left' })
const ellipseVerticalIcon = findIconDefinition({ prefix: 'fas', iconName: 'ellipsis-vertical' })
const planeDepartureIcon = findIconDefinition({ prefix: 'fas', iconName: 'plane-departure' })

const InvoiceTicket = () => {
    return (
        <>
            <style>{`
            .invoice-body{
                display: flex;
            }

        `}
            </style>
            <div className={styles.main}>
                <div className="card" style={{ borderRadius: "15px" }}>
                    <div className={styles.menu}>
                        <button className={styles["btn-back"]} type="button">
                            <FontAwesomeIcon icon={backIcon} />
                            <h1 style={{ fontSize: "24px", margin: "0 0.5rem" }}>Back</h1>
                        </button>
                        <h1 style={{ fontWeight: "600", fontSize: "24px", color: "#000000" }}>Booking Pass</h1>
                        <button style={{ border: "none", background: "none" }} type="button">
                            <FontAwesomeIcon style={{ height: "23px" }} icon={ellipseVerticalIcon} color="#2395FF" />
                        </button>
                    </div>
                    <div className="card-body invoice-body">
                        <div className={styles["left-side"]}>
                            <div className={styles["airlines-img"]}>
                                <Image src={garudaIndonesia} />
                            </div>
                            <h1 className={styles["dest-city"]}>IDN</h1>
                            <FontAwesomeIcon className={styles["plane-icon"]} color="#979797" icon={planeDepartureIcon} />
                            <h1 className={styles["dest-city"]}>JPN</h1>
                        </div>
                        <div className={styles["right-side"]}>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InvoiceTicket