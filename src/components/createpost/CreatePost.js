import React, { useState } from "react";
import Avatar from "../Avatar/Avatar";
// import nature from '../../assets/nature2.jpg'
import "./createPost.scss";
import { BsCardImage } from "react-icons/bs";
import { axiosClient } from "../../utils/axiosClient";
import { useDispatch, useSelector } from "react-redux";
// import { setLoading } from "../../Redux/slice/appConfigSlice";
import { getUserProfile } from "../../Redux/slice/PostsSlice";

function CreatePost() {
  const [postImg, setPostImg] = useState("");
  const [caption, setCaption] = useState("");
  const dispatch = useDispatch();
  const myProfile=useSelector(state => state.appConfigReducer.myProfile);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      if (fileReader.readyState === fileReader.DONE) {
        setPostImg(fileReader.result);
        console.log("img data", fileReader.result);
      }
    };
  };

  const handlePostSubmit = async () => {
    try {
      // dispatch(setLoading(true));
      const result = await axiosClient.post("/post", {
        caption,
        postImg,
      });
      console.log('result',result);
      dispatch(getUserProfile({
        userId:myProfile._id
      }));
    } catch (error) {
      console.log('what is the error',error)
    } finally {
      // dispatch(setLoading(false));
      setCaption('');
      setPostImg('')
    }
  };

  return (
    <div className="Createpost">
      <div className="left_part_create_post">
        <Avatar src={myProfile?.avatar?.url}/>
      </div>

      <div className="right_part">
        <input
          value={caption}
          type="text"
          className="captionInput"
          placeholder="what is in ur mind"
          onChange={(e) =>setCaption(e.target.value)}
        />
        {postImg && (
          <div className="img_container">
            <img className="post_img" src={postImg} alt="post-img" />
          </div>
        )}
        <hr />

        <div className="bottom_part">
          <div className="input_post_img">
            <label htmlFor="inputImg" className="labelImg">
              <BsCardImage />
            </label>
            <input
              className="inputImg"
              id="inputImg"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
          <button className="post_button" onClick={handlePostSubmit}>
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
