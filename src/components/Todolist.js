import Do from "./Do";
import useFetch from "../hooks/useFetch";

export default function ToDoList(){

    const todolist = useFetch("https://react-app-todolist-17894-default-rtdb.firebaseio.com/todolist.json");

    if(todolist.length === 0){ // 로딩중..
        return <span>Loading...</span>
    }

    return(
        <table>
            <tbody>
                {todolist.todo.map(todo=>(
                    <Do todo={todo} key={todo.id}></Do>
                ))}
            </tbody>
        </table>
    );
}