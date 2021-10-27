player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name + ":";
document.getElementById("player2_name").innerHTML=player2_name + ":";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question turn-"+player1_name;
document.getElementById("player_answer").innerHTML="Answer turn-"+player2_name;

function send(){

    get_word=document.getElementById("word").value;
word=get_word.toLowerCase();

charat1=word.charAt(1);

length_2=Math.floor(word.length/2);
charat2=word.charAt(length_2);

length_1=word.length-1;
charat3=word.charAt(length_1);

remove_charat1=word.replace(charat1, "_");
remove_charat2=remove_charat1.replace(charat2, "_");
remove_charat3=remove_charat2.replace(charat3, "_");

var question_word="<h4 id='word_display'>Q."+remove_charat3+"</h4>";
var input_box="<br><br> Answer:<input type='text' id='input_check_box'>";
var check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
var row=question_word + input_box + check_button;

document.getElementById("output").innerHTML=row;
document.getElementById("word").value="";
}

question_turn="player1";
answer_turn="player2";

function check(){
    get_answer=document.getElementById("input_check_box").value;
answer= get_answer.toLowerCase();
console.log("User Answer" + answer);

if(answer==word){
    if(answer_turn=="player1"){
        console.log("player1_score");
player1_score=player1_score+1;
document.getElementById("player1_score").innerHTML=player1_score;
    }
    else{
        player2_score=player2_score+1;
document.getElementById("player2_score").innerHTML=player2_score;
    }
}

if(question_turn=="player1"){
    question_turn="player2";
    document.getElementById("player_question").innerHTML="Question turn-"+player2_name;
}
else{
    question_turn="player1";
    document.getElementById("player_question").innerHTML="Question turn-"+player1_name;
}

if(answer_turn=="player1"){
    answer_turn="player2";
    document.getElementById("player_answer").innerHTML="Answer turn-"+player2_name;
}

else{
    answer_turn="player1";
    document.getElementById("player_answer").innerHTML="Answer turn-"+player1_name;
}
document.getElementById("output").innerHTML="";
}