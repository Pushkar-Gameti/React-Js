import React from 'react'
import './Header.css'
import googleLogo from './images/google_logo.svg';

export default function Header() {
  return (
    <div className='header' > 
    <img src={googleLogo} alt='googlelogo'/>
    <h4>Header </h4>
    </div>
  )
}