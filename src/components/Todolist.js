import { Checkbox } from 'antd';

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
                </tr>
                <tr>
                    <td><Checkbox onChange={onChange}></Checkbox></td>
                    <td>알고리즘 풀기</td>
                </tr>
                <tr>
                    <td><input type="checkbox"></input></td>
                    <td>알고리즘 풀기</td>
                </tr>
            </tbody>
    </table>
    );
}