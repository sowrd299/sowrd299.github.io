// constants
var gameHtml = " \
<script src='./games/{0}/portfolio.js'></script> \
<div id='gameTemplate' class='game'> \
    <div class='sampleHand'> \
        <img id='cardLeft' class='card' src='./games/{0}/Card.png' height='262' width='187'/> \
        <img id='cardRight' class='card' src='./games/{0}/Card.png' height='262' width='187'/> \
        <img id='cardCenter' class='card' src='./games/{0}/Card.png' height='262' width='187'/> \
    </div> \
    <div class='about'> \
    <span id='title{0}' class='title'>{0}</span> \
        <p id='blip{0}'>If I had to call a single game my 'magnum opus', it would have to be Vitium. While it is not my best game, it is the one I have put the most time in, and the one I have believed in through the most setbacks. It is an attempt at being a multi-player politcal card game, that allows players to wheel and deal and betray eachother, and that asks the player to embrase the phatasy of being an imoral, selfish crimelord; Vampire: the Eternal struggle for the modern age. It always has been very ambisious, but I have longed believed there is something special it can be that nothing else today is. It has had problems being simple enough to being reasonable to learn. \
            </p> \
        <a id='rulebook' class='download' href='./games/{0}/Rulebook.pdf'>Download the Rulebook</a> \
        <a id='pnp' class='download' href='./games/{0}/Cards.pdf'>Download the Print-and-Play</a> \
    </div> \
</div> \
";

// objects representing all the games
// this is where the data needs to be inserted
var games = [
{
    name: "Vitium",
    title: "Vitium: a Game of Houses and their Vices",
    blip: "Reapers is an attempt to incorpate a handleful of mechanics from modern CCG's that I particularly like, such as persistent resources and deckbuilding centered around specific characters, and modern modern fantasy theme. The game is a medium-heavy strategy game, that prioritizes being strategic, and thematically compelling. The biggest problem it it is currently facing is the power of the Malakhim; while tthese cards have a roll to play in progressing the game through mid, early and late game, too often the player who draws more Malakhim also wins. I hope to find a satisfactory system for playing Malakhim that is more consistent than drawing them from the deck. The game also has a length issue; it tends to overstay it's welcome somewhat, but this seems mostly to be a matter of finding the sweet spot for the win condition."
},
{
    name: "Reapers",
    title: "Reapers",
    blip: "Reapers is an attempt to incorpate a handleful of mechanics from modern CCG's that I particularly like, such as persistent resources and deckbuilding centered around specific characters, and modern modern fantasy theme. The game is a medium-heavy strategy game, that prioritizes being strategic, and thematically compelling. The biggest problem it it is currently facing is the power of the Malakhim; while tthese cards have a roll to play in progressing the game through mid, early and late game, too often the player who draws more Malakhim also wins. I hope to find a satisfactory system for playing Malakhim that is more consistent than drawing them from the deck. The game also has a length issue; it tends to overstay it's welcome somewhat, but this seems mostly to be a matter of finding the sweet spot for the win condition."
}
];

// add in title and blip for the JS file
function loadGameText(gameName, game){
    document.getElementById("title"+gameName).textContent = game.title;
    document.getElementById("blip"+gameName).textContent = game.blip;
}

// the function to be called in the body
function populateGames(){
    var gamesDive = document.getElementById("games");
    for(var i = 0; i < gameNames.length; i++){
        // add in the title where needed
        var html = gameHtml.replace(/\{0\}/g, games[i].name);
        // add the game into the html
        gamesDive.insertAdjacentHTML("beforeend", html);
        // load the game's text
        loadGameText(games[i].name, games[i]);
    }
}