import dummy from "../db/data.json";

export default function Wording(){

    const N = Math.floor(Math.random() * 10 + 1);
    let word = "";

    for(let i=0; i < 10 ; i++ ){
        if(dummy.wording[i].id === N){
            word = dummy.wording[i].sentence;
            break;
        }
    }

    return(
        <div>
            {word}
        </div>
    );
}