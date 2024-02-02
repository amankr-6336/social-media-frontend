// import React, { useEffect } from 'react';
// import { axiosClient } from '../../utils/axiosClient';

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { getMyInfo } from "../../Redux/slice/appConfigSlice";
 
function Home() {
  
  const dispatch=useDispatch();
  useEffect(() => {
    dispatch(getMyInfo());
  }, [dispatch]);

  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default Home;
