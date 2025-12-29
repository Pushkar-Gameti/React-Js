import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      console.log(toast.info("toast is active"))
      <ToastContainer/>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </div>
  );
}
export default App;