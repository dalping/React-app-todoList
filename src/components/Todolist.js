import { Checkbox,Button } from 'antd';

export default function ToDoList(){

    function onChange(){
        console.log("hello");
    }

    return(
        <table>
            <tbody>
                <tr>
                    <td><Checkbox></Checkbox></td>
                    <td>산책 하기</td>
                    <td><Button ghost>삭제</Button></td>
                </tr>
                <tr>
                    <td><Checkbox onChange={onChange}></Checkbox></td>
                    <td>알고리즘 풀기</td>
                    <td><Button ghost>삭제</Button></td>

                </tr>
                <tr>
                    <td><Checkbox onChange={onChange}></Checkbox></td>
                    <td>리액트 강좌 듣기</td>
                    <td><Button ghost>삭제</Button></td>
                </tr>
            </tbody>
    </table>
    );
}