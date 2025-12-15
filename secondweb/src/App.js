import { useState } from 'react';
import './App.css';
import Header from './Header';

function App() {
  let displayData=()=>{
    alert("Hello from Second Web");
  }
  let addData=(a,b)=>{
    console.log(a+b);
  }
  // let n=10;
  let increaseCount=()=>{
    setCount(count+1);
  }
  let [count,setCount]=useState(1);
  let [pshow,setPshow]=useState(false);
  let temp="";
  if(pshow){
    temp=<>
    <button className='bg-[aqua] p-1 ml-5' onClick={()=>setPshow(!pshow)}>Hide</button>
    <p>This is a paragraph</p>
    </>;
  }else{
    temp=<button className='bg-[aqua] p-1 ml-5' onClick={()=>setPshow(!pshow)}>Show</button>;
  }
  let msg="";
  if(count>9){
    msg="You are awesome";
  }if(count>20){
    msg="You are great";
  }

  return (
    <div className="App">
      <Header >

      </Header>
      <button onClick={displayData} className='bg-[blue] p-[10px] text-white'>Click Me</button>
      <button onClick={()=>addData(10,20)} className='bg-[red] p-[10px] text-white ml-5'>Save Me</button>
      <h1>{count}</h1>
      <button onClick={increaseCount} className='bg-[green] p-[10px] text-white'>Increase</button>
      {temp}
      <h1>{msg}</h1>
    </div>
  );
}

export default App;