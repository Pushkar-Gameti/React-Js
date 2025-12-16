import './App.css';
import { useState } from 'react';
import btnModule from './Button.module.css';
import Faqs from './Faqs';
// import { questions } from './Data/questions.jsx';

function App() {
  let [status, setStatus] = useState(false);
  let [pstatus, setPstatus] = useState(false);
  let [menuStatus, setMenuStatus] = useState(false);
  let [modalStatus, setModalStatus] = useState(false);
  // let [showAns, setShowAns] = useState(questions[0].id);

  return (
    <div className="App">
      <Faqs />
      {/* <div>
        <h1>Freauently Asked Questions (FAQs)</h1>
        <div className='faqouter'>
          {questions.map((faqItem, i) => {
            return (
              <div className='faqItems' key={faqItem.id}>
                <h2 onClick={() => setShowAns(faqItem.id)}>{faqItem.question}</h2>
                <p className={showAns===faqItem.id?'activeAns':''}>{faqItem.answer}</p>
              </div>
            )
          })}
        </div>
      </div> */}









      <button className='en' onClick={() => setModalStatus(true)}>Enquire Now</button>
      <div onClick={() => setModalStatus(false)} className={`modalOverLay ${modalStatus ? 'modelShow' : ''}`}></div>
      <div className={`ModalDiv ${modalStatus ? 'showModalDiv' : ''}`}>
        <h3>My Website <span onClick={() => setModalStatus(false)} >&times;</span> </h3>
      </div>


      <button className='micon' onClick={() => setMenuStatus(!menuStatus)}>
        {menuStatus ? <span>&times;</span> : <span>&#9776;</span>}
      </button>
      <div className={`menu ${menuStatus ? 'activeMenu' : ''}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Services</li>
        </ul>
      </div>
      <input type={pstatus ? 'text' : 'password'} />
      <button onClick={() => setPstatus(!pstatus)}>
        {pstatus ? 'Hide' : 'Show'}</button>
      <br></br>

      <button className={btnModule.error}>error</button>
      <button className={btnModule.warning}>warning</button>
      <button onClick={() => setStatus(!status)}>
        {status ? 'Hide' : 'Show'}
      </button>
      {
        (status) ?
          <p className='para'>This is third web</p> :
          ''
      }
    </div>
  );
}

export default App;
