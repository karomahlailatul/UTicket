import React, { useEffect, useState } from "react";
import styles from "./detailFlight.module.css";
import Banner from '../../assets/img/detailFlight/banner-lg.svg'
import Banner1 from '../../assets/img/detailFlight/banner-sm.svg'
import Image from "next/image";
// import LogoGaruda from '../../assets/img/search/Logo-garuda.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { findIconDefinition } from "@fortawesome/fontawesome-svg-core";
import plane from "../../assets/img/booking/plant.svg";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import start from '../../assets/img/detailFlight/start.svg'
import axios from "axios";
import moment from "moment/moment";
const warning = findIconDefinition({
  prefix: "fas",
  iconName: "triangle-exclamation",
});
const check = findIconDefinition({ prefix: "fas", iconName: "circle-check" });
const wifi = findIconDefinition({ prefix: "fas", iconName: "wifi" });
const burger = findIconDefinition({ prefix: "fas", iconName: "burger" });

function DetailFlight() {
  const router = useRouter();
  const token = Cookies.get("token");
  const [dataFlight, setDataFlight] = useState([]);
  const [dataProfile, setDataProfile] = useState([]);
  // const [id, setId] = useState((router.query.id))
  const id = router.query.id
  const [check, setChecked] = useState(false);
  // console.log(dataFlight)
  // console.log(id);

  const fetchProfile = async () => {
    const result = await axios.get(`${process.env.API_BACKEND}users/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setDataProfile(result.data.data);
  };
  useEffect(() => {
    const fetch = async (Id) => {
      // const id = router?.query?.id;
      const result = await axios.get(`${process.env.API_BACKEND}flight/${Id.toString()}`);
      setDataFlight(result.data.data[0]);
      console.log(Id)
    };
    // console.log(router.query.id);
    // setId(router.query.id)
    fetchProfile();
    fetch(router.query.id);
    console.log(router.query.id)

  }, [router]);

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        {/* <Navi /> */}
          <div className={`${styles.banner}`}>
            <Image src={Banner} className={`${styles.imgBanner}`}/>
          </div>
          <div className={`${styles.banner1}`}>
            {/* <span className={`${styles.imgBanner}`}><Image src={Banner1} /></span> */}
            
          </div>
        <div className={styles.bannerWrapper}>
          <div className={`row ms-5 ${styles.textBanner}`}>
            <div className="col-7 mt-5">
              <p className={`${styles.contactText}`}>Contact Person Detail</p>
            </div>
            <div className={`${styles.m_detailFligh} col-2 ms-5 mt-5 d-flex justify-content-end`}>
              <p className={`${styles.contactText}`}>Flight Detail</p>
            </div>
            <div className="col-2 col-sm-4 mt-5 d-flex justify-content-end">
              <i className={`${styles.contactView}`}>View Detail</i>
            </div>
          </div>
        </div>

        <div
          className={`row w-100 d-flex justify-content-between ${styles.from_name}`}
        >
          <div className="col-6 ms-5">
            <form>
              <div className={styles.contactBox}>
                <p className={styles.textFullname}>Full Name</p>
                <input
                  type="text"
                  defaultValue={dataProfile.name}
                  className={`form-control bg-transparent ${styles.inputFrom}`}
                  placeholder="Insert Full Name"
                  // disabled
                />
                <div className={`${styles.line} mb-2`}></div>
                <p className={styles.emailText}>Email</p>
                <input
                  type="email"
                  defaultValue={dataProfile.email}
                  className={`form-control bg-transparent ${styles.inputFrom}`}
                  placeholder="Insert Your Email"
                  // disabled
                ></input>
                <div className={`${styles.line} mb-2`}></div>
                <p className={styles.phoneText}>Phone Number</p>

                <div className="row">
                  <div className="col-1">
                    <select
                      className={`${styles.sBtn} d-flex mt-2`}
                      name="phone"
                      id="phoneNumber"
                    >
                      <option value="+62">+62</option>
                      <option value="+1">+1</option>
                      <option value="+2">+2</option>
                      <option value="+3">+3</option>
                      <option value="+4">+4</option>
                      <option value="+5">+5</option>
                    </select>
                  </div>
                  <div className="col-11 ">
                    <input
                      type="number"
                      defaultValue={
                        dataProfile.phone
                      }
                      className={`form-control bg-transparent ${styles.inputFrom}`}
                      placeholder="Updater your Profile"
                      // disabled
                    />
                  </div>
                </div>
                <div className={`${styles.line} mt-2`}></div>
                <div className={styles.warning}>
                  <div className={`d-flex justify-content-start `}>
                    <span className={`text-warning ms-4 mt-3`}>
                      <FontAwesomeIcon icon={warning} />
                    </span>
                    <p className={`mt-3 ms-3`}>
                      Make sure the customer data is correct.
                    </p>
                  </div>
                </div>
              </div>
            </form>
            <form action="">
              <div className={styles.passengerWrapper}>
                <p className={styles.passengerText}>Passenger Details</p>
                <div className={styles.passengerBox}>
                  <div className={styles.confirm}>
                    <p className={styles.textConfirm}>Passenger: 1 Adult</p>
                    <p className={styles.textConfirm2}>
                      Same as contact person
                    </p>
                    <input type="checkbox" onClick={(e)=> setChecked(e.target.checked)}/>
                  </div>
                  {/* {add ? ( */}
                  {/* <> */}
                  <div className="row mt-5">
                  <div className="col-1 mt-4 ms-4">
                    <p className={styles.titleText}>Title</p>
                      <select
                      className={styles.sBtn}
                      name="title"
                      id="title"
                      required
                    >
                      <option value="Mr.">Mr.</option>
                      <option value="Mrs.">Mrs.</option>
                    </select>
                  </div>
                  <div className="col-8 mt-2">
                    <input
                      type="text"
                      defaultValue={check === true ? dataProfile.name : ''}
                      className={` bg-transparent ${styles.input3} `}
                      // disabled
                    />
                    </div>
                  </div>
                  
                    {/* <select
                      className={styles.sBtn2}
                      name="title"
                      id="title"
                      required
                    >
                      <option value="Mr.">Mr.</option>
                      <option value="Mrs.">Mrs.</option>
                    </select> */}
                    <div className={styles.line3}></div>
                    <p className={styles.passengerName}>Full Name</p>
                    <input
                      name="fullname"
                      type="text"
                      defaultValue={check === true ? dataProfile.name : ''}
                      className={styles.input4}
                      placeholder="Insert Your Name"
                      // required
                    ></input>
                    <p className={styles.nationalityText}>Nationality</p>
                    <select
                      className={styles.sBtn3}
                      name="nationality"
                      id="ntionality"
                      required
                    >
                      <option value="Indonesia">Indonesia</option>
                      <option value="Norwey">Norwey</option>
                      <option value="Iceland">Iceland</option>
                      <option value="Switzerland">Switzerland</option>
                      <option value="Sweden">Sweden</option>
                      <option value="Finland">Finland</option>
                    </select>
                    <div className={styles.line4}></div>
                    {/* <p className={styles.passengerSeat}>Seat</p> */}
                    {/* <input
                      type="number"
                      name="totalorder"
                      // value="total Order"
                      className={styles.input5}
                      placeholder="Insert How many seat"
                      required
                    /> */}
                  {/* </> */}
                  {/* ) : null} */}
                </div>
                <p className={styles.passengerText2}>Passenger Details</p>
                <div className={styles.passengerBox2}>
                  <input type="checkbox" />
                  <p className={styles.textInsurance}>Travel Insurance</p>
                  <p className={styles.textPrice}>
                    $ 200<span>/pax</span>
                  </p>
                  <div className={styles.line5}></div>
                  <p className={styles.textCompensation}>
                    Get travel compensation $ 10.000,00
                  </p>
                </div>
                <button className={styles.paymentBtn} type="submit" title="">
                  Proceed to Payment
                </button>
              </div>
            </form>
          </div>
          <div className="col-4 ">
            <div className={`${styles.fDetailBox} d-flex row`}>
              <div className={`d-flex`}>
                <div className="mt-4">
                  <Image
                    src={dataFlight.airlines_logo}
                    width={100}
                    height={50}
                    alt="logo"
                  />
                </div>
                <p className={`mt-5 ms-3`}>{dataFlight.airlines_name}</p>
              </div>
              <div className={`row`}>
                <div className={`col-4 ms-3`}>
                  <p
                    className={``}
                  >{`${dataFlight.airport_arrive_city} `}</p>
                  <p className={`mt-3`}>
                    {moment(dataFlight.arrive).format("ll")}
                  </p>
                </div>
                <div className={`col-6`}>
                  <div className="d-flex">
                    <span className="me-5">
                      <Image src={plane} />
                    </span>
                    <p
                      className={``}
                    >{`${dataFlight.airport_depature_city}`}</p>
                  </div>
                  <div className="d-flex">
                    <div className={`${styles.ellipse} mt-2 `} />
                    <p className={`mx-4 `}>
                      {moment(dataFlight.depature).format("ll")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="">
                {dataFlight?.refundable === "true" ? (
                  <p className={`${styles.icon_color}`}>
                    <span className={`me-2`}>
                      <FontAwesomeIcon icon={check} />
                    </span>
                    Refundable
                  </p>
                ) : (
                  ""
                )}
                {dataFlight?.reschedule === "true" ? (
                  <p className={styles.icon_color}>
                    <span className={`me-2`}>
                      <FontAwesomeIcon icon={check} />
                    </span>
                    Can reschedule
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className={`${styles.line2} ms-3`}></div>
              <div className={`d-flex justify-content-between`}>
                <p className={`ms-4 mt-1 ${styles.text_prices}`}>
                  Total Payment
                </p>
                <p className={`me-5 ${styles.prices}`}>$ {dataFlight.price}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.m_view}`}>
        
            <div className={`${styles.m_fDetailBox} d-flex row`}>
              <div className={`row  `}>
                <div
                  className={`col-5  d-flex justify-content-center align-items-center flex-column`}
                >
                  <p
                    className={`text-center fw-bold fs-3`}
                  >{`${dataFlight.airport_arrive_country_code}  `}</p>
                  <small className={`${styles.m_small}`}>
                    {`(${dataFlight.airport_arrive_name})`}
                  </small>
                </div>
                <div className="col-2 m-auto">
                  <span className="me-5">
                    <Image src={plane} />
                  </span>
                </div>
                <div className="col-5 d-flex  justify-content-center align-items-center flex-column">
                  <p
                    className={`text-center fw-bold fs-3`}
                  >{`${dataFlight.airport_depature_country_code}`}</p>
                  <small className={`${styles.m_small}`}>
                    {`(${dataFlight.airport_depature_name})`}
                  </small>
                </div>
              </div>
              <div className={`row ${styles.m_date}`}>
                <div className="col-5">
                  <p className={`text-center`}>
                    {moment(dataFlight.arrive).format("LT")}
                  </p>
                </div>
                <div className="col">
                  <div className={`${styles.ellipse} mt-2`} />
                </div>
                <div className="col-5">
                  <p className={`text-center`}>
                    {moment(dataFlight.depature).format("LT")}
                  </p>
                </div>
              </div>
              <div className={`d-flex ${styles.m_logo}`}>
                <div className="col">
                  <Image
                    src={dataFlight.airlines_logo}
                    width={100}
                    height={50}
                    alt="logo"
                  />
                  <p className={`${styles.m_airportName}`}>{dataFlight.airlines_name}</p>
                </div>
                <div className="col text-center">
                  <Image src={start} />
                </div>
              </div>
                <div className={`${styles.m_detail} d-flex`}>
                  <div className="col">
                    <span>Code</span>
                    <p>{dataFlight.estimate}</p>
                  </div>
                  <div className="col">
                    <span>Class</span>
                    <p>{dataFlight.type_class}</p>
                  </div>
                  <div className="col">
                    <span>Terminal</span>
                    <p>A</p>
                  </div>
                  <div className="col">
                    <span>Gate</span>
                    <p>221</p>
                  </div>
                </div>
                <div className={`${styles.m_line2} w-100 `}></div>
                <div className="row">
                  <div className="col d-flex align-items-center justify-content-center">
                    <div className={`${styles.m_pasanger}`}>2</div> 
                    <p className={`${styles.m_title} ms-2`}>Child</p>
                  </div>
                  <div className="col d-flex align-items-center justify-content-center">
                  <div className={`${styles.m_pasanger}`}>4</div> 
                    <p className={`${styles.m_title} ms-2`}>Adults</p>
                  </div>
                </div>
            </div>
            <div className='ms-5'>
              <p className="mt-5 fw-bold fs-3">Facilities</p>
              <div className="d-flex w-100">
              <div className={`${styles.icon_container} d-flex align-items-center me-3`}>
                <span className="text-white fs-1 m-auto">
                  <FontAwesomeIcon icon={burger}/></span>
              </div>
              <div className={`${styles.icon_container1} d-flex align-items-center`}>
                <span className="text-white fs-1 m-auto">
                  <FontAwesomeIcon icon={wifi}/></span>
              </div>

            </div>
            </div>
            <div className={`d-flex justify-content-between ${styles.m_prices_container} container ms-3 mt-5`}>
              <p className={`${styles.m_text_prices} fs-4`}>Total Payment</p>
              <p className={` ${styles.prices} me-5 fs-1`}>$ {dataFlight.price}</p>
            </div>
            <div className={ `d-flex justify-content-center pb-5 `}>
              <button className={`btn  rounded ${styles.m_btn_custom}`}>BOOK FLIGHT</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default DetailFlight;
