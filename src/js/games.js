function populateGames(){
    var gameDiv = document.getElementById("gameTemplate");
    for(var i = 0; i < 4; i++){
        var clone = gameDiv.cloneNode(true);
        document.getElementById("games").appendChild(clone);
    }
}