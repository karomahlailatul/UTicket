import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import styles from './search.module.css';
import plane from '../../assets/img/search/logo-plant.svg'
import plant from '../../assets/img/booking/plant.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GarudaLogo from '../../assets/img/search/Logo-garuda.svg'
import AirAsia from '../../assets/img/search/Logo-AirAsia.svg'
import LeonAir from '../../assets/img/search/Logo-LeonAir.svg';
import filter from '../../assets/img/search/Logo-filter.svg'
import { findIconDefinition } from '@fortawesome/fontawesome-svg-core';
import { useDispatch, useSelector } from 'react-redux';
import { AirlineAction } from '../../config/redux/actions/airlineAction';
import { DestinationAction } from '../../config/redux/actions/destinationAction';

const arrow_switch = findIconDefinition({prefix: "fas", iconName: "arrow-right-arrow-left"})
const wifi = findIconDefinition({prefix: "fas", iconName: "wifi"})
const burger = findIconDefinition({prefix: "fas", iconName: "burger"})
const koper = findIconDefinition({prefix: "fas", iconName: "suitcase-rolling"})


function Search() {
  const dispatch = useDispatch();
  const datas = useSelector((state) => state.airlines);
  const [search, setSearch] = useState("")
  
  // console.log(datas.data)
  // console.log(search)
  
  useEffect(() =>{
    dispatch(AirlineAction({search: search}))
    // handleChange()
  }, [])

  return (
    <div>
        <div className={styles.flight}>
            <div>
                <div>
                <Image src={plane} alt="" />
                </div>

                <div className={styles.detail}>
                <div>
                    <span className='fs-6'>From</span>
                    <span  className='fs-6'>To</span>
                </div>

                <div className='fs-4'>
                    <input
                    name="origin"
                    type="text"
                    className={styles.origin}
                    onChange={(e) =>{
                      setSearch(e.target.value)
                      dispatch(AirlineAction({search: search}))
                    }}
                    />
                    <FontAwesomeIcon icon={arrow_switch} />
                    <input
                    type="text"
                    className={styles.dest}
                    // onChange={handleChange}
                    />
                </div>

                <div className='fs-6'>
                    <input
                    type="date"
                    name="departure"
                    placeholder="dd-mm-yyyy"
                    min="1997-01-01"
                    max="2030-12-31"
                    className={styles.date}
                    />
                    <span> • </span>
                    <select
                    name="ticket"
                    id="ticket"
                    className={styles.qty}
                    >
                    <option value="1">1 Passenger</option>
                    <option value="2">2 Passengers</option>
                    <option value="3">3 Passengers</option>
                    <option value="4">4 Passengers</option>
                    </select>
                    <span> • </span>
                    <select
                    name="class"
                    id="class"
                    className={styles.class}
                    >
                    <option value="Economy">Economy</option>
                    <option value="Business">Business</option>
                    <option value="First Class">First Class</option>
                    </select>
                </div>
                </div>
            </div>

            <button
                type="button"
                className={`${styles["change-search"]}`}
            >Change Search</button>
        </div>
        <div className={styles["search-result"]}>
          <div className={styles["filter-wrap"]}>
            <div className={styles.subtitle}>
              <p>Filter</p>
              <button
                type="button"
                className={styles["reset-filter"]}
              >Reset</button>
            </div>

            <div className={styles.filters}>
              <p>Transit</p>
              <div className={styles.options}>
                <div>
                  <label>Direct</label>
                  <input
                    className="checkbox"
                    id="transit"
                    type="checkbox"
                  />
                </div>
                <div>
                  <label>Transit</label>
                  <input
                    className="checkbox"
                    type="checkbox"
                  />
                </div>
                <div>
                  <label>Transit 2+</label>
                  <input
                    className="checkbox"
                    type="checkbox"
                  />
                </div>
              </div>

              <div className={styles.hl} />

              <p>Facilities</p>
              <div className={styles.options}>
                <div>
                  <label>Luggage</label>
                  <input
                    className="checkbox"
                    type="checkbox"
                  />
                </div>
                <div>
                  <label>In-Flight Meal</label>
                  <input
                    className="checkbox"
                    type="checkbox"
                  />
                </div>
                <div>
                  <label>Wi-Fi</label>
                  <input
                    className="checkbox"
                    type="checkbox"
                  />
                </div>
              </div>

              <div className={styles.hl} />

              <p>Departure Time</p>
              <div className={styles.options}>
                <div>
                  <label>00:00 - 06:00</label>
                  <input
                    className="checkbox"
                    type="checkbox"
                  />
                </div>
                <div>
                  <label>06:00 - 12:00</label>
                  <input
                    className="checkbox"
                    type="checkbox"
                  />
                </div>
                <div>
                  <label>12:00 - 18:00</label>
                  <input
                    className="checkbox"
                    type="checkbox"
                  />
                </div>
                <div>
                  <label>18:00 - 24:00</label>
                  <input
                    className="checkbox"
                    type="checkbox"
                  />
                </div>
              </div>

              <div className={styles.hl} />

              <p>Arrival Time</p>
              <div className={styles.options}>
                <div>
                  <label>00:00 - 06:00</label>
                  <input
                    className="checkbox"
                    type="checkbox"
                  />
                </div>
                <div>
                  <label>06:00 - 12:00</label>
                  <input
                    className="checkbox"
                    type="checkbox"
                  />
                </div>
                <div>
                  <label>12:00 - 18:00</label>
                  <input
                    className="checkbox"
                    type="checkbox"
                  />
                </div>
                <div>
                  <label>18:00 - 24:00</label>
                  <input
                    className="checkbox"
                    type="checkbox"
                  />
                </div>
              </div>

              <div className={styles.hl} />
              <p>Airline</p>
              <div className={styles.options}>
                <div>
                  <label>Garuda Indonesia</label>
                  <input
                    className="checkbox"
                    type="checkbox"
                  />
                </div>
                <div>
                  <label>America</label>
                  <input
                    className="checkbox"
                    type="checkbox"
                  />
                </div>
                <div>
                  <label>Batik Air</label>
                  <input
                    className="checkbox"
                    type="checkbox"
                  />
                </div>
              </div>

              <div className={styles.hl} />
              <p>Price Range</p>
              <div className={styles.options}>
                <div className={styles.pricing}>
                  <label>Min. price</label>
                  <input
                    value="$ 2.00"
                    type="number"
                    step="10000"
                    min="0"
                  />
                </div>
                <div className={styles.pricing}>
                  <label>Max. price</label>
                  {/* <input
                    // value='$ 2.00'
                    type="range"
                    step="10000"
                  /> */}
                  {/* <div>
                  <span id="rangeValue">0</span>
                  <input  type="range" name="0" min="0" max="1000"  
                  onClick={setValue((e) => {return e.target.value})} onmousemove={setValue((e) => e.target.value)}>0</input>
              </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className={styles["ticket-wrap"]}>
            <div className={styles.subtitle}>
              <p>
                Select Ticket<span></span>
              </p>
              <div style={{ display: "flex", alignItems: "center" }}>
                {/* <Dropdown
                  setSortBy={setSortBy}
                  setQuery={setQuery}
                  setParams={setParams}
                  params={params}
                /> */}
                <button className={styles.sort}>
                  <span className='mb-4 fs-5'>sort</span>
                  <div className='ms-2 mt-2'><Image src={filter}/></div>
                </button>
              </div>
            </div>

            <div>
              {datas &&
                datas?.data?.map((item, index) =>(
                <div className={styles.ticket} key={index}>
                    <div className={styles.airline}>
                        <div style={{ width: "100px" }}>
                        <Image width={100} height={50} src={item.airlines_logo} alt="" />
                        </div>
                        <span>{item.airlines_name}</span>
                    </div>

                    <div className={styles["flight-info"]}>
                        <div className={styles.schedule}>
                        <div>
                            <p>IND</p>
                            <span>9.00</span>
                        </div>

                        <div>
                            <Image src={plant}/>
                        </div>

                        <div>
                            <p>JPN</p>
                            <span>2.00</span>
                        </div>
                        </div>

                        <div className={styles.duration}>
                        <p>3 hours 11 minutes</p>
                        <span>direct</span>
                        </div>

                        <div className={styles.facilities}>
                          <div>
                              <FontAwesomeIcon icon={koper} />
                          </div>
                          <div>
                              <FontAwesomeIcon icon={burger}/>
                          </div>
                          <div>
                              <FontAwesomeIcon icon={wifi} />
                          </div>
                        </div>

                        <div className={styles.pricetag}>
                        <p>{`Rp 2.000.000`}</p>
                        <span>/pax</span>
                        </div>
                        <button className={styles.select}>
                            Select
                        </button>
                    </div>
                </div>

                ))

              }
                {/* <div className={styles.ticket}>
                    <div className={styles.airline}>
                        <div style={{ width: "100px" }}>
                        <Image style={{ width: "100%" }} src={AirAsia} alt="" />
                        </div>
                        <span>Airasia</span>
                    </div>

                    <div className={styles["flight-info"]}>
                        <div className={styles.schedule}>
                        <div>
                            <p>IND</p>
                            <span>9.00</span>
                        </div>

                        <div>
                            <Image src={plant}/>
                        </div>

                        <div>
                            <p>JPN</p>
                            <span>2.00</span>
                        </div>
                        </div>

                        <div className={styles.duration}>
                        <p>3 hours 11 minutes</p>
                        <span>direct</span>
                        </div>

                        <div className={styles.facilities}>
                          <div>
                              <FontAwesomeIcon icon={koper} />
                          </div>
                          <div>
                              <FontAwesomeIcon icon={burger}/>
                          </div>
                          <div>
                              <FontAwesomeIcon icon={wifi} />
                          </div>
                        </div>

                        <div className={styles.pricetag}>
                        <p>{`Rp 2.000.000`}</p>
                        <span>/pax</span>
                        </div>
                        <button className={styles.select}>
                            Select
                        </button>
                    </div>
                </div>
                <div className={styles.ticket}>
                    <div className={styles.airline}>
                        <div style={{ width: "100px" }}>
                        <Image style={{ width: "100%" }} src={LeonAir} alt="" />
                        </div>
                        <span>Leonair</span>
                    </div>

                    <div className={styles["flight-info"]}>
                        <div className={styles.schedule}>
                        <div>
                            <p>IND</p>
                            <span>9.00</span>
                        </div>

                        <div>
                            <Image src={plant}/>
                        </div>

                        <div>
                            <p>JPN</p>
                            <span>2.00</span>
                        </div>
                        </div>

                        <div className={styles.duration}>
                        <p>3 hours 11 minutes</p>
                        <span>direct</span>
                        </div>

                        <div className={styles.facilities}>
                          <div>
                              <FontAwesomeIcon icon={koper} />
                          </div>
                          <div>
                              <FontAwesomeIcon icon={burger}/>
                          </div>
                          <div>
                              <FontAwesomeIcon icon={wifi} />
                          </div>
                        </div>

                        <div className={styles.pricetag}>
                        <p>{`Rp 2.000.000`}</p>
                        <span>/pax</span>
                        </div>
                        <button className={styles.select}>
                            Select
                        </button>
                    </div>
                </div> */}
            </div>
            <div>
              {/* <nav className="mt-4">
                <ul className="pagination">
                  <li
                    className={`page-item`}
                  >
                    <button
                      className="page-link"
                      type="button"
                    >
                      Previous
                    </button>
                  </li>
                  <li
                    className={`page-item `}
                  >
                    <button
                      className="page-link"
                      type="button"
                    >
                      Next
                    </button>
                  </li>
                </ul>
              </nav> */}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Search;