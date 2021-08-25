import { Checkbox,Button,Modal } from 'antd';
import { useState } from 'react';

export default function Do({todo,mykey}){

    const [isDone, setIsDone] = useState(todo.isDone);
    const [isDel, setIsDel] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    function del(){
        fetch(`https://react-app-todolist-17894-default-rtdb.firebaseio.com/todolist/todo/${mykey}.json`,{
            method : 'DELETE'
        }).then(res =>{
            if(res.ok){
                setIsDel(true); //컴포넌트 새로고침
            }
        })
    }
    
    const showModal = () => {
        setIsModalVisible(true);
      };

    const handleOk = () => {
        setIsModalVisible(false);
        del();
      };

    const handleCancel = () => {
        setIsModalVisible(false);
      };

    function toggleDone(){ //체크박스
        fetch(`https://react-app-todolist-17894-default-rtdb.firebaseio.com/todolist/todo/${mykey}.json`,{
            method : 'PUT',
            headers : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify({
                content : todo.content,
                isDone : !isDone,
            }),
        }).then(res=>{
            if(res.ok){
                setIsDone(!isDone);
            }
        });
    }

    if(isDel === true){ //컴포넌트 삭제
        return null;
    }

    return(
        <tr className={todo.isDone? 'off':''}>
            <td><Checkbox checked={isDone} onChange={toggleDone}></Checkbox></td>
            <td className={isDone? 'checked' : ''}>{todo.content}</td>
            <td>
                <Button ghost onClick={showModal}>삭제</Button>
                <Modal title="ToDo 삭제" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <p>삭제하시겠습니까</p>
                </Modal>
            </td>
        </tr>    
    );
}