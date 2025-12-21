import './App.css';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { tabs } from './Data/tabs';

function App() {
  let [todolist, settodolist] = useState([]);
  let [activeTabs, setactiveTabs] = useState(0);
  let [activeContent, setactiveContent] = useState(tabs[0]);
  let changeData = (index) => {
    setactiveTabs(index);
    setactiveContent(tabs[index]);
  }
  let showMsg = () => {
    toast.info("Your Name is already exists");
  }
  let saveToDoList = (e) => {
    e.preventDefault();

    let toname = e.target.toname.value.trim();
    let formattedName = toTitleCase(toname);

    let isExists = todolist.some(
      (item) => item.toLowerCase() === formattedName.toLowerCase()
    );

    if (!isExists) {
      settodolist([...todolist, formattedName]);
    } else {
      showMsg();
    }

    e.target.reset();
  };

  let list = todolist.map((value, i) => {
    return (
      <ToDoListItem itemName={value} key={i} iNum={i}
        todolist={todolist}
        settodolist={settodolist}
      />
    )
  })
  return (
    <div className="App">

      <div className='tabsOuter'>
        <h1>Law Prep Vision Mission and Values</h1>
        <ul>
          {tabs.map((tabsItems, index) => {
            return (
              <li>
                <button
                  onClick={() => changeData(index)}
                  className={activeTabs === index ? 'activeButton' : null}
                >
                  {tabsItems.title}
                </button>
              </li>
            )
          })}
        </ul>
        {activeContent !== undefined ? <p>{activeContent.description}</p> : null}
      </div>

      <ToastContainer />
      <h1>ToDo List</h1>
      <form onSubmit={saveToDoList}>
        <input type="text" name='toname' placeholder="Enter Your Full Name" />
        <button>Save</button>
      </form>

      <div className='outerDiv'>
        <ul>
          {list}

        </ul>
      </div>


    </div>
  );
}

function ToDoListItem({ itemName, iNum, todolist, settodolist }) {
  let [status, setStatus] = useState(false);
  let deleteRow = () => {
    let newToDoList = todolist.filter((value, index) => {
      return index !== iNum;
    });
    settodolist(newToDoList);
  }
  let checkStatus = () => {
    setStatus(!status);
  }
  return (
    <li className={(status ? 'completed' : '')} onClick={checkStatus}>{iNum + 1}. {itemName} <span onClick={deleteRow}>&times;</span></li>
  )
}

function toTitleCase(str) {
  return str
    .toLowerCase()
    .trim()
    .split(" ")
    .filter(word => word !== "")
    .map(
      word => word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(" ");
}

export default App;
