var p_1 = document.getElementById("player_name_1").value;
var p_2 = document.getElementById("player_name_2").value;

function login()
{
    p_1 = document.getElementById("player_name_1").value;
    p_2 = document.getElementById("player_name_2").value;

    localStorage.setItem("player 1", p_1);
    localStorage.setItem("player2", p_2);

    window.location = "quiz_2.html";

}