function add_user(){
    var player1_name=document.getElementById("player_1_name").value;
    var player2_name=document.getElementById("player_2_name").value;

        localStorage.setItem("player1_name", player1_name);
        localStorage.setItem("player2_name", player2_name);
        window.location="game_page.html";
}