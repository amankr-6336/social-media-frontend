import React from 'react';
import dummyImg from '../../assets/dummy.png'
import "./Avatar.scss"

function Avatar({src}) {
  return (
    <div className='Avatar'>
       <img src={src ? src : dummyImg} alt="user img" />
    </div>
  )
}

export default Avatar
