import { Button,Input } from 'antd';
import { useState,useRef } from 'react';

export default function CreateToDo({reload}){

    const [isLoading, setIsLoading] = useState(false);
    const [isTxt,setIsTxt] = useState('');

    function handleChange(e){
        setIsTxt(e.target.value);
    }

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
                    setIsTxt('');
                    setIsLoading(false); //중복 클릭 방지
                    reload(); //ToDoList컴포넌트 다시 불러오기
                    }
                });
            }
        }

    const doRef = useRef(null);
    
    return(
        <form style={{width:'70%'}}  onSubmit={onSubmit}>
            <div className="create-to-do">
                <Input className="txt" onChange={handleChange} value={isTxt} style ={{width:'80%'}} placeholder="할 일을 입력하세요." ref={doRef} type="text"></Input>
                <Button type="primary" onClick={onSubmit}>등록</Button>
            </div>
        </form>
    );
}