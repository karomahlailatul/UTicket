import React from 'react'
import styles from './style.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { findIconDefinition } from '@fortawesome/fontawesome-svg-core'
const arrow_right_arrow_left = findIconDefinition({ prefix: 'fas', iconName: "arrow-right-arrow-left"})
const plane_departure = findIconDefinition({ prefix: "fas", iconName: "plane-departure"})
const arrow_rotate_right = findIconDefinition({prefix: 'fas', iconName: "arrow-rotate-right"})
const right_to_bracket = findIconDefinition({prefix: 'fas', iconName: 'right-to-bracket'})

function searchPopUp() {
  return (
    <div className={`${styles.container} container`}>
          <div className={`px-5 py-4`}>
            <div className={`d-flex row `}>
              <p><b>Hey,</b></p>
              <p><b>Where you want to go?</b></p>
            </div>

            <div className={styles.content_to}>
              <div>
                <span>From</span>
                <span>To</span>
              </div>

              <div>
                <input
                  name="origin"
                  type="text"
                  className={styles.origin}
                  required
                />
                <span className='text-primary'>
                  <FontAwesomeIcon icon={arrow_right_arrow_left} />
                </span>
                <input
                  type="text"
                  className={styles.dest}
                  required
                />
              </div>
            </div>

            <div className={`${styles.content_trip} d-flex justify-content-between my-3`}>
              <button name="trip" >
                <div>
                  <FontAwesomeIcon icon={plane_departure} />
                  <span>One way</span>
                </div>
              </button>

              <button name="trip" >
                <div>
                  <span className={`${styles.icon_repeat}`}><FontAwesomeIcon icon={arrow_rotate_right} /></span>
                  <span className={`${styles.icon_repeat}`}>Round trip</span>
                </div>
              </button>
            </div>

            <div>
              <p>Departure</p>
              <input
                type="date"
                name="departure"
                placeholder="Monday, 20 July 2020"
                className={styles.date}
              />
              <p className='my-3'>How many person?</p>
              <div>
                <select
                  name="child"
                  id="child"
                  className={styles.ticket}
                >
                    <option value="1">1 Child</option>
                    <option value="2">2 Child</option>
                    <option value="3">3 Child</option>
                    <option value="4">4 Child</option>
                </select>

                <select
                  name="adult"
                  id="adult"
                  className={styles.ticket}
                >
                  <option value="1">1 Adult</option>
                  <option value="2">2 Adult</option>
                  <option value="3">3 Adult</option>
                  <option value="4">4 Adult</option>
                </select>
              </div>
            </div>

            <div className={`my-3`}>
              <p>Which class do you want?</p>
              <div className='d-flex gap-4'>
                <div >
                  <input
                    id="economy"
                    value="economy"
                    type="radio"
                    name="class"
                  />
                  <label htmlFor="economy" className='ps-2'>Economy</label>
                </div>

                <div>
                  <input
                    id="business"
                    value="business"
                    type="radio"
                    name="class"
                  />
                  <label htmlFor="business" className='ps-2'>Business</label>
                </div>

                <div>
                  <input
                    id="firstClass"
                    value="firstClass"
                    type="radio"
                    name="class"
                  />
                  <label htmlFor="firstClass"  className='ps-2'>First Class</label>
                </div>
              </div>
            </div>

            <button
              className={`${styles.submit_btn} d-flex justify-content-between align-items-center`}
            >
              <div className="text-end ms-2">
                <span>SEARCH FLIGHT</span>
              </div>
                <FontAwesomeIcon icon={right_to_bracket} />
            </button>
          </div>
      </div>
  )
}

export default searchPopUp;