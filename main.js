var score=0;


function decrease(){
    score=score-5;
    document.getElementById("score1").textContent=score;

}


function increase(){
    score=score+5;
    document.getElementById("score1").textContent=score;
 
}