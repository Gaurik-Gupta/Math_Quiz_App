player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answering Turn - " + player2_name;

function send() {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    product = num1 * num2;
    question_num = "<h4 id='word_display'> Q. " + num1 + "X" + num2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_num + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}
question_turn = "player1";
answer_turn = "player2"
function check() {
    get_answer = document.getElementById("input_check_box").value;
    if (get_answer == product) {
        if (answer_turn == "player1") {
            player1_score += 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else {
            player2_score += 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
        if (question_turn == "player1") {
            question_turn = "player2";
            document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
        }
        else {
            question_turn = "player1";
            document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
        }
        if (answer_turn == "player1") {
            answer_turn = "player2";
            document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
        }
        else {
            answer_turn = "player1";
            document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;
        }
    document.getElementById("output").innerHTML = "";
}
