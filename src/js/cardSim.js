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

    constructor(card){
        this.xOffset = 0;
        this.yOffset = 0;
        // TESTING
        this.card = card; // the card being dragged
    }

    onMouseDown(event){
        this.xOffset = card.x - event.clientX;
        this.yOffset = card.y - event.clientY;
    }

    onMouseUp(event){

    }
}


// begins running the sim with the given canvas
function beginSim(canvas){
    // setup the canvas
    var ctx = canvas.getContext("2d");
    var dm = new DragManager();
    canvas.onmousedown = function(event){
        dm.onMouseDown(event);
    }
    canvas.onmouseup = function(event){
        dm.onMouseUp(event);
    }
    
    // TESTING
    card = new Card(15, 30, 125, 175);
    card.draw(ctx);
}