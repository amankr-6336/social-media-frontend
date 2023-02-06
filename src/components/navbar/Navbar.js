import React from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '../Avatar/Avatar';
import "./Navbar.scss"
import {BiLogOut} from 'react-icons/bi'
import { useSelector } from 'react-redux';
// import {setLoading} from '../../Redux/slice/appConfigSlice'
import { axiosClient } from '../../utils/axiosClient';
import { KEY_ACCESS_TOKEN, removeItem } from '../../utils/localStorageManager';

function Navbar() { 

  const navigate =useNavigate();
 
  // const dispatch=useDispatch();
  const myProfile=useSelector(state => state.appConfigReducer.myProfile);
  
  async  function handleLogoutClicked(){
       try {
          // dispatch(setLoading(true));
          await axiosClient.post('/auth/logout');
          removeItem(KEY_ACCESS_TOKEN);
          navigate('/login');
          // dispatch(setLoading(false));
       } catch (error) {
        
       }
  }
  
  
  return (
    <div className='Navbar'>
      <div className="container">
        <h2 className='banner ' onClick={()=> navigate('/')}>Web i <span></span></h2>
        <div className="right_side">
         
          <div className="profile" onClick={()=> navigate(`/profile/${myProfile?._id}`)}>
            <Avatar src={myProfile?.avatar?.url}/>
          </div>
          <div className="logout" onClick={handleLogoutClicked} >
          <BiLogOut/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
