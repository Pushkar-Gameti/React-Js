import React from 'react'
// import Header from '../common/Header'
import { useLocation } from 'react-router-dom'
import { blogs } from '../Data/Blogs';

export default function BlogDetails() {
    let uselocation = useLocation();
    let currentId = parseInt(uselocation.pathname.split('/')[2]);
    let currentData = blogs.filter((v)=>v.id===currentId)[0];

  return (
    <div>
        {/* <Header /> */}
        <h1>{currentData.title}</h1>
        <p>{currentData.body}{currentData.body}{currentData.body}{currentData.body}{currentData.body}{currentData.body}{currentData.body}{currentData.body}{currentData.body}{currentData.body}{currentData.body}{currentData.body}</p>
    </div>
  )
}
