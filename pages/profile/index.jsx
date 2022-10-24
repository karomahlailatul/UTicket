// import axios from 'axios'
import React, { useEffect } from 'react'
import FormProfile from '../../components/formProfile'
// import InvoiceTicket from '../../components/invoiceTicket'
import NavbarProfile from '../../components/navbarProfile'
import ProfileCard from '../../components/profileCard'
// import TabMyBooking from '../../components/tabMyBooking'
import styles from './profile.module.css'
import { useDispatch, useSelector } from 'react-redux';
import "react-toastify/dist/ReactToastify.css";
import { getUserProfile } from '../../config/redux/actions/profileActions';

export const getServerSideProps = async (ctx) => {
  const { cookies } = ctx.req
  const token = cookies.token
  const user_id = cookies.user_id
  
  return {
    props: {
      user_id: user_id,
      token: token
    }
  };
}



const Profile = ({token, user_id}) => {
    const dispatch = useDispatch()
    const { dataProfile } = useSelector((state) => state.profile)

  useEffect(() => {
    dispatch(getUserProfile(token))
  }, [token, dispatch])

  return (
    <div className={styles.container}>
  
      <div>
        <div className={styles.wrapper}>
            <ProfileCard
              picture={dataProfile.picture}
              name={dataProfile.name}
              country={dataProfile.country}
              city= {dataProfile.city}
              token={token}
              user_id={user_id}
            />
          {/* <TabMyBooking />  */}
          <FormProfile
            name={dataProfile.name}
            email={dataProfile.email}
            username={dataProfile.username}
            country={dataProfile.country}
            city= {dataProfile.city}
            phone= {dataProfile.phone}
            address={dataProfile.address}
            postal_code={dataProfile.postal_code}
          />  
          
          {/* <InvoiceTicket />  */}
          
        </div>
      </div>
    </div>
  )
}

export default Profile