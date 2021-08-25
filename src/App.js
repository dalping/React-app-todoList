import './App.css';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import CreateToDo from './components/CreateToDo';
import Wording from './components/Wording';
import { useState } from 'react';
import "antd/dist/antd.css";

function App() {

  const [isLoad, setIsLoad] = useState(false);

  function reLoad(){//ToDoList reload?
    setIsLoad(!isLoad);
  }

  return (
    <div className="App">
      <Header/>
      <Wording/>
      <CreateToDo reload={reLoad}/>
      <ToDoList reload={isLoad}/>
    </div>
  );
}

export default App;
