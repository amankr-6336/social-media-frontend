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
import {CiFacebook} from 'react-icons/ci'
import {AiOutlineInstagram} from 'react-icons/ai'
import {CiLinkedin} from 'react-icons/ci'
import PostCollection from '../postcollection/PostCollection';

function Profile() {
   const navigate = useNavigate();
   const params = useParams();
   const userProfile = useSelector((state) => state.PostsReducer.userProfile);
   const myProfile = useSelector((state) => state.appConfigReducer.myProfile);
   const feedData = useSelector((state) => state.FeedDataReducer.feedData);
   const dispatch = useDispatch();
   const [isMyProfile, setIsMyProfile] = useState(false);
   const [isFollowing, setIsFollowing] = useState(false);
   console.log(userProfile);

   useEffect(() => {
      dispatch(getUserProfile({
         userId: params.userId
      }));

      setIsMyProfile(myProfile?._id === params.userId);
      setIsFollowing(feedData?.followings?.find((item) => item._id === params.userId));
   }, [myProfile, params.userId, feedData, dispatch])

   function handleUserFollow() {
      dispatch(followAndUnfollowUser({
         userIdToFollow: params.userId
      }))
   }


   return (

      <div className='Profile'>
         <div className="container_p">
            {/* <img className='back' src="" alt="" /> */}


            <div className="left_part">
               <div className="profile_card">

                  <div className="picpart">
                     <span className="pichalf"></span>
                     <img id='propics' src={userProfile?.avatar?.url} alt="" />

                     <div className="nameandb">
                        <h3 className='userName'>{userProfile?.name}</h3>
                        <p id='bi'>{userProfile?.bio}</p>
                     </div>

                  </div>

                  <div className="split">
                     <div className="textpart">


                        <div className="info">
                           <div className="folwer">
                              <h2>{myProfile?.followers?.length}</h2>
                              <p>Followers</p>
                           </div>
                           <div className="folwing">
                              <h2>{myProfile?.followings?.length}</h2>
                              <p>Followings</p>
                           </div>

                        </div>

                        <div className="birthday">
                           <h5>Birthday : 20 july </h5>
                        </div>

                        <div className="socialinks">
                           <div className="facebook">
                              <CiFacebook className='socialicon' />
                           </div>
                           <div className="insta">
                              <AiOutlineInstagram className='socialicon' />
                           </div>
                           <div className="Linkedin">
                              <CiLinkedin className='socialicon' />
                           </div>
                        </div>

                        <div className="buttons">
                           {!isMyProfile && (
                              <h5
                                 style={{ marginTop: '10px' }}
                                 onClick={handleUserFollow}
                                 className={
                                    isFollowing
                                       ? "updateprofile"
                                       : "updateprofile"
                                 }
                              >
                                 {isFollowing ? "Unfollow" : "Follow"}
                              </h5>
                           )}

                           {isMyProfile && <button className='updateprofile' onClick={() => { navigate('/updateprofile') }}>Update profile</button>}

                        </div>

                      

                     </div>

                     <div className="listofpostpart">
                            <div className="headingpost">
                              <h2>Posts</h2>

                            </div>
                            <div className="listofpost">
                              <PostCollection userProfile={userProfile}/>
                            </div>
                     </div>
                  </div>



               </div>
            </div>
            {/* 
         <div className="postcard">

         </div> */}



            <div className="right_part_profile">
               {isMyProfile && <CreatePost />}
               {userProfile?.posts?.map(post => <Post key={post._id} post={post} />)}
            </div>

         </div>

      </div>




   )
}

export default Profile
