import Do from "./Do";
import useFetch from "../hooks/useFetch";

export default function ToDoList({reload}){

    const url = "https://react-app-todolist-17894-default-rtdb.firebaseio.com/todolist/todo.json";
    let todolist = useFetch(url,reload);

    if(todolist.length === 0){ // 로딩중..
        return <span>Loading...</span>
    }
    
    return(
        <table>
            <tbody>
                {Object.keys(todolist).map(key=>(
                    <Do todo={todolist[key]} key={key} mykey={key}></Do>
                ))}
            </tbody>
        </table>
    );
}