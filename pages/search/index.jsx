import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./search.module.css";
import plane from "../../assets/img/search/logo-plant.svg";
import plant from "../../assets/img/booking/plant.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
// import GarudaLogo from '../../assets/img/search/Logo-garuda.svg'
// import AirAsia from '../../assets/img/search/Logo-AirAsia.svg'
// import LeonAir from '../../assets/img/search/Logo-LeonAir.svg';
import filter from "../../assets/img/search/Logo-filter.svg";
import { findIconDefinition } from "@fortawesome/fontawesome-svg-core";
// import { useDispatch, useSelector } from 'react-redux';
// import { AirlineAction } from '../../config/redux/actions/airlineAction';
// import { DestinationAction } from '../../config/redux/actions/destinationAction';
import axios from "axios";
import moment from "moment/moment";

const arrow_switch = findIconDefinition({
  prefix: "fas",
  iconName: "arrow-right-arrow-left",
});
const wifi = findIconDefinition({ prefix: "fas", iconName: "wifi" });
const burger = findIconDefinition({ prefix: "fas", iconName: "burger" });
const koper = findIconDefinition({
  prefix: "fas",
  iconName: "suitcase-rolling",
});

function Search() {
  // const dispatch = useDispatch();
  // const datas = useSelector((state) => state.airlines);
  const [airlines, setAirlines] = useState('')
  const [dataFrom, setDataFrom] = useState([]);
  const [dataTo, setDataTo] = useState([]);
  const [dataAirlines, setDataAirlines] = useState([])
  // const [dataCityTo, setDataCityTo] = useState([])
  const [sort, setSort] = useState('desc')
  const [dataTiket, setDataTiket] = useState([]);
  const [idFrom, setIdFrom] = useState("");
  const [idTo, setIdTo] = useState("");
  console.log(dataTiket);
  // console.log(idFrom)
  // console.log(idTo)
  console.log(dataAirlines)
  // console.log(dataCity[0].id)
  // console.log(dataCityTo[0].id)
  // data.map(iterm =>{
  //   console.log(iterm.city)
  // })
  // dataTiket.map(item =>{
  //   console.log(item)
  // })
  const fetchAirPort = async() =>{
    const result = await axios.get(`${process.env.API_BACKEND}airlines?&sortby=name&sort=asc`)

    setDataAirlines(result.data.data)
  }
  // const handleAirlines = (e) =>{
  //   if(e.target.checked === true){
  //     console.log('true')
  //   }else{
  //     console.log(false)
  //   }
  // }
  const fetch = async (e = '') => {
    const url = await axios.get(
      `${process.env.API_BACKEND}flight?category?sortby=airlines_name&sort=${sort}&search_option_1=${idFrom}&searchby_option_1=airport_depature&search_option_2=${idTo}&searchby_option_2=airport_arrive&search_option_3=${e}&searchby_option_3=airlines_id
      `
    );
    // console.log(url.data.data)
    const result = url.data.data;
    setDataTiket(result);
  };
  const fetchCountryFrom = async (e) => {
    const url = await axios.get(
      `${process.env.API_BACKEND}airport?search=${e}&searchby=country&sortby=city&sort=asc&limit=1000`
    );
    // console.log(url.data.data)
    const result = url.data.data;
    console.log(result);

    setDataFrom(result);
    // setDataCity(result)
  };
  const fetchCountryTo = async (e) => {
    const url = await axios.get(
      `${process.env.API_BACKEND}airport?search=${e}&searchby=country&sortby=city&sort=asc&limit=1000`
    );
    // console.log(url.data.data)
    const result = url.data.data;
    console.log(result);
    setDataTo(result);
    // setDataCityTo(result)
  };

  const handleSearch = () => {
    fetch();
  };
  useEffect(() => {
    handleSearch();
    fetchAirPort();
  }, []);

  return (
    <div className={`${styles.container}`}>
      <div className={styles.flight}>
        <div>
          <div>
            <Image src={plane} alt="" />
          </div>

          <div className={styles.detail}>
            <div className="row w-100 ">
              <div className="col">
                <span className="fs-6">From</span>
              </div>
              <div className="col text-end">
                <span className="fs-6">To</span>
              </div>
            </div>

            <div className="fs-5 w-100 ">
              <div className="column w-100">
                <div>
                  <input
                    // name="origin"
                    type="text"
                    className={`${styles.origin} `}
                    // value={title.city}
                    placeholder="country"
                    onChange={(e) => {
                      fetchCountryFrom(e.target.value);
                    }}
                  />
                </div>
                <div className="d-grid">
                  <select
                    className={` w-100`}
                    placeholder="city"
                    onChange={(e) => {
                      // setTitle({...title, city: e.target.value})
                      setIdFrom(e.target.value);
                      fetch();
                    }}
                  >
                    {dataFrom?.map((item, index) => (
                      <option value={item.id} key={index}>
                        {item.city}
                        {` (${item.name})`}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <FontAwesomeIcon icon={arrow_switch} />
              <div className="column ms-3">
                <div>
                  <input
                    type="text"
                    className={`${styles.origin} `}
                    placeholder="country"
                    onChange={(e) => {
                      fetchCountryTo(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <select
                    className={`styles.qty w-100`}
                    onChange={(e) => {
                      setIdTo(e.target.value);
                      fetch();
                    }}
                  >
                    {dataTo?.map((item, index) => (
                      <option value={item.id} key={index}>
                        {item.city} {` (${item.name})`}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="fs-6">
              <input
                type="date"
                name="departure"
                placeholder="dd-mm-yyyy"
                min="1997-01-01"
                max="2030-12-31"
                className={styles.date}
              />
              <span> • </span>
              <select name="ticket" id="ticket" className={styles.qty}>
                <option value="1">1 Passenger</option>
                <option value="2">2 Passengers</option>
                <option value="3">3 Passengers</option>
                <option value="4">4 Passengers</option>
              </select>
              <span> • </span>
              <select name="class" id="class" className={styles.class}>
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
          onClick={handleSearch}
        >
          Change Search
        </button>
      </div>
      <div className={`${styles["search-result"]} row`}>
        <div className={`${styles["filter-wrap"]} col-5 mb-3`}>
          <div className={styles.subtitle}>
            <p>Filter</p>
            <button type="button" className={styles["reset-filter"]}>
              Reset
            </button>
          </div>

          <div className={styles.filters}>
            <p>Transit</p>
            <div className={styles.options}>
              <div>
                <label>Direct</label>
                <input className="checkbox" id="transit" type="checkbox" />
              </div>
              <div>
                <label>Transit</label>
                <input className="checkbox" type="checkbox" />
              </div>
              <div>
                <label>Transit 2+</label>
                <input className="checkbox" type="checkbox" />
              </div>
            </div>

            <div className={styles.hl} />

            <p>Facilities</p>
            <div className={styles.options}>
              <div>
                <label>Luggage</label>
                <input className="checkbox" type="checkbox" />
              </div>
              <div>
                <label>In-Flight Meal</label>
                <input className="checkbox" type="checkbox" />
              </div>
              <div>
                <label>Wi-Fi</label>
                <input className="checkbox" type="checkbox" />
              </div>
            </div>

            <div className={styles.hl} />

            <p>Departure Time</p>
            <div className={styles.options}>
              <div>
                <label>00:00 - 06:00</label>
                <input className="checkbox" type="checkbox" />
              </div>
              <div>
                <label>06:00 - 12:00</label>
                <input className="checkbox" type="checkbox" />
              </div>
              <div>
                <label>12:00 - 18:00</label>
                <input className="checkbox" type="checkbox" />
              </div>
              <div>
                <label>18:00 - 24:00</label>
                <input className="checkbox" type="checkbox" />
              </div>
            </div>

            <div className={styles.hl} />

            <p>Arrival Time</p>
            <div className={styles.options}>
              <div>
                <label>00:00 - 06:00</label>
                <input className="checkbox" type="checkbox" />
              </div>
              <div>
                <label>06:00 - 12:00</label>
                <input className="checkbox" type="checkbox" />
              </div>
              <div>
                <label>12:00 - 18:00</label>
                <input className="checkbox" type="checkbox" />
              </div>
              <div>
                <label>18:00 - 24:00</label>
                <input className="checkbox" type="checkbox" />
              </div>
            </div>

            <div className={styles.hl} />
            <p>Airline</p>
            <div className={styles.options}>
              {/* {dataAirlines.map((item, index) =>(
                <div>
                <label>{item.name}</label>
                <input className="checkbox" type="checkbox" 
                value={item.id}
                onChange={
                  (e) =>{
                      fetch(e.target.value)
                  }
              }
                />
              </div>
              ))} */}
              <div>
                <label>Garuda Indonesia</label>
                <input className="checkbox" type="checkbox" 
                value='2a63b603-f1c3-4003-a64b-9864d3d3e041'
                onChange={
                  (e) =>{
                    fetch(e.target.value)
                    if(!e.target.checked){
                      fetch()
                    }
                  }
              }
                />
              </div>
              <div>
                <label>Citilink Indonesia</label>
                <input className="checkbox" type="checkbox" 
                value='0a5515d8-b9d8-4ba9-a4f0-5849cf7f1432'
                onChange={
                  (e) =>{
                    fetch(e.target.value)
                    if(!e.target.checked){
                      fetch()
                    }
                  }
              }
                />
              </div>
              <div>
                <label>Air Asia</label>
                <input className="checkbox" type="checkbox" 
                value='534007be-b1c4-4a6b-ac0c-ade69a3e8054'
                onChange={
                  (e) =>{
                    fetch(e.target.value)
                    if(!e.target.checked){
                      fetch()
                    }
                  }
              }
                />
              </div>
            </div>

            <div className={styles.hl} />
            <p>Price Range</p>
            <div className={styles.options}>
              <div className={styles.pricing}>
                <label>Min. price</label>
                <input 
                // value="$ 2.00" 
                type="range"  
                min="0" />
              </div>
              <div className={styles.pricing}>
                <label>Max. price</label>
                <input
                  // value='$ 2.00'
                  type="range"
                  min={0}
                />
                {/* <div>
                  <span id="rangeValue">0</span>
                  <input  type="range" name="0" min="0" max="1000"  
                  onClick={setValue((e) => {return e.target.value})} onmousemove={setValue((e) => e.target.value)}>0</input>
              </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles["ticket-wrap"]} col`}>
          <div className={styles.subtitle}>
            <p>
              Select Ticket<span></span>
            </p>
            <div>
              <button className={styles.sort} onClick={() => {
                setSort('asc')
                fetch()
                }}
                onDoubleClick={
                  ()=> {
                    setSort('desc')
                    // fetch()
                  }
                }
                >
                <span className="mb-4 fs-5">sort</span>
                <div className="ms-2 mt-2">
                  <Image src={filter} />
                </div>
              </button>
            </div>
          </div>

          <div>
            {dataTiket == [] ?
            
              <div className={styles.notfound}>
              <div className={styles.notfound404}>
                <div></div>
                <h1>404</h1>
              </div>
              <h2>Page not found</h2>
              <p>
                The page you are looking for might have been removed had its name
                changed or is temporarily unavailable.
              </p>
              <a href="/">home page</a>
            </div>
            : 
            dataTiket?.map((item, index) => (
              <div className={styles.ticket} key={index}>
                <div className={styles.airline}>
                  <div >
                    <Image
                      width={100}
                      height={50}
                      src={item.airlines_logo}
                      alt=""
                    />
                  </div>
                  <span>{item.airlines_name}</span>
                </div>

                <div className={`${styles["flight-info"]} row`}>
                  <div className={`${styles.schedule} col-5`}>
                    <div className={`row `}>
                      <div className="col-5">
                        <p className="text-center">
                          {`${item.airport_depature_country_code}`}
                        </p>
                        <div className={`${styles.airport}`}>
                          <span className="d-flex justify-content-center pt-3">{`(${item.airport_arrive_name})`}</span>
                        </div>
                        <br />
                      </div>

                      <div className="col d-flex align-items-center">
                        <Image src={plant} />
                      </div>

                      <div className="col-5">
                        <p className="text-center">
                          {item.airport_arrive_country_code}
                        </p>
                        <div className={`${styles.airport}`}>
                        <span className="d-flex justify-content-center pt-3" >{`(${item.airport_depature_name})`}</span>

                        </div>
                        {/* <br /> */}
                      </div>
                    </div>
                  </div>

                  <div className={`${styles.duration} text-center col-1 `}>
                    <p>{item.status}</p>
                    <span>{item.status_transit}</span>
                  </div>

                  <div className={`${styles.facilities} col-3`}>
                    <div>
                      {item.lungage === "true" ? (
                        <FontAwesomeIcon icon={koper} />
                      ) : (
                        ""
                      )}
                    </div>
                    <div>
                      {item.meal === "true" ? (
                        <FontAwesomeIcon icon={burger} />
                      ) : (
                        ""
                      )}
                    </div>
                    <div>
                      {item.wifi === "true" ? (
                        <FontAwesomeIcon icon={wifi} />
                      ) : (
                        ""
                      )}
                    </div>
                  </div>

                  <div className={`${styles.pricetag} col-3 me-5`}>
                    <p>{`Rp 2.000.000`}</p>
                    <span>/pax</span>
                  </div>
                  <Link href={`detailFlight/${item.id}`}>
                    <button className={styles.select}>Select</button>
                  </Link>
                </div>
              </div>
              // <></>
            ))
            
          }
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
      <div className={`${styles.m_flight}`}>
        <div>
          {/* <div>
            <Image src={plane} alt="" />
          </div> */}

          <div className={styles.m_detail}>
            <div className="row w-100 ">
              <div className="col-5 ms-3">
                <span className="fs-6">From</span>
                <div className="column ">
                <div>
                  <input
                    // name="origin"
                    type="text"
                    className={`${styles.m_origin} `}
                    // value={title.city}
                    placeholder="country"
                    onChange={(e) => {
                      fetchCountryFrom(e.target.value);
                    }}
                  />
                </div>
                <div className="d-grid">
                  <select
                    className={` w-100`}
                    placeholder="city"
                    onChange={(e) => {
                      // setTitle({...title, city: e.target.value})
                      setIdFrom(e.target.value);
                      fetch();
                    }}
                  >
                    {dataFrom?.map((item, index) => (
                      <option value={item.id} key={index}>
                        {item.city}
                        {` (${item.name})`}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              </div>
                <div className="col d-flex align-items-center justify-content-center">
                  <FontAwesomeIcon icon={arrow_switch} />
                </div>
              <div className="col-5 text-end">
                <span className="fs-6">To</span>
                <div className="w-100">
                <div>
                  <input
                    type="text"
                    className={`${styles.m_origin} `}
                    placeholder="country"
                    onChange={(e) => {
                      fetchCountryTo(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <select
                    className={`w-100`}
                    onChange={(e) => {
                      setIdTo(e.target.value);
                      fetch();
                    }}
                  >
                    {dataTo?.map((item, index) => (
                      <option value={item.id} key={index}>
                        {item.city} {` (${item.name})`}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              </div>
            </div>

            {/* <div className="fs-5 w-100 row">
              <div className="col">
              
              </div>
            </div> */}

            <div className="fs-6 ms-5 mt-3">
              <input
                type="date"
                name="departure"
                placeholder="dd-mm-yyyy"
                min="1997-01-01"
                max="2030-12-31"
                className={styles.m_date}
              />
              <span className="text-white"> | </span>
              <select name="ticket" id="ticket" className={styles.m_qty}>
                <option value="1">1 Passenger</option>
                <option value="2">2 Passengers</option>
                <option value="3">3 Passengers</option>
                <option value="4">4 Passengers</option>
              </select>
              <span className="text-white"> | </span>
              <select name="class" id="class" className={styles.m_class}>
                <option value="Economy">Economy</option>
                <option value="Business">Business</option>
                <option value="First Class">First Class</option>
              </select>
            </div>
          </div>
        </div>

        <button
          type="button"
          className={`${styles["m-change-search"]}`}
          onClick={handleSearch}
        >
          Change Search
        </button>
      </div>
      <div className={styles["m-ticket"]}>
        <div className={styles.m_subtitle}>
          <p className="mt-4 ms-4">
            Select Ticket<span></span>
          </p>
          <div className="mt-4 me-4">
            <button className={styles.sort}>
              <span className="mb-4 fs-5">sort</span>
              <div className="ms-2 mt-2">
                <Image src={filter} />
              </div>
            </button>
          </div>
        </div>

        <div className="w-100">
          {dataTiket?.map((item, index) => (
            <Link href={`detailFlight/${item.id}`}>
              <div className={`${styles.m_ticket} mb-3`} key={index}>
                <div className={styles.m_airline}>
                  <div>
                    <Image width={100} height={50} src={item.airlines_logo} />
                  </div>
                  {/* <span>{item.airlines_name}</span> */}
                </div>

                <div className={`${styles["m-flight-info"]} row ms-1`}>
                  <div className={`${styles.m_schedule} col`}>
                    <div className="col-4">
                      <p className="text-center ms-0">
                        {`${item.airport_depature_country_code}`}
                      </p>
                      <small className="fs-6 ms-3">
                        {moment(item.depature).format("LT")}
                      </small>
                      <br />
                    </div>

                    <div className="col ">
                      <Image src={plant} />
                    </div>

                    <div className="col-4">
                      <p className="text-center">
                        {item.airport_arrive_country_code}
                      </p>
                      <small className="fs-6 ms-4">
                        {moment(item.arrive).format("LT")}
                      </small>
                      {/* <small className="fs-6">{`(${item.airport_depature_name})`}</small> */}
                      <br />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col ms-2">
                      {/* {moment(item.depature, 'LT').fromNow(item.arrive, 'LT')} */}
                      {/* <p>{item.status}</p> */}
                    </div>
                    <div className="col-8">
                      <div className={styles.m_pricetag}>
                        <p
                          className={`${styles.m_pricetag}`}
                        >{`Rp 2.000.000`}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
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
  );
}

export default Search;
