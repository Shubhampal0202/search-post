import React from 'react'
import { useState } from 'react'

function Search({ posts, getDataFromSearchText }) {
    const [searchText, setSearchText] = useState("");
    const handleSearch = () => {
        const newArr = posts.filter((post) => {
            const title = post.title.trim();
            const titleInLowerCase = title.toLowerCase();
            const flag = titleInLowerCase.includes(searchText)
            if (flag) {
                return post
            }
        })
        getDataFromSearchText(newArr);
        setSearchText("")
    }
    return (
        <div>
            <input type="text" value={searchText} onChange={(e) => { setSearchText(e.target.value) }}
                className='search' placeholder='Enter Text'/>
            <button onClick={handleSearch} className='btn'>Search</button>
        </div>
    )
}

export default Search