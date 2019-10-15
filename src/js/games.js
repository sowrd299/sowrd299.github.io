// REQUIRES COLLAPSIBLE

// constants
var gameHtml = " \
<div id='gameTemplate{0}' class='game'> \
    <div id='hand{0}' class='sampleHand'> \
        <img id='cardLeft' class='card' src='./games/{0}/CardL.png' height='262' width='187'/> \
        <img id='cardRight' class='card' src='./games/{0}/CardR.png' height='262' width='187'/> \
        <img id='cardCenter' class='card' src='./games/{0}/CardC.png' height='262' width='187'/> \
    </div> \
    <div class='about'> \
        <span id='title{0}' class='title'>{0}</span> \
        <button class='game_collapse' onclick='toggle_collapse_id(\"text{0}\")'>\
            V</button>\
        <div id='text{0}'>\
            <p id='blip{0}'>If I had to call a single game my 'magnum opus', it would have to be Vitium. While it is not my best game, it is the one I have put the most time in, and the one I have believed in through the most setbacks. It is an attempt at being a multi-player politcal card game, that allows players to wheel and deal and betray eachother, and that asks the player to embrase the phatasy of being an imoral, selfish crimelord; Vampire: the Eternal struggle for the modern age. It always has been very ambisious, but I have longed believed there is something special it can be that nothing else today is. It has had problems being simple enough to being reasonable to learn. \
                </p> \
            <a id='rulebook' class='download' href='./games/{0}/Rulebook.pdf' download>Download the Rulebook</a> \
            <a id='pnp' class='download' href='./games/{0}/Cards.pdf'>Download the Print-and-Play</a> \
        </div> \
    </div> \
</div> \
";

var videoGameHtml = " \
<div id='gameTemplate' class='game'> \
    <div class='about'> \
    <span id='title{0}' class='title'>{0}</span> \
        <p id='blip{0}'>If I had to call a single game my 'magnum opus', it would have to be Vitium. While it is not my best game, it is the one I have put the most time in, and the one I have believed in through the most setbacks. It is an attempt at being a multi-player politcal card game, that allows players to wheel and deal and betray eachother, and that asks the player to embrase the phatasy of being an imoral, selfish crimelord; Vampire: the Eternal struggle for the modern age. It always has been very ambisious, but I have longed believed there is something special it can be that nothing else today is. It has had problems being simple enough to being reasonable to learn. \
            </p> \
        <a id='exe' class='download' href='./games/{0}/Game.exe' download>Download the Game</a> \
        <a id='link{0}' class='download'>The Game's Webpage</a> \
    </div> \
</div> \
";


