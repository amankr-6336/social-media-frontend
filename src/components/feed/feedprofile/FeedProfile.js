import React from 'react'
import './Feedprofile.scss'
import {CiFacebook} from 'react-icons/ci'
import {AiOutlineInstagram} from 'react-icons/ai'
import {CiLinkedin} from 'react-icons/ci'

function FeedProfile({ myProfile }) {
    console.log(myProfile?.avatar?.url)
    return (
        <div className="feedprofile">
            <div className="innerfeedprofile">
                <div className="topfeedp">
                    <span className='blankspace'></span>
                    <div className="innertopfeedp">
                        <img src={myProfile?.avatar?.url} alt="" />
                    </div>

                </div>
                <div className="bottomfeedp">
                    <div className="name_bio">
                        <h2>{myProfile?.name}</h2>
                        <p className='fpb'>{myProfile?.bio}</p>
                    </div>

                    <div className="infosectionp">
                        <div className="folwer">
                            <h2>{myProfile?.followers?.length}</h2>
                            <p>Followers</p>
                        </div>
                        <div className="folwing">
                            <h2>{myProfile?.followings?.length}</h2>
                            <p>Followings</p>
                        </div>
                        <div className="posts">
                            <h2>{myProfile?.posts?.length}</h2>
                            <p>Posts</p>
                        </div>
                    </div>


                    <div className="buttonprofile">
                        <button>View Profile</button>
                    </div>

                    <div className="socialinks">
                        <div className="facebook">
                            <CiFacebook className='socialicon'/>
                        </div>
                        <div className="insta">
                            <AiOutlineInstagram className='socialicon'/>
                        </div>
                        <div className="Linkedin">
                           <CiLinkedin className='socialicon'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeedProfile