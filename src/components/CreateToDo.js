import { Button,Input } from 'antd';
import { useState,useRef } from 'react';

export default function CreateToDo(){

    const [isLoading, setIsLoading] = useState(false);

    function onSubmit(e){ //새로고침 방지
        e.preventDefault();

        if(!isLoading){
            setIsLoading(true);
            fetch("https://react-app-todolist-17894-default-rtdb.firebaseio.com/todolist/todo.json",{
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json',
                },
                body : JSON.stringify({
                    content:doRef.current.state.value,
                    isDone:false
                }),
            }).then(res=>{
                if(res.ok){
                    setIsLoading(false);

                    }
                });
            }
        }

    const doRef = useRef(null);
    
    return(
        <form style={{width:'70%'}} >
            <div className="create-to-do">
                <Input style ={{width:'80%'}} placeholder="할 일을 입력하세요." ref={doRef} type="text"></Input>
                <Button type="primary" onClick={onSubmit}>등록</Button>
            </div>
        </form>
    );
}