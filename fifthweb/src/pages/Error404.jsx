import React from 'react'
import { Link } from 'react-router-dom'
import errorimg from './ijn.webp'
import './Error404.css'

export default function Error404() {
  return (
    <div>
        <img src={errorimg} alt="404 Error" />
        <Link to="/">
        <div className='return'></div>
        </Link>
    </div>
  )
}
