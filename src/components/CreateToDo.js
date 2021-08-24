import { Button,Input } from 'antd';

export default function CreateToDo(){
    return(
        <form style={{width:'70%'}} >
            <div className="create-to-do">
                <Input style ={{width:'80%'}} placeholder="할 일을 입력하세요." type="text"></Input>
                <Button type="primary">등록</Button>
            </div>
        </form>
    );
}