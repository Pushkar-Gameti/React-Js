// Global CSS file import
import './App.css';

// useState hook import (state manage karne ke liye)
import { useState } from 'react';

// CSS Module import (button ke liye scoped CSS)
import btnModule from './Button.module.css';

// FAQ component import
import Faqs from './Faqs';

function App() {

  // Simple show / hide text ke liye state
  let [status, setStatus] = useState(false);

  // Password show / hide ke liye state
  let [pstatus, setPstatus] = useState(false);

  // Mobile menu open / close ke liye state
  let [menuStatus, setMenuStatus] = useState(false);

  // Modal popup open / close ke liye state
  let [modalStatus, setModalStatus] = useState(false);

  return (
    <div className="App">

      {/* FAQ section (separate component) */}
      <Faqs />

      {/* ================= MODAL POPUP ================= */}

      {/* Enquire button – modal open karega */}
      <button className='en' onClick={() => setModalStatus(true)}>
        Enquire Now
      </button>

      {/* 
        Modal overlay
        click karne par modal close ho jayega
      */}
      <div
        onClick={() => setModalStatus(false)}
        className={`modalOverLay ${modalStatus ? 'modelShow' : ''}`}
      ></div>

      {/* 
        Modal box
        modalStatus true hone par visible hota hai
      */}
      <div className={`ModalDiv ${modalStatus ? 'showModalDiv' : ''}`}>
        <h3>
          My Website
          {/* Cross icon – modal close */}
          <span onClick={() => setModalStatus(false)}>&times;</span>
        </h3>
      </div>

      {/* ================= MOBILE MENU ================= */}

      {/* Menu icon button */}
      <button className='micon' onClick={() => setMenuStatus(!menuStatus)}>
        {/* Open hone par cross, warna hamburger icon */}
        {menuStatus ? <span>&times;</span> : <span>&#9776;</span>}
      </button>

      {/* Side menu */}
      <div className={`menu ${menuStatus ? 'activeMenu' : ''}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Services</li>
        </ul>
      </div>

      {/* ================= PASSWORD SHOW / HIDE ================= */}

      {/* Input type state ke hisab se change hota hai */}
      <input type={pstatus ? 'text' : 'password'} />

      {/* Password toggle button */}
      <button onClick={() => setPstatus(!pstatus)}>
        {pstatus ? 'Hide' : 'Show'}
      </button>

      <br />

      {/* ================= CSS MODULE BUTTONS ================= */}

      {/* CSS module se styling */}
      <button className={btnModule.error}>error</button>
      <button className={btnModule.warning}>warning</button>

      {/* ================= CONDITIONAL RENDERING ================= */}

      {/* Paragraph show / hide button */}
      <button onClick={() => setStatus(!status)}>
        {status ? 'Hide' : 'Show'}
      </button>

      {/* Agar status true hai tab hi paragraph dikhega */}
      {
        status
          ? <p className='para'>This is third web</p>
          : ''
      }

    </div>
  );
}

export default App;
