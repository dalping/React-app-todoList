import { Button,Input } from 'antd';

export default function CreateToDo(){
    return(
        <div className="create-to-do">
            <Input style={{width=50}}placeholder="할 일을 입력하세요." type="text"></Input>
            <Button type="primary">등록</Button>
        </div>
    );
}