import React from 'react'
import '../App.css'
function Post({ post }) {
    return (
        <div className='post'>
            <div>{post.title}</div>
        </div>
    )
}

export default Post