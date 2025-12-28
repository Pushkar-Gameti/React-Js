import './App.css';
import { useState } from 'react';
import { SC, UC, LC, NC } from './Data/PassChar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import icon from './Data/favicon.svg';

function App() {
  let [uppercase, setUppercase] = useState(false);
  let [lowercase, setLowercase] = useState(false);
  let [number, setNumber] = useState(false);
  let [symbol, setSymbol] = useState(false);
  let [passwordlen, setPasswordLen] = useState(8);
  let [fPass, setFpass] = useState("");

  let createPassword = () => {
    let finalPass = "";
    let charSet = "";
    if (uppercase || lowercase || number || symbol) {
      if (uppercase) charSet += UC;
      if (lowercase) charSet += LC;
      if (number) charSet += NC;
      if (symbol) charSet += SC;
      for (let i = 0; i < passwordlen; i++) {
        finalPass += charSet.charAt(Math.floor(Math.random() * charSet.length));
      }
      setFpass(finalPass);
      toast.success("Generated Password Successfully");
    } else {
      toast.error("Select at least one option");
    }
  }

  let copyPass = () => {
    navigator.clipboard.writeText(fPass);
    toast.success("Password Copied to Clipboard");
  }

  return (
    <>
      <ToastContainer />
      <div className='passwordBox'>
        <div className='pg'>
          <img src={icon} alt="icon" />
          <h1>Password Generator</h1>
        </div>

        <div className='passwordBoxin'>
          <input className='gpbox' type="text" value={fPass} readOnly placeholder='Choose password type' />
          <button className='passl' onClick={copyPass}>Copy</button>
        </div>

        <div className='passLength'>
          <label>Password Length</label>
          <input className='passInput' type="number" min="4" max="20" value={passwordlen} onChange={(e) => setPasswordLen(e.target.value)} />
        </div>

        <div className='passLength'>
          <label>Include uppercase letters</label>
          <input type="checkbox" checked={uppercase} onChange={() => setUppercase(!uppercase)} />
        </div>

        <div className='passLength'>
          <label>Include lowercase letters</label>
          <input type="checkbox" checked={lowercase} onChange={() => setLowercase(!lowercase)} />
        </div>

        <div className='passLength'>
          <label>Include numbers</label>
          <input type="checkbox" checked={number} onChange={() => setNumber(!number)} />
        </div>

        <div className='passLength'>
          <label>Include symbols </label>
          <input type="checkbox" checked={symbol} onChange={() => setSymbol(!symbol)} />
        </div>

        <button className='btn' onClick={createPassword}>Generate Password</button>


      </div>
    </>
  );
}

export default App;
