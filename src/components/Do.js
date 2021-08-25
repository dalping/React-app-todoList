import { Checkbox,Button } from 'antd';
import { useState } from 'react';

export default function Do({todo,mykey}){

    const [isDone, setIsDone] = useState(todo.isDone);

    function del(){
        if(window.confirm('삭제 하시겠습니다?')){
            fetch(`https://react-app-todolist-17894-default-rtdb.firebaseio.com/todolist/todo/${mykey}.json`,{
                method : 'DELETE'
            }).then(res =>{
                if(res.ok){
                    console.log("삭제완료!");
                }
            })
        }
    }
    
    function toggleDone(){
        setIsDone(!isDone);
    }

    return(
        <tr className={todo.isDone? 'off':''}>
            <td><Checkbox checked={isDone} onChange={toggleDone}></Checkbox></td>
            <td className="content">{todo.content}</td>
            <td><Button ghost onClick={del}>삭제</Button></td>
        </tr>    
    );
}