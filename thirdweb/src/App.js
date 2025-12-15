import './App.css';
import { useState } from 'react';

function App() {
  let [status, setStatus] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setStatus(!status)}>
        {status ? 'Hide' : 'Show'}
      </button>
      {
        (status)?
        <p className='para'>This is third web</p>:
        ''
      }
    </div>
  );
}

export default App;
