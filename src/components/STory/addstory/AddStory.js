import React, { useState } from 'react'
import './AddStory.scss'
import { MdOutlineAddCircle } from "react-icons/md";
import { BsCardImage } from "react-icons/bs";
import dummy from '../../../assets/dummy.png'
import { IoCloseSharp } from "react-icons/io5";
import {axiosClient} from '../../../utils/axiosClient'

import { useDispatch } from 'react-redux';
import { getStory } from '../../../Redux/slice/StorySlice';
<IoCloseSharp />

function AddStory() {
    const [open, setOpen] = useState(false);
    const [storyImage, setStoryImage] = useState("");
    const dispatch=useDispatch()

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            if (fileReader.readyState === fileReader.DONE) {
                setStoryImage(fileReader.result);
                console.log("img data", fileReader.result);
            }
        };
    };

    const handlepostStory=async()=>{
        try {
            const result=await axiosClient.post('/story',{
                storyImage
            });
            console.log("story status ", result);
            dispatch(getStory());

        } catch (error) {
             console.log(error)
        }
        finally{
            setStoryImage("");
            setOpen(false);
          
        }
    }

    
    return (
        <>
            <div className="addstory">
                <div className="inneraddstory" onClick={() => setOpen(!open)}>
                    <div className="add_story_button">
                        <MdOutlineAddCircle id='add'/>
                        <p>Add story</p>
                    </div>
                </div>
            </div>
            {open && <div className="add_story_modal">
                <div className="close" onClick={()=>setOpen(!open)}>
                    <IoCloseSharp id='close_icon' />
                   
                </div>
                <div className="inner_modal">
                    <div className="story_image_add">
                        <label htmlFor="inputImg" className="labelImg">
                            <BsCardImage className='icon_' /><p>Add Photo</p>
                        </label>
                        <input
                            className="inputImg"
                            id="inputImg"
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                    </div>

                    <div className="story_img_container">
                    {storyImage? <img className="post_img" src={storyImage ? storyImage : dummy} alt="post-img" />:<h1 className='txt_preview'>Add image to see the preview</h1> }
                         {/* <h1>Add image to see the preview</h1>
                        <img className="post_img" src={storyImage ? storyImage : dummy} alt="post-img" /> */}
                    </div>

                    <button className="post_button" onClick={handlepostStory} >
                        Add Story
                    </button>
                </div>
            </div>}
        </>
    )
}

export default AddStory