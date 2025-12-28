import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  let msg=()=>{
    toast.success("Welcome to NinethWeb App!");
  }
  return (
    <div className="App">
      <ToastContainer />
      <h1>Welcome to NinethWeb App</h1>
      <button onClick={msg}>Click Me</button>
    </div>
  );
}

export default App;
