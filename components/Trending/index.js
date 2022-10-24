import React, {
  useEffect,
  useState,
  // useState
} from "react";
import "./trend.module.css";
import more from "../../assets/img/home/more-btn.svg";
// import japan from "../../assets/images/japan.svg";
import styles from "./trend.module.css";
import Image from "next/image";
import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { DestinationAction } from "../../config/redux/actions/destinationAction";
import { Navigation, Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// import "./styles.css";

function Trending() {
  // const dispatch = useDispatch();
  // const datas = useSelector((state) => state.destination);
  const [data, setData] = useState([]);
  const fetch = async () => {
    const result = await axios.get(`${process.env.API_BACKEND}airport?limit=10`);
    setData(result.data.data);
  };
  // console.log(data);
  useEffect(() => {
    fetch();
    // dispatch(DestinationAction({limit: 10}))
  }, []);
  // const swiper = new Swiper('.swiper', {
  //   // Optional parameters
  //   direction: 'vertical',
  //   loop: true,

  //   // If we need pagination
  //   pagination: {
  //     el: '.swiper-pagination',
  //   },

  //   // Navigation arrows

  // });
  return (
    <div className={`${styles.container_custom} mt-5`}>
      <span className={`ms-2 ${styles.color} fs-bold fs-5`}>TRENDING</span>
      <div className={`fs-3 fw-bold ms-2 my-3`}>
        <span>Trending destinations</span>
      </div>
      <div className={styles.cards}>
        <Swiper
          slidesPerView={5}
          spaceBetween={5}
          slidesPerGroup={2}
          loop={true}
          modules={[Pagination, Navigation]}
          // pagination={{
          //   clickable: true,
          // }}
          navigation={true}
          breakpoints={{
            //when window width is >= 440
            300: {
              slidesPerView: 1,
            },
            400: {
            slidesPerView: 1,
            },
            440: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView:2,
            },
            640: {

              slidesPerView: 4,
            },
            768: {

              slidesPerView: 5,
            }
          }}
          className="mySwiper"
        >
          {data?.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className={styles.card} >
                  <p>{item.city}, </p>
                  <div className={styles.detail}>
                    <span>{item.country}</span>
                    <div className="">
                      <Image src={more} alt="" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Trending;
