import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '../Avatar/Avatar';
import "./Navbar.scss"
import { BiLogOut } from 'react-icons/bi'
import { useSelector } from 'react-redux';
// import {setLoading} from '../../Redux/slice/appConfigSlice'
import { axiosClient } from '../../utils/axiosClient';
import { KEY_ACCESS_TOKEN, removeItem } from '../../utils/localStorageManager';
import { FiMenu } from 'react-icons/fi'
import FeedProfile from '../feed/feedprofile/FeedProfile';
import { CgClose } from 'react-icons/cg'
import { BsFillPersonPlusFill } from 'react-icons/bs'
import Followers from '../follwers/Followers';

function Navbar() {

  const navigate = useNavigate();
  const [open, setopen] = useState(false);
  const [add,setadd]=useState(false);

  // const dispatch=useDispatch();
  const myProfile = useSelector(state => state.appConfigReducer.myProfile);
  
  const feedData = useSelector(state => state.FeedDataReducer.feedData);

  async function handleLogoutClicked() {
    try {
      // dispatch(setLoading(true));
      await axiosClient.post('/auth/logout');
      removeItem(KEY_ACCESS_TOKEN);
      navigate('/login');
      // dispatch(setLoading(false));
    } catch (error) {

    }
  }

  function toggleswitch() {
    setopen(!open);
  }
  function toggleadd() {
    setadd(!add);
  }


  return (
    <>
      <div className='Navbar'>
        <div className="container">
          <div className="hamburger" onClick={toggleswitch} >
            {open ? <CgClose className="hamicon" /> : <FiMenu className="hamicon" />}
          </div>
          <div className="bannerbig">
            <h2 className='banner ' onClick={() => navigate('/')}>Socia<p>light</p></h2>
          </div>

          <div className="right_side">

            <div className="profile" onClick={() => navigate(`/profile/${myProfile?._id}`)}>
              <Avatar src={myProfile?.avatar?.url} />
            </div>
            <div className="logout"  >
              <BiLogOut className='logou'  onClick={handleLogoutClicked} />
              <BsFillPersonPlusFill className='add'  onClick={toggleadd}/>
            </div>
          </div>
        </div>
      </div>

      <div className={open ? "extends" : "extend"}>
        <FeedProfile myProfile={myProfile} />
      </div>

      <div className={add?"right_partnx":"right_partn"}>
        <div className="following_ton">
          <div className="titleffn">
            <h3 className='titlefn'>You are follwing</h3>
            <span className='barn'></span>
          </div>

          {feedData?.followings?.map(user => <Followers key={user._id} user={user} />)}
        </div>

        <div className="to_follown">
          <div className="titleffn">
            <h3 className='titlefn'>People you may Know</h3>
            <span className='barn'></span>
          </div>
          {feedData?.suggestions?.map(user => <Followers key={user._id} user={user} />)}

        </div>
      </div>
    </>
  )
}

export default Navbar
