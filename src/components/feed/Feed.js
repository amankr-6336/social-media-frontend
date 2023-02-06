import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFeedData } from '../../Redux/slice/FeedSlice';
import Followers from '../follwers/Followers';
import Post from '../Post/Post';
import './Feed.scss';



function Feed() {
  
  
   const dispatch=useDispatch();
 

   const feedData=useSelector(state => state.FeedDataReducer.feedData);
   
 


   useEffect(()=>{
      dispatch(getFeedData());
   },[dispatch]);

  return (
    <div className='Feed'>
       <div className="container">
          
          <div className="left_part_feed">
            {feedData?.posts?.map(post => <Post key={post._id} post={post}/>)}
            {/* <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/> */}
          </div>
          <div className="right_part">
              <div className="following_to">
                <h3  className='title'>You are follwing</h3>
                <hr />
                {feedData?.followings?.map(user => <Followers key={user._id} user={user}/>)}
              </div>

              <div className="to_follow">
                <h3  className='title'>People you may know</h3>
                <hr />
                {feedData?.suggestions?.map(user => <Followers key={user._id} user={user}/>)}
               
              </div>
          </div>
        
       </div>
      
    </div>
  )
}

export default Feed
