import './App.css';

function App() {
  return (
    <>
      <div className='passwordBox'>
        <h1>Password Generator</h1>

        <div className='passwordBoxin'>
          <input type="text" readOnly placeholder='choice password type' />
          <button>Copy</button>
        </div>

        <div className='passLength'>
          <label>Password Length</label>
          <input type="number" min="4" max="20" defaultValue="8" />
        </div>
        
      </div>
    </>
  );
}

export default App;
