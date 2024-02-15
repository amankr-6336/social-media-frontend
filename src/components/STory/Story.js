import React, { useEffect } from 'react'
import './Story.scss'
import AddStory from './addstory/AddStory'
import ViewStory from './viewstory/ViewStory'
import { useDispatch, useSelector } from 'react-redux';

import { getAllStory, getStory } from '../../Redux/slice/StorySlice';

function Story() {
  const myProfile = useSelector((state) => state.appConfigReducer.myProfile);
  const feedData = useSelector(state => state.FeedDataReducer.feedData);
  const profileStory=useSelector(state=>state.StoryReducer.story);
  const followingsStory=useSelector(state=>state.StoryReducer.allStory)
  
  // const [story,setStory]=useState([profileStory])
  // console.log(profileStory,"feeddata");
  // console.log(followingsStory,"following story");
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(getStory());
    dispatch(getAllStory());
    // setStory(profileStory);
  },[dispatch,feedData,myProfile]);


 

  
  return (
     <div className="main_story">
       <div className="a_story">
       <AddStory />
       </div>
      <div className="v_story">
         {profileStory?.story?.map(story => <ViewStory key={story._id} story={story} />)}
         {followingsStory?.story?.map(story=> <ViewStory key={story._id} story={story}/>)} 
      </div>
       
     </div>
  )
}

export default Story