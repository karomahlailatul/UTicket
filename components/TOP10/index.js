import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import styles from './top.module.css';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { DestinationAction } from '../../config/redux/actions/destinationAction'


function TopTen({src, title}) {
    const dispatch = useDispatch();
    const datas = useSelector((state) => state.destination);
    console.log(datas)
    useEffect(() =>{
      dispatch(DestinationAction({limit: 5}))
    }, [])

  return (
    <div className={styles["top-destination"]}>
    <div className={`d-flex row text-center aligns-items-center my-5`}>
      <p className='fs-6 fw-semibold'>TOP 10</p>
      <p className='fs-3 fw-bold'>Top 10 destinations</p>
    </div>
    <div className={styles["topten-img"]}>
        {datas?.data?.map((item, index) => (
            <div className={`mt-4`} key={index}>
                <div className={`${styles.container_img}`}>
                    <Image src={src} alt="" className={`${styles.img}`}/>
                </div>
                <span>{item.city}</span>
            </div>
            ))
        }
    </div>

  </div>

  )
}

export default TopTen;