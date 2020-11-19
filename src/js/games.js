// REQUIRES COLLAPSIBLE

// constants
// TODO: make collapse buttons auto-scroll to that section
var gameHtml = " \
<div id='gameTemplate{0}' class='game'> \
    <div id='hand{0}' class='sampleHand' data-collapsible='true'> \
        <img id='cardLeft' class='card' src='./games/{0}/CardL.png' height='262' width='187'/> \
        <img id='cardRight' class='card' src='./games/{0}/CardR.png' height='262' width='187'/> \
        <img id='cardCenter' class='card' src='./games/{0}/CardC.png' height='262' width='187'/> \
    </div> \
    <div class='about'> \
        <span id='title{0}' class='title'>{0}</span> \
        <button class='gameCollapse' onclick='toggle_collapse_id(\"text{0}\"); toggle_collapse_id(\"hand{0}\");'>\
            <svg height='32' width='32'>\
                <polygon points='0,0, 16,14 32,0 32,16 16,32, 0,16' \
                    style='fill:rgb(128,180,128);skroke:rgb(255,255,255);stroke-width:0'\
                />\
            </svg>\
        </button>\
        <div id='text{0}' data-collapsible='true'>\
            <p id='blip{0}'>If I had to call a single game my 'magnum opus', it would have to be Vitium. While it is not my best game, it is the one I have put the most time in, and the one I have believed in through the most setbacks. It is an attempt at being a multi-player politcal card game, that allows players to wheel and deal and betray eachother, and that asks the player to embrase the phatasy of being an imoral, selfish crimelord; Vampire: the Eternal struggle for the modern age. It always has been very ambisious, but I have longed believed there is something special it can be that nothing else today is. It has had problems being simple enough to being reasonable to learn. \
                </p> \
            <a id='rulebook' class='download' href='./games/{0}/Rulebook.pdf' download>Download the Rulebook</a> \
            <a id='pnp' class='download' href='./games/{0}/Cards.pdf'>Download the Print-and-Play</a> \
        </div> \
    </div> \
</div> \
";

var videoGameHtml = " \
<div id='gameTemplate{0}' class='game'> \
    <div class='about'> \
        <span id='title{0}' class='title'>{0}</span> \
        <button class='gameCollapse' onclick='toggle_collapse_id(\"text{0}\"); toggle_collapse_id(\"hand{0}\");'>\
            <svg height='32' width='32'>\
                <polygon points='0,0, 16,14 32,0 32,16 16,32, 0,16' \
                    style='fill:rgb(128,180,128);skroke:rgb(255,255,255);stroke-width:0'\
                />\
            </svg>\
        </button>\
        <div id='text{0}' data-collapsible='true'>\
            <p id='blip{0}'>If I had to call a single game my 'magnum opus', it would have to be Vitium. While it is not my best game, it is the one I have put the most time in, and the one I have believed in through the most setbacks. It is an attempt at being a multi-player politcal card game, that allows players to wheel and deal and betray eachother, and that asks the player to embrase the phatasy of being an imoral, selfish crimelord; Vampire: the Eternal struggle for the modern age. It always has been very ambisious, but I have longed believed there is something special it can be that nothing else today is. It has had problems being simple enough to being reasonable to learn. \
                </p> \
            <a id='exe' class='download' href='./games/{0}/Game.exe' download>Download the Game</a> \
            <a id='link{0}' class='download'>The Game's Webpage</a> \
        </div> \
    </div> \
</div> \
";


// objects representing all the games
// this is where the data needs to be inserted
var games = [
{
    name: "Vitium",
    title: "Vitium: a Game of Houses and their Vices",
    blip: "If I had to call a single game my \"magnum opus\", it would have to be Vitium. While it is probably not my best game, it is the one I have put the most time in, and the one that is most important to me personally. It is an attempt at being a multi-player politcal card game that allows players to wheel and deal and betray each other, and that asks the player to embrase the fantasy of being an imoral, selfish crimelord; Vampire: the Eternal struggle for the modern age. It always has been very ambisious, but I have longed believed there is something special it can be that nothing else today is. It has major problems with complexity and approachability.",
    html: gameHtml
},
{
    name: "ChildhoodFears",
    title: "Facing your Childhood Fears: the Card Game",
    blip: "Childhood Fears started as a joke. Back in my freshman year of college, I designed an RPG called \"Light the Way\" about a young girl doing battle with the embodiments of her fears. The design of that game focused on blending horror game tricks and empowerment fantasy techniques to create the feeling of conquring one's fears, but the game project itself died to production issues. Three years later, the joke of \"Light the Way: the Card Game\" came up, and this is my attempt to deliever on that pitch. It also experiments with giving the player's indipendent win conditions, meaning both players, one player, or no players might wind up winning. I like how this creates a path of discovery for players, as they go from bickering to delaying their own victory in order to help the other player win, but I am not convinced it is meaningfully distinct enough yet from conventional co-op. The game currently does not sell its horror element as well as I want it to; I want to attempt reversing the roll of the \"chapter\" cards from blessings with a strategic draw back to something to more unambigiously fearful. The problem with that is that the game currently depends on players being willing to play them. I also worry about finding a system to scale difficulty level appropriately for replayability. Balancing the player against the enemy has already been a major issue in earlier versions of the game." ,
    html: gameHtml
},
{
    name: "Reapers",
    title: "Reapers",
    blip: "Reapers is an attempt to incorpate a handful of mechanics from modern Collectable Card Games that I particularly like, such as persistent resources and deckbuilding centered around specific characters, and a modern gothic fantasy theme. The game is a medium-heavy strategy game that prioritizes being strategic and thematically compelling. The biggest problem it is currently facing is the power of the Malakhim; while these cards have a role to play in progressing the game through its stages, too often the player who draws more Malakhim also wins. I hope to find a satisfactory system for playing Malakhim that is more consistent than drawing them from the deck. The game also has a length issue; it tends to overstay it's welcome somewhat, but this seems mostly to be a matter of finding the sweet spot for the win condition.", 
    html: gameHtml
},
{
    name: "Allocator",
    title: "Allocator",
    blip: "This game started with the marriage of two mechanics I wanted to try out: having cards server different roles based on where the player placed them, and having a maximum amount of card-power the player can have across the board. The rest of the game flowed from this basic premise; for example, once I realized that optimizing the ratio of cards on the board to points on the board would be a big part of the gameplay, I starting leaning into the idea that card advantage is central to this game's gamestate, such as with the boost mechanic. While the \"Development area\" is perfectly serviceable, it area has never been quite as impactful as I have wanted it to be and allocating between attack and defense tends to be a bit on the straight-forward side.",
    html: gameHtml
},
{
    name: "Thirteen",
    title: "Thirteen Princes'",
    blip: "Thirteen Princes' was one of my earlier attempt at making a game that prioritized being simple and approachable. I gave it a lighter, friendlier horror theme, though this did not come accross in gameplay as well as I wanted it to, nor did it really have to. The biggest problem it has had has been overly favoring bigger \"beings\" in combat and outright punishing players for having small beings in play. I have made a few revisions over the years, though those changed too much and lost what made the game worth developing in the fist place. Thirteen is much oldier than the other games on this list, and reflects a much earlier stage in my game design, but I am still very proud of the advances it represented in my designing and in the design itself.",
    html: gameHtml
},
{
    name: "InstruMENTAL",
    title: "InstruMENTAL",
    blip: "Of the handful of action games I have designed, this one is particularly well done. It's a little game jam game built around the mechanic that each player's projectiles are waves that grow as they disceminate and echo around the room. I am happy with how simple and exciting it is, and how much untapped design space it offers.",
    html: videoGameHtml,
    link: "https://github.com/Bradsta/CrescendoConflict",
}
];

// returns if a url is an actual file
function checkUrl(url){
    url_parts = url.split("/")
    // for HTTP hosted webpages
    // from: https://stackoverflow.com/questions/3646914/how-do-i-check-if-file-exists-in-jquery-or-pure-javascript
    if(url_parts[0] == "http:" || url_parts[0] == "https:"){
        var http = new XMLHttpRequest();
        http.open('HEAD', url, false);
        http.send();
        return http.status!=404;
    }
    // for local testing
    if(url_parts[0] == "file:"){
        // todo: do something
        return true;
    }
}

// prevents an element from rendering;
// made function to deal with other issues like collapsibility
function hide(element){
    element.style.display = "none";
    element.setAttribute("data-collapsible", "false");
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
                hide(hand);
            };
        }
    }
    // hide links that don't lead anywhere for a given game
    var gameElement = document.getElementById("gameTemplate"+game.name)
    var links = gameElement.getElementsByTagName("a")
    for(var i = 0; i < links.length; i++){
        // force excludes checking on external links
        if(links[i].id != "link"+game.name && !checkUrl(links[i].href)){
            hide(links[i]);
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