import React, { useEffect, useState } from 'react'
import './trend.module.css'
import more from '../../assets/img/home/more-btn.svg'
// import japan from "../../assets/images/japan.svg";
import styles from './trend.module.css'
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { DestinationAction } from '../../config/redux/actions/destinationAction'



function Trending({}) {
  const dispatch = useDispatch();
  const datas = useSelector((state) => state.destination);
  console.log(datas)
  useEffect(() =>{
    dispatch(DestinationAction({limit: 5}))
  }, [])
  return (
    <div className={`container mt-5`}>
        <span className={`ms-2 ${styles.color} fs-bold fs-5`}>TRENDING</span>
        <div className={`fs-3 fw-bold ms-2 my-3`}>
          <span>Trending destinations</span>
        </div>
        <div className={styles.cards}>
          {datas?.data?.map((item, index) => {
            return(
              <div className={styles.card} key={index}>
              <p>{item.city}, </p>
              <div className={styles.detail}>
                  <span>{item.country}</span>
                  <div className=''>
                      <Image src={more} alt=''/>
                  </div>
              </div>
            </div>
            )
          })
          }
        </div>
      </div>
  )
}

export default Trending;