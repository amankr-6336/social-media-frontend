import React, { useEffect } from 'react'
import './Story.scss'
import AddStory from './addstory/AddStory'
import ViewStory from './viewstory/ViewStory'
import { useDispatch, useSelector } from 'react-redux';

import { getStory } from '../../Redux/slice/StorySlice';

function Story() {
  const myProfile = useSelector((state) => state.appConfigReducer.myProfile);
  const feedData = useSelector(state => state.FeedDataReducer.feedData);
  const profileStory=useSelector(state=>state.StoryReducer.story)
  
  // const [story,setStory]=useState([profileStory])
  console.log(profileStory.allStory,"feeddata");
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(getStory());
    // setStory(profileStory);
  },[dispatch,feedData,myProfile])

 

  
  return (
     <div className="main_story">
       <div className="a_story">
       <AddStory />
       </div>
      <div className="v_story">
        {profileStory?.allStory?.map(story => <ViewStory key={story._id} story={story} />)}
     
      </div>
       
     </div>
  )
}

export default Story