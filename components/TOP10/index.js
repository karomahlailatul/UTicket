import Image from "next/image";
import React, {
  Fragment,
  useEffect,
  useState,
  // useState
} from "react";
import styles from "./top.module.css";
import axios from "axios";
// import btnPrev from '../../assets/logo/logo-prev.svg'
// import btnback from '../../assets/logo/logo-back.svg'
import { useDispatch, useSelector } from "react-redux";
import {
  Navigation,
  Pagination,
  // Scrollbar, A11y
} from "swiper";

import {
  Swiper,
  SwiperSlide,
  // useSwiper
} from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import 'swiper/css/navigation';
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function TopTen({
  src,
  // title
}) {
  const [data, setdata] = useState([]);

  // console.log(datas)
  useEffect(() => {
    const fetch = async () => {
      const result = await axios.get(
        `${process.env.API_BACKEND}flight?limit=5`
      );
      setdata(result.data.data);
    };
    // dispatch(DestinationAction({limit: 5}))
    fetch();
  }, []);

  return (
    <div className={styles["top-destination"]}>
      <div className={`d-flex row text-center aligns-items-center my-5`}>
        <p className="fs-6 fw-semibold">TOP 10</p>
        <p className="fs-3 fw-bold">Top 10 destinations</p>
      </div>
      <div className={styles["topten-img"]}>
        <Swiper
          slidesPerView={5}
          spaceBetween={50}
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
              slidesPerView: 2,
            },
            400: {
              slidesPerView: 2,
            },
            440: {
              slidesPerView: 3,
            },
            576: {
              slidesPerView: 4,
            },
            640: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
        >
          {data
            ? data?.map((item, index) => (
                <Fragment key={index}>
                  <SwiperSlide>
                    <div className={`mt-4`}>
                      <div className={`${styles.container_img}`}>
                        <Image src={src} alt="" className={`${styles.img}`} />
                      </div>
                      <span className="ms-5">{item.airport_arrive_city}</span>
                    </div>
                  </SwiperSlide>
                </Fragment>
              ))
            : null}
        </Swiper>
      </div>
    </div>
  );
}

export default TopTen;
