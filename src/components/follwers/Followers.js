import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { followAndUnfollowUser } from '../../Redux/slice/FeedSlice';
import Avatar from '../Avatar/Avatar'
import'./Follwers.scss';
import {useNavigate} from 'react-router'

function Followers({user}) {

  const dispatch=useDispatch();
  const navigate=useNavigate()
  const feedData=useSelector(state => state.FeedDataReducer.feedData);
  const [isFollowing,setIsFollowing]=useState();

  function handleUserFollow(){
     dispatch(followAndUnfollowUser({
      userIdToFollow:user._id
     }))
  }

  useEffect(() =>{
       setIsFollowing(feedData.followings.find(item => item._id===user._id))
  },[feedData,user])


  return (
    <div className='Followers'>
      <div className="user_info" onClick={()=> navigate(`/profile/${user._id}`)}>
      <Avatar src={user?.avatar?.url}/>
      <h4 className='name'>{user?.name}</h4>
      </div>
      
      <h5 onClick={handleUserFollow} className='hover'>{isFollowing? 'Unfollow':'Follow'}</h5>
    </div>
  )
}

export default Followers