// objects representing all the games
// this is where the data needs to be inserted
var games = [
{
    name: "Vitium",
    title: "Vitium: a Game of Houses and their Vices",
    blip: "Reapers is an attempt to incorpate a handleful of mechanics from modern CCG's that I particularly like, such as persistent resources and deckbuilding centered around specific characters, and modern modern fantasy theme. The game is a medium-heavy strategy game, that prioritizes being strategic, and thematically compelling. The biggest problem it it is currently facing is the power of the Malakhim; while tthese cards have a roll to play in progressing the game through mid, early and late game, too often the player who draws more Malakhim also wins. I hope to find a satisfactory system for playing Malakhim that is more consistent than drawing them from the deck. The game also has a length issue; it tends to overstay it's welcome somewhat, but this seems mostly to be a matter of finding the sweet spot for the win condition.",
    html: gameHtml
},
{
    name: "Reapers",
    title: "Reapers",
    blip: "Reapers is an attempt to incorpate a handleful of mechanics from modern CCG's that I particularly like, such as persistent resources and deckbuilding centered around specific characters, and modern modern fantasy theme. The game is a medium-heavy strategy game, that prioritizes being strategic, and thematically compelling. The biggest problem it it is currently facing is the power of the Malakhim; while tthese cards have a roll to play in progressing the game through mid, early and late game, too often the player who draws more Malakhim also wins. I hope to find a satisfactory system for playing Malakhim that is more consistent than drawing them from the deck. The game also has a length issue; it tends to overstay it's welcome somewhat, but this seems mostly to be a matter of finding the sweet spot for the win condition.", 
    html: gameHtml
},
{
    name: "ChildhoodFears",
    title: "Facing your Childhood Fears: the Card Game",
    blip: "Childhood Fears started as a joke. Back in freshman year, I designed an RPG called \"Light the Way\", about a young girl doing battle with the embodiments of her fears. The design of that game focused on blending horror game tricks and empowerment fantasy techniques to create the feeling of conquring one's fears, but the game project itself died due to production issues. Three years later, the joke of \"Light the Way: the Card Game\" came up, and this is my attempt to deliever on that pitch. It also experiments with giving the player's indipendent win conditions, meaning both players, one player, or no players might wind up winning. I like how this creates a path of discovery from players, as they go from bickering to delaying victory to help the other player win, but I am not convinced it is meaningfully distinct enough yet from conventional co-op. The game currently does not sell it's horror element as well as I want it to; I want to attempt versing the roll of the \"chapter\" cards from blessings with a strategic draw back to something to more unambigiously fear. The problem with that is that the game currently depends on players being willing to play them. I also worry about finding an system to scale difficulty level appropriately for replayability. Balancing the player against the enemy appropriately has already been a major issue in earlier versions of the game." ,
    html: gameHtml
},
{
    name: "Allocator",
    title: "Allocator",
    blip: "This game started with the marriage of two mechanics I wanted to try out: having cards server different roles based on where the player placed them, and having a maximum amount of card-power the player can have across the board. The rest of the game flowed from this basic premise; for example, once I realized that efficiency of cards on the board to point on the board would be a big part of the gameplay, I starting learning into the idea that card advantage is central to this games gamestate, such as with the boost mechanic. While it is perfectly serviceable, the Develop area has never been quite as impactful as I have wanted it to be, and allocating between attack and defense tends to be a bit on the straight-forward side.",
    html: gameHtml
},
{
    name: "Thirteen",
    title: "Thirteen Princes'",
    blip: "Thirteen was an earlier attempt at making a game that prioritized being simple and approachable, while not giving up high quality gameplay. I gave it a lighter, friendlier horror theme, though this did not come accross in gameplay as well as I wanted it to, nor did it really have to. The biggest problem it has it has had has been overly favoring bigger \"beings\" in combat and outright punishing players for having small beings in play. I have made a few revisions over the years, though those changed to much and lost what made the game worth developing in the fist place.",
    html: gameHtml
},
{
    name: "InstruMENTAL",
    title: "InstruMENTAL",
    blip: "I haven't designed nearly as many action games over my life as I would have liked, but I have done a few and I am proud of them. This one I think is particularly well done. It's a little game jam game built around the mechanic that's each player's projectiles are waves that grow as they disceminate and echo around the room. I am happy with how simple and exciting it is, and how much design space it offers.",
    html: videoGameHtml,
    link: "https://github.com/Bradsta/CrescendoConflict",
}
];

// returns if a url is an actual file
// from: https://stackoverflow.com/questions/3646914/how-do-i-check-if-file-exists-in-jquery-or-pure-javascript
function checkUrl(url){
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    alert(url)
    http.send();
    return http.status!=404;
}

// add in title and blip for the JS file
function loadGameText(game, gamesDiv){
    // add in the title where needed
    var html = game.html.replace(/\{0\}/g, game.name);
    // add the game into the html
    gamesDiv.insertAdjacentHTML("beforeend", html);
    // load the game's text
    document.getElementById("title"+game.name).textContent = game.title;
    document.getElementById("blip"+game.name).textContent = game.blip;
    // set the link, if there is one
    if("link" in game){
        document.getElementById("link"+game.name).setAttribute("href",game.link);
    }
    // hide hands if card images don't exist
    var hand = document.getElementById("hand"+game.name)
    if(hand){
        var imgs = hand.getElementsByTagName("img")
        for(var i = 0; i < imgs.length; i++){
            // wait for image to fail to load, then turn off display
            imgs[i].onerror = function() {
                hand.style.display = "none";
            };
        }
    }
    // hide links that don't lead anywhere for a given game
    var gameElement = document.getElementById("gameTemplate"+game.name)
    var links = gameElement.getElementsByTagName("a")
    for(var i = 0; i < links.length; i++){
        if(!checkUrl(links[i].href)){
            links[i].style.display = none;
        }
    }
}

// the function to be called in the body
function populateGames(){
    var gamesDiv = document.getElementById("games");
    for(var i = 0; i < games.length; i++){
        loadGameText(games[i], gamesDiv, gameHtml);
    }
}