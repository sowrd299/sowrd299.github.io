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

    // moves by the given offset
    move(x, y){
        this.x += x;
        this.y += y;
    }

    // moves to the given point
    // aligns to the give relative point on the card
    // .... (0,0) is the upper left, (1,1) is the lower right
    moveToPoint(x, y, xAlign, yAlign){
        this.x = x - (this.w * xAlign);
        this.y = y - (this.h * yAlign);
    }

    // returns whether or not the card is
    // ...overlapping the given point
    isTouchingPoint(x, y){
        return x >= this.x && x <= this.x + this.w &&
                y >= this.y && y <= this.y + this.h;
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
        for(var i = 0; i < this.cards.length; i++){
            if(this.cards[i].isTouchingPoint(event.x, event.y)){
                this.card = this.cards[i]; // TESTING
                // alternate drag
                this.xOffset = this.card.x - event.x;
                this.yOffset = this.card.y - event.y;
                // current math
                this.xStart = event.x;
                this.yStart = event.y;
                // once we picked up a card, don't pick up another
                break;
            }
        }
    }

    onMouseMove(event){
        if(this.card)
            this.update(event.x, event.y);
    }

    onMouseUp(event){
        if(this.card){
            this.update(event.x, event.y);
            this.card = null;
        }
    }

    // updates the card as it is dragged
    // takes the x and y of the mouse
    update(x, y){
        this.card.move(x - this.xStart, y-this.yStart);
        this.xStart = x;
        this.yStart = y;
    }

}

class CanvasManager{

    constructor(canvas){
        this.canvas = canvas;
        this.w = canvas.width;
        this.h = canvas.height;
        this.ctx = canvas.getContext("2d");
    }

    clear(){
        this.ctx.clearRect(0, 0, this.w, this.h);
    }

    mousePosToCanvasPos(event){
        // from https://www.html5canvastutorials.com/advanced/html5-canvas-mouse-coordinates/
        var rect = this.canvas.getBoundingClientRect();
        return {
          x: event.clientX - rect.left,
          y: event.clientY - rect.top
        };
    }

    // draws the boards state
    // takes a list of objects to render, and the context
    draw(drawables){
        this.clear();
        drawables.forEach(drawable => {
            drawable.draw(this.ctx);
        });
    }

}



// begins running the sim with the given canvas
function beginSim(canvas){

    // TESTING 
    var card = new Card(15, 30, 125, 175);
    var cards = [ card ];

    // setup the canvas
    var cm = new CanvasManager(canvas);
    var dm = new DragManager(cards);

    canvas.onmousedown = function(event){
        dm.onMouseDown(cm.mousePosToCanvasPos(event));
    }
    canvas.onmousemove = function(event){
        dm.onMouseMove(cm.mousePosToCanvasPos(event));
        cm.draw(cards);
    }
    canvas.onmouseup = function(event){
        dm.onMouseUp(cm.mousePosToCanvasPos(event));
        cm.draw(cards);
    }
    
    // TESTING
    cm.draw(cards);
}