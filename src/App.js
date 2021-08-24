import './App.css';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import CreateToDo from './components/CreateToDo';
import Wording from './components/Wording';
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <Header/>
      <Wording/>
      <CreateToDo/>
      <ToDoList/>
    </div>
  );
}

export default App;
