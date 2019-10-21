// a class to represent a card being simulated
class Card {

    constructor(x, y, w, h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.bg ="#D0A090"; 
    }

    draw(ctx){
        ctx.fillStyle = this.bg;
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }

    move(x, y){
        this.x += x;
        this.y += y;
    }
}

// INPUT

// a class for dealing with dragging
class DragManager{

    constructor(cards){
        // cash the list of dragable cards
        this.cards = cards;
        // alternate drag math
        this.xOffset = 0;
        this.yOffset = 0;
        // current drag math
        this.xStart = 0;
        this.yStart = 0;
        this.card = null; // the card being dragged
    }

    onMouseDown(event){
        // pickup the card 
        this.card = this.cards[0]; // TESTING
        // alternate drag
        this.xOffset = this.card.x - event.clientX;
        this.yOffset = this.card.y - event.clientY;
        // current math
        this.xStart = event.clientX;
        this.yStart = event.clientY;
    }

    onMouseMove(event){
        this.update(event.clientX, event.clientY);
    }

    onMouseUp(event){
        this.update(event.clientX, event.clientY);
        this.card = null;
    }

    // updates the card as it is dragged
    // takes the x and y of the mouse
    update(x, y){
        this.card.move(x - this.xStart, y-this.yStart);
        this.xStart = x;
        this.yStart = y;
    }

}

// draws the boards state
// takes a list of cards to render, and the context
function draw(cards, ctx, w, h){
    ctx.clearRect(0, 0, w, h)
    cards.forEach(card => {
        card.draw(ctx);
    });

}


// begins running the sim with the given canvas
function beginSim(canvas){

    // TESTING 
    var card = new Card(15, 30, 125, 175);
    var cards = [ card ];

    // setup the canvas
    var ctx = canvas.getContext("2d");
    var w = canvas.width;
    var h = canvas.height;
    var dm = new DragManager(cards);

    canvas.onmousedown = function(event){
        dm.onMouseDown(event);
    }
    canvas.onmousemove = function(event){
        dm.onMouseMove(event);
        draw(cards, ctx, w, h);
    }
    canvas.onmouseup = function(event){
        dm.onMouseUp(event);
        draw(cards, ctx, w, h);
    }
    
    // TESTING
    draw(cards, ctx, w, h);
}