import './App.css';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import CreateToDo from './components/CreateToDo';
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <Header/>
      보람찬 하루를 만들어 보아요:)!
      <CreateToDo/>
      <ToDoList/>
    </div>
  );
}

export default App;
