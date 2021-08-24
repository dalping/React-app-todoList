import dummy from "../db/data.json";

export default function Wording(){

    const N = Math.floor(Math.random() * 10 + 1);
    let word = "평생 살 것처럼 꿈을 꾸어라. 그리고 내일 죽을 것처럼 오늘을 살아라.";

    for(let i=0; i < 10 ; i++ ){
        if(dummy.wording[i].id == N){
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