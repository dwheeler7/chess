// utility functions ===========================
const signToValue = arg => {
    if (arg === 0) return -1; else return arg;
}

const boardIdx = (x,y) => {
    return ((y * 8) + x)
}

const checkCondition = (condition, err) => {
    if (!condition) {
        console.log(err); 
        return true;
    }
}

const togglePlayer = player => {
    for (otherPlayer of playersArr) {
        if (otherPlayer !== player) return otherPlayer;
    }
}


// objects ===========================

const board = [
    {
        x: 0,
        y: 0,
        el: null,
        piece: 0
    },
    {
        x: 1,
        y: 0,
        el: null,
        piece: 1
    },
    {
        x: 2,
        y: 0,
        el: null,
        piece: 2
    },
    {
        x: 3,
        y: 0,
        el: null,
        piece: 3
    },
    {
        x: 4,
        y: 0,
        el: null,
        piece: 4
    },
    {
        x: 5,
        y: 0,
        el: null,
        piece: 5
    },
    {
        x: 6,
        y: 0,
        el: null,
        piece: 6
    },
    {
        x: 7,
        y: 0,
        el: null,
        piece: 7
    },
    {
        x: 0,
        y: 1,
        el: null,
        piece: 8
    },
    {
        x: 1,
        y: 1,
        el: null,
        piece: 9
    },
    {
        x: 2,
        y: 1,
        el: null,
        piece: 10
    },
    {
        x: 3,
        y: 1,
        el: null,
        piece: 11
    },
    {
        x: 4,
        y: 1,
        el: null,
        piece: 12
    },
    {
        x: 5,
        y: 1,
        el: null,
        piece: 13
    },
    {
        x: 6,
        y: 1,
        el: null,
        piece: 14
    },
    {
        x: 7,
        y: 1,
        el: null,
        piece: 15
    },
    {
        x: 0,
        y: 2,
        el: null,
        piece: null
    },
    {
        x: 1,
        y: 2,
        el: null,
        piece: null
    },
    {
        x: 2,
        y: 2,
        el: null,
        piece: null
    },
    {
        x: 3,
        y: 2,
        el: null,
        piece: null
    },
    {
        x: 4,
        y: 2,
        el: null,
        piece: null
    },
    {
        x: 5,
        y: 2,
        el: null,
        piece: null
    },
    {
        x: 6,
        y: 2,
        el: null,
        piece: null
    },
    {
        x: 7,
        y: 2,
        el: null,
        piece: null
    },
    {
        x: 0,
        y: 3,
        el: null,
        piece: null
    },
    {
        x: 1,
        y: 3,
        el: null,
        piece: null
    },
    {
        x: 2,
        y: 3,
        el: null,
        piece: null
    },
    {
        x: 3,
        y: 3,
        el: null,
        piece: null
    },
    {
        x: 4,
        y: 3,
        el: null,
        piece: null
    },
    {
        x: 5,
        y: 3,
        el: null,
        piece: null
    },
    {
        x: 6,
        y: 3,
        el: null,
        piece: null
    },
    {
        x: 7,
        y: 3,
        el: null,
        piece: null
    },
    {
        x: 0,
        y: 4,
        el: null,
        piece: null
    },
    {
        x: 1,
        y: 4,
        el: null,
        piece: null
    },
    {
        x: 2,
        y: 4,
        el: null,
        piece: null
    },
    {
        x: 3,
        y: 4,
        el: null,
        piece: null
    },
    {
        x: 4,
        y: 4,
        el: null,
        piece: null
    },
    {
        x: 5,
        y: 4,
        el: null,
        piece: null
    },
    {
        x: 6,
        y: 4,
        el: null,
        piece: null
    },
    {
        x: 7,
        y: 4,
        el: null,
        piece: null
    },
    {
        x: 0,
        y: 5,
        el: null,
        piece: null
    },
    {
        x: 1,
        y: 5,
        el: null,
        piece: null
    },
    {
        x: 2,
        y: 5,
        el: null,
        piece: null
    },
    {
        x: 3,
        y: 5,
        el: null,
        piece: null
    },
    {
        x: 4,
        y: 5,
        el: null,
        piece: null
    },
    {
        x: 5,
        y: 5,
        el: null,
        piece: null
    },
    {
        x: 6,
        y: 5,
        el: null,
        piece: null
    },
    {
        x: 7,
        y: 5,
        el: null,
        piece: null
    },
    {
        x: 0,
        y: 6,
        el: null,
        piece: null
    },
    {
        x: 1,
        y: 6,
        el: null,
        piece: null
    },
    {
        x: 2,
        y: 6,
        el: null,
        piece: null
    },
    {
        x: 3,
        y: 6,
        el: null,
        piece: null
    },
    {
        x: 4,
        y: 6,
        el: null,
        piece: null
    },
    {
        x: 5,
        y: 6,
        el: null,
        piece: null
    },
    {
        x: 6,
        y: 6,
        el: null,
        piece: null
    },
    {
        x: 7,
        y: 6,
        el: null,
        piece: null
    },
    {
        x: 0,
        y: 7,
        el: null,
        piece: null
    },
    {
        x: 1,
        y: 7,
        el: null,
        piece: null
    },
    {
        x: 2,
        y: 7,
        el: null,
        piece: null
    },
    {
        x: 3,
        y: 7,
        el: null,
        piece: null
    },
    {
        x: 4,
        y: 7,
        el: null,
        piece: null
    },
    {
        x: 5,
        y: 7,
        el: null,
        piece: null
    },
    {
        x: 6,
        y: 7,
        el: null,
        piece: null
    },
    {
        x: 7,
        y: 7,
        el: null,
        piece: null
    }
]

class Piece {
    constructor(player) {                
        this.player = player;
        this.hasMoved = false;
        this.inPlay = true;
    }
}

class Pawn extends Piece {
    constructor(player) {
        super(player);
        this.name = "Pawn"; 
        this.iterator = null;     
        this.points = 5;  
        this.moves = [
            {
                x: 0,
                y: 1,
                firstMoveRule: false,
                mustTakeRule: false,
                cannotTakeRule: true
            },
            {
                x: 0,
                y: 2,
                firstMoveRule: true,
                mustTakeRule: false,
                cannotTakeRule: true
            },
            {
                x: 1,
                y: 1,
                firstMoveRule: false,
                musTakeRule: true,
                cannotTakeRule: false

            },
            {
                x: -1,
                y: 1,
                firstMoveRule: false,
                mustTakeRule: true,
                cannotTakeRule: false
            }  
        ]
    }
}

class Rook extends Piece {
    constructor(player) {
        super(player);
        this.name = "Rook";
        this.moves = null;
        this.points = 10;
        this.iterator = {
            horizontal: true,
            diagonal: false
        }
    }
}

class Knight extends Piece {
    constructor(player) {
        super(player);
        this.name = "Knight";
    }
}

class Bishop extends Piece {
    constructor(player) {
        super(player);
        this.name = "Bishop";
    }
}

class Queen extends Piece {
    constructor(player) {
        super(player);
        this.name = "Queen";
    }
}

class King extends Piece {
    constructor(player) {
        super(player);
        this.name = "King";
    }
}

const pieces = [
    new Rook(0),
    new Knight(0),
    new Bishop(0),
    new Queen(0),
    new King(0),
    new Bishop(0),
    new Knight(0),
    new Rook(0),
    new Pawn(0),
    new Pawn(0),
    new Pawn(0),
    new Pawn(0),
    new Pawn(0),
    new Pawn(0),
    new Pawn(0),
    new Pawn(0),
    new Rook(1),
    new Knight(1),
    new Bishop(1),
    new Queen(1),
    new King(1),
    new Bishop(1),
    new Knight(1),
    new Rook(1),
    new Pawn(1),
    new Pawn(1),
    new Pawn(1),
    new Pawn(1),
    new Pawn(1),
    new Pawn(1),
    new Pawn(1),
    new Pawn(1)
]

const playersArr = [
    {
        color: "white",
        points: 100
    },
    {
        color: "black",
        points: 100
    }
]

let controller = {
    player: playersArr[0],
    opponent: playersArr[1],
    space: board[8],
    selectedSpace: board[16],
    piece: pieces[board[8].piece],    
    move() {
        if(checkMove(this)) {
            // if player took a piece
            if (this.selectedSpace.player) {
                // remove points from oppontent
                this.opponent.points -= this.piece.points;
                // set piece to not in play
                pieces[this.selectedSpace.piece].inPlay === true;
            }
                        
            // move piece
            this.selectedSpace.piece = this.space.piece;
            this.space.piece = null;
            
            // change turns
            this.player = togglePlayer(this.player);
            this.opponent = togglePlayer(this.opponent);

            // clear turn
            this.space = null;
            this.selectedSpace = null;
            this.piece = null;
            
        }
    }
}

const checkMove = (controller) => {                   
    if (controller.selectedSpace.piece && (playersArr[pieces[controller.selectedSpace.piece].player] === controller.player)) {
        console.log("same player!");
        return false   
    }    

    if (controller.piece.iterator) {   
        console.log(controller.piece);                 
        const xDelta = controller.selectedSpace.x - controller.space.x;
        console.log(xDelta);
        const yDelta = controller.selectedSpace.y - controller.space.y;
        
        // if horizontal or vertical
        if (Math.abs(xDelta * yDelta) === 0) {   
            console.log("is horizontal")                     

            // check if horizontal-veritcal is true
            if (checkCondition(controller.piece.iterator.horizontal, "illegal move!")) return false;

            // run loop to see if move is blocked
            
            const sign = (yDelta / Math.abs(yDelta)) || (xDelta / Math.abs(xDelta));

            // initiate loop
            for (let i = 1; i < Math.abs(xDelta+yDelta); i++) {
                const xIncrement = controller.space.x + ((i * sign) * (xDelta/xDelta) || 0);
                console.log(xIncrement);
                const yIncrement = controller.space.y + ((i * sign) * (yDelta/yDelta) || 0);
                console.log(yIncrement);
                const incrementBoardIdx = boardIdx(xIncrement, yIncrement);
                console.log(incrementBoardIdx);
                if (board[incrementBoardIdx].piece) {
                    console.log("there's a piece in the way");
                    return false;
                }                            
            }

            // horizontal iterator move works!
            return true
        
        // if diagonal
        } else if (Math.abs(xDelta) === Math.abs(yDelta)) {

            // check if piece can move diagonally
            if (checkCondition(controller.piece.iterator.diagonal, "illegal move!")) return false;

            const xSign = signToValue(Math.sign(xDelta));
            const ySign = signToValue(Math.sign(yDelta));                
            console.log(xSign, ySign);

            // run loop to see if move is blocked

            for (let i = 1; i < Math.abs(xDelta); i++) {
                const xIncrement = controller.space.x + (i * xSign);
                const yIncrement = controller.space.y + (i * ySign);
                const incrementBoardIdx = boardIdx(xIncrement, yIncrement);
                if (board[incrementBoardIdx].piece) {
                    console.log("there's a piece in the way");
                    return false;
                }          
            }
            // diagonal iterator move works!
            return true

        } else {
            // illegal move
            console.log("This is an illegal move.")
        }
    
    } else {
        // check static moves
        for (let move of controller.piece.moves) {                        
            const moveSumX = controller.space.x + move.x;
            const moveSumY = controller.space.y + move.y;                                            
            
            // check for move matching selectedSpace
            if ((moveSumX === controller.selectedSpace.x) && (moveSumY === controller.selectedSpace.y)) {
                
                // check for breaking first move rule
                if (!(controller.piece.hasMoved && move.firstMoveRule)) {

                    // doesn't break first move rule
                    
                    // check if space is occupied                                
                    if (controller.selectedSpace.piece) {   
                        
                        // space is occupied...
                                                                                            
                        // check for cannot take rule
                        if (move.cannotTakeRule) {   
                            console.log(`The ${controller.piece.name} may not make this move to take.`)
                            return false
                        } else {
                            console.log("Legal move!"); // run move
                            return true
                        }                         

                    } else {  

                        // space isn't occupied...

                        // check for must take rule
                        if (move.mustTakeRule) {
                            console.log(`The ${controller.piece.name} may only make this move to take.`)                                                     
                            return false
                        } else {
                            console.log("legal move!");
                            return true
                        }
                    }

                } else {

                    // breaks first move rule
                    console.log(`The ${controller.piece.name} make only make this move on its first move.`)
                    console.log(controller.piece.hasMoved);
                    console.log(move.firstMoveRule);
                    return false
                }
            }
        } 
        console.log((`The ${controller.piece.name} may not make this move.`))
        return false   
    }
}

// event listeners ===========================

controller.move();
console.log(playersArr)
console.log(controller);