import { Checkbox,Button } from 'antd';
import { useState } from 'react';
import dummy from "../db/data.json"

export default function Do({todo}){

    const [isDone, setIsDone] = useState(todo.isDone);

    
    function toggleDone(){
        setIsDone(!isDone);
    }

    return(
        <tr key={todo.id} className={todo.isDone? 'off':''}>
            <td><Checkbox checked={isDone} onChange={toggleDone}></Checkbox></td>
            <td className="content">{todo.content}</td>
            <td><Button ghost>삭제</Button></td>
        </tr>    
    );
}