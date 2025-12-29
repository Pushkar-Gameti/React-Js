import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  let calltoast=()=>{
    console.log(toast.info("toast is active"))
  }
  return (
    <div className="App">
      <ToastContainer/>
      <h1 className="text-3xl font-bold underline" onClick={calltoast}>
      Hello world!
    </h1>
    </div>
  );
}
export default App;