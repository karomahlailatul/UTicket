import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Logo from '../logo'
import Searchbar from '../searchbar'
import styles from './navbar.module.css'
import userPhoto from '../../assets/img/user-photo.png';
import { findIconDefinition } from '@fortawesome/fontawesome-svg-core';
import Image from 'next/image'
import Cookies from "js-cookie";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const envelope = findIconDefinition({ prefix: 'far', iconName: 'envelope' })
const bell = findIconDefinition({ prefix: 'far', iconName: 'bell' })
const alignRight = findIconDefinition({ prefix: 'fas', iconName: 'align-right' })

const NavbarProfile = ({ setFocus }) => {
  console.log("setFocus: ", setFocus);
  const [token, setToken] = useState(null)

  useEffect(() => {
    const tokenCookies = Cookies.get("token")
    console.log("token: ", tokenCookies);
    if (token !== undefined) {
      setToken(tokenCookies)
    }
  }, [token])

  return (
    <Navbar expand="lg" className="p-0">
      <div className={styles["nav-container"]}>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <div className={styles["nav-seperator"]}>
          <Navbar.Toggle className={styles["btn-collapse"]} aria-controls="basic-navbar-nav">
            <FontAwesomeIcon className={styles["fa-icon"]} icon={alignRight} />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" id={styles["item-menu"]}>
              <Searchbar />
              <div className={styles["btn-group"]}>
                <button  
                  type="button"
                  className={styles["menu-btn"]}
                  onClick={() => setFocus("find-ticket")}
                >
                  Find Ticket
                </button>

                <button
                  type="button"
                  className={styles["menu-btn"]}
                  onClick={() => setFocus("my-booking")}
                >
                  My Booking
                </button>
              </div>
              <div>
                {token == null || token == undefined ?
                  (
                    <div>
                      <Link href="/auth/signup">
                        <a>
                          <button type="button" className={styles["signup-btn"]}>Sign Up</button>
                        </a>
                      </Link>
                    </div>
                  )
                  :
                  (
                    <div className={styles["profile-section"]}>
                      <Link href="#">
                        <a>
                          <FontAwesomeIcon className={styles["fa-icon"]} icon={envelope} color="#595959" />
                        </a>
                      </Link>
                      <Link href="#">
                        <a>
                          <FontAwesomeIcon className={styles["fa-icon"]} icon={bell} color="#595959" />
                        </a>
                      </Link>
                      <Link href="/profile">
                        <a className={styles["profile-nav"]}>
                          <Image src={userPhoto} width={40} height={40} />
                        </a>
                      </Link>
                    </div>
                  )
                }
              </div>
            </Nav>
          </Navbar.Collapse>
        </div>
      </div>
    </Navbar>
  )
}

export default NavbarProfile