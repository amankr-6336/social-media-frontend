import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFeedData } from '../../Redux/slice/FeedSlice';
import Followers from '../follwers/Followers';
import Post from '../Post/Post';
import './Feed.scss';
import FeedProfile from './feedprofile/FeedProfile';
import Story from '../STory/Story';



function Feed() {


  const dispatch = useDispatch();


  const feedData = useSelector(state => state.FeedDataReducer.feedData);
  const myProfile = useSelector((state) => state.appConfigReducer.myProfile);
  // console.log(feedData,"for story");

  // console.log(myProfile);


  useEffect(() => {
    dispatch(getFeedData());
  }, [dispatch]);

  return (
    <div className='Feed'>
      <div className="container_f">
        <div className="midpartfeed">
          {/* <Profile/> */}
          <FeedProfile myProfile={myProfile} />
        </div>

        

        <div className="left_part_feed">
          <div className="story_part">
            <Story/>
          </div>
          
          <div className="post_list_feed">
               {feedData?.posts?.map(post => <Post key={post._id} post={post} />)}
          </div>
          
          
        </div>
        <div className="right_part">
          <div className="following_to">
            <div className="titleff">
              <h3 className='titlef'>You are follwing</h3>
              <span className='bar'></span>
            </div>

            {feedData?.followings?.map(user => <Followers key={user._id} user={user} />)}
          </div>

          <div className="to_follow">
            <div className="titleff">
              <h3 className='titlef'>People you may Know</h3>
              <span className='bar'></span>
            </div>
            {feedData?.suggestions?.map(user => <Followers key={user._id} user={user} />)}

          </div>
        </div>

      </div>

    </div>
  )
}

export default Feed
