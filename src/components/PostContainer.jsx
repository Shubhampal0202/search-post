import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import Post from './Post'
import Search from './Search'
function PostContainer() {
    const [posts, setPosts] = useState("")
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                setPosts(res.data)

            }).catch((error) => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
    }, [])
    const getDataFromSearchText = (updatedPosts) => {
        setPosts(updatedPosts);
    }
    return (
        <div>
            <h2>POSTS</h2>
            <Search posts={posts} getDataFromSearchText={getDataFromSearchText} />
            {
                loading ? <div><strong>loading...</strong></div> :
                    posts && posts.map((post) => {
                        return <Post post={post} />
                    })
            }
        </div>
    )
}

export default PostContainer