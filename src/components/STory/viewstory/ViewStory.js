import React, { useState ,useEffect} from 'react'
import './ViewStory.scss'

import { IoCloseSharp } from "react-icons/io5";

function ViewStory({ story }) {

  
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let intervalId;

    if (open) {
      intervalId = setInterval(() => {
        setProgress((prevProgress) => prevProgress + 0.1);
      }, 220);
    }

    if (progress > 5) {
      clearInterval(intervalId);
      setOpen(false);
      setProgress(0);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [open, progress]);
  

  return (
    <>
      <div className="viewstory">
        <div className="inner_view_story" onClick={()=>setOpen(!open)}>
          <img src={story?.image?.url} alt="" />
        </div>

      </div>
      {open &&<div className="viewmodal">
        <div className="close" onClick={() => setOpen(!open)}>
          <IoCloseSharp id='close_icon' />
        </div>
        <div className="inner_view_modal">
          <img src={story?.image?.url} alt="" />
        </div>
        <div className="progress-bar-container">
            <div
              className="progress-bar"
              style={{
                width: `${progress *20}%`,
                 // Green color
                 background:'whitesmoke',
                height:'6px',
                borderRadius:'10px',
                transition: 'width 0.5s ease-in-out'
              }}
            ></div>
          </div>
        
      </div>}
    </>
  )
}

export default ViewStory