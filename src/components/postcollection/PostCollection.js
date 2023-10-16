import React from 'react'
import './PostCollection.scss'

function PostCollection({ userProfile }) {
    console.log(userProfile?.posts)
    return (
        <div className="gallerycard">
            {userProfile?.posts?.map((item, index) => {
                return (
                    <div className="pics" key={index}  >
                        <img src={item.image.url} style={{ width: '100%' }} alt="" />
                    </div>
                )

            })

            }
        </div>
    )
}

export default PostCollection