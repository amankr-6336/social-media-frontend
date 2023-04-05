import React, { useEffect, useState } from 'react'
import Post from '../Post/Post'
import './Profile.scss'
// import profilepic from '../../assets/User.png';
// import back from '../../assets/back.jpg'
import { useNavigate, useParams } from 'react-router-dom';
import CreatePost from '../createpost/CreatePost';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile } from '../../Redux/slice/PostsSlice';
import { followAndUnfollowUser } from '../../Redux/slice/FeedSlice';

function Profile() {
  const navigate=useNavigate();
  const params=useParams();
  const userProfile =useSelector((state) => state.PostsReducer.userProfile);
  const myProfile =useSelector((state) => state.appConfigReducer.myProfile);
  const feedData=useSelector((state) => state.FeedDataReducer.feedData );
  const dispatch=useDispatch();
  const[isMyProfile,setIsMyProfile]=useState(false);
  const[isFollowing,setIsFollowing]=useState(false);

  useEffect(()=>{
     dispatch(getUserProfile({
      userId: params.userId
     }));

     setIsMyProfile(myProfile?._id===params.userId);
     setIsFollowing(feedData?.followings?.find((item) => item._id===params.userId))
  },[myProfile,params.userId,feedData])
   
  function handleUserFollow(){
    dispatch(followAndUnfollowUser({
      userIdToFollow:params.userId
     }))
  }


  return (
    
    <div className='Profile'>
       <div className="container_p">
       {/* <img className='back' src="" alt="" /> */}

       
       <div className="left_part">
              <div className="profile_card">
              
                <div className="picpart">
                   <div className="gradient"></div>
                   <img  id='propic' src={userProfile?.avatar?.url} alt="" />

                </div>

                <div className="textpart">
                    <h3 className='userName'>{userProfile?.name}</h3>
                    <p>{userProfile?.bio}</p>
                    <hr />
                         <div className="info">
                            <h4>{`${userProfile?.followers?.length} Followers`}</h4>
                            <h4>{`${userProfile?.followings?.length} Followings`}</h4>

                         </div>

                         <div className="buttons">
                                 {!isMyProfile && (
                                <h5
                                style={{marginTop:'10px'}}
                                onClick={handleUserFollow}
                                className={
                                    isFollowing
                                        ? "hover-link follow-link"
                                        : "btn-primary"
                                }
                                 >
                                {isFollowing ? "Unfollow" : "Follow"}
                                </h5>
                                 )}
                   
                                  {isMyProfile && <button className='updateprofile' onClick={()=>{navigate('/updateprofile')}}>Update profile</button>}

                                  </div>       
                    
                    </div>
 
            </div>
         </div>
         


          <div className="right_part_profile">
            {isMyProfile && <CreatePost/>}
             {userProfile?.posts?.map(post => <Post key={post._id} post={post}/> ) }
          </div>

       </div>

       </div>
      
    

   
  )
}

export default Profile
