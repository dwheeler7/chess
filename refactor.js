// MODEL ===========================

// fixed variables ===========================

// Static move class
class StaticMove {
    constructor(xDelta,yDelta,firstMove,mustTake,mustNotTake) {
        this.xDelta = xDelta;
        this.yDelta = yDelta;
        this.firstMove = firstMove;
        this.mustTake = mustTake;
        this.mustNotTake = mustNotTake;
    }
}

// Piece parent class
class Piece {
    constructor(player) {                
        this.player = player;
        this.movesNum = 0;
    }
}

// Pawn child class
class Pawn extends Piece {
    constructor(player) {
        super(player);    
        this.name = "Pawn";
        this.pointValue = 1;
        this.moves = {
            dyanamic: null,
            static: [
                new StaticMove(0,1,false,false,true),
                new StaticMove(0,2,true,false,true),
                new StaticMove(1,1,false,true,false),
                new StaticMove(-1,1,false,true,false)
            ]
        }
    }
}

// Knight child class
class Knight extends Piece {
    constructor(player) {
        super(player);  
        this.name = "Knight";  
        this.pointValue = 3;
        this.moves = {
            dyanamic: null,
            static: [
                new StaticMove(1,2,false,false,false),
                new StaticMove(-1,2,false,false,false),
                new StaticMove(1,-2,false,false,false),
                new StaticMove(-1,-2,false,false,false),
                new StaticMove(2,1,false,false,false),
                new StaticMove(2,-1,false,false,false),
                new StaticMove(-2,1,false,false,false),
                new StaticMove(-2,-1,false,false,false)
            ]
        }
    }
}

// Bishop child class
class Bishop extends Piece {
    constructor(player) {
        super(player);  
        this.name = "Bishop";  
        this.pointValue = 3;
        this.moves = {
            dyanamic: ["diagonal"],
            static: null
        }
    }
}

// Rook child class
class Rook extends Piece {
    constructor(player) {
        super(player);  
        this.name = "Rook";  
        this.pointValue = 5;
        this.moves = {
            dyanamic: ["orthogonal"],
            static: null
        }
    }
}

// Queen child class
class Queen extends Piece {
    constructor(player) {
        super(player);  
        this.name = "Queen";  
        this.pointValue = 9;
        this.moves = {
            dyanamic: ["orthogonal", "diagonal"],
            static: null
        }
    }
}

// King child class
class King extends Piece {
    constructor(player) {
        super(player);  
        this.name = "King";  
        this.pointValue = 9;
        this.moves = {
            dyanamic: null,
            static: [
                new StaticMove(1,0,false,false,false),
                new StaticMove(1,-1,false,false,false),
                new StaticMove(0,-1,false,false,false),
                new StaticMove(-1,-1,false,false,false),
                new StaticMove(-1,0,false,false,false),
                new StaticMove(-1,1,false,false,false),
                new StaticMove(0,1,false,false,false),
                new StaticMove(1,1,false,false,false)
            ]
        }
    }
}

// Pieces
const pieces = [
    new Pawn(-1),
    new Pawn(-1),
    new Pawn(-1),
    new Pawn(-1),
    new Pawn(-1),
    new Pawn(-1),
    new Pawn(-1),
    new Pawn(-1),
    new Rook(-1),
    new Bishop(-1),
    new Knight(-1),
    new King(-1),
    new Queen(-1),
    new Knight(-1),
    new Bishop(-1),
    new Rook(-1),
    new Pawn(1),
    new Pawn(1),
    new Pawn(1),
    new Pawn(1),
    new Pawn(1),
    new Pawn(1),
    new Pawn(1),
    new Pawn(1),
    new Rook(1),
    new Bishop(1),
    new Knight(1),
    new Queen(1),
    new King(1),
    new Knight(1),
    new Bishop(1),
    new Rook(1)
]

// Players
const players = {
    "1": "White",
    "-1": "Black"
}

// state variables ===========================
let turn;
let turnNum;
let board;

// VIEW ===========================

// chached elements
const boardEl = document.getElementById("board");
const boardEls = [...document.querySelectorAll('#board > div')]
// const restartBtnEl = document.getElementById("restart-btn");
// const turnLabelEl = document.getElementById("turn-label");

// CONTROLLER ===========================

// util 

const error = msg => {
    // console.log(`illegal move: ${msg}`)
}

getPiecePosition = piece => {
    const flatIdx = board.flat().indexOf(piece);
    const row = flatIdx % 8;
    const col = (flatIdx - row) / 8;
    return [col,row];
}

// controller object
let currentMove = {};

// init

function init() {
    turn = -1;
    board = [
        [pieces[31],pieces[23],null,null,null,null,pieces[0],pieces[8]],
        [pieces[30],pieces[22],null,null,null,pieces[27],pieces[1],pieces[9]],
        [pieces[29],pieces[21],null,null,null,null,pieces[2],pieces[10]],
        [pieces[28],pieces[20],null,null,null,null,pieces[3],pieces[11]],
        [null,pieces[19],null,null,null,null,pieces[4],pieces[12]],
        [pieces[26],pieces[18],null,null,null,null,pieces[5],pieces[13]],
        [pieces[25],pieces[17],null,null,null,null,pieces[6],pieces[14]],
        [pieces[24],pieces[16],null,null,null,null,pieces[7],pieces[15]]
    ]    
}

const getKingPosition = king => {
    for (let item of board.flat()) {        
        if (item === king) {
            return getPiecePosition(item);
        }
    }
}

const validateCheck = () => {
    // get king item in pieces array
    const kingPosition = getKingPosition(pieces[pieces.findIndex(element => element.name === 'King' && element.player === turn)]);
    
    // enemyArr
    const enemyArr = []
    // loop through all opponent pieces
    for (let item of board.flat()) {
        if (item && (item.player != turn)) {
            enemyArr.push(getPiecePosition(item));
        }
    }

    console.log(enemyArr);    
    
    for (let piece of enemyArr) {
        let cnt = {};
        cnt.piece = board[piece[0]][piece[1]];
        cnt.pieceColNum = piece[0];
        cnt.pieceRowNum = piece[1];
        if (checkMove(cnt, kingPosition[0], kingPosition[1])) {
            console.log("puts in check")
            return true
        }
    }
    return false

}



function render() {
    const spaceElsArr = boardEl.children;
    for (let i = 0; i < spaceElsArr.length; i++) {
        const row = i % 8;
        const col = (i-row) / 8;
        const boardArrItem = board[row][col];        
        if (boardArrItem) {
            spaceElsArr[i].innerText = boardArrItem.name;      
        } else {
            spaceElsArr[i].innerText = "";
        }
    }
}

const selectPiece = (controller, space, colIdx, rowIdx) => {
    // return if player selected no piece or opponent's piece
  if (!space || space.player != turn) {
      error("player selected no piece or opponent's piece");        
      return
  }
  // set currentMove.piece to space
//   console.log(`player selects ${space.name}`);
  controller.piece = space;
  controller.pieceColNum = colIdx;
  controller.pieceRowNum = rowIdx;
}

const checkMove = (controller, colIdx, rowIdx) => {
    // console.log("checking move...")      

    // validate space is not same player
    if (board[colIdx][rowIdx] && (board[colIdx][rowIdx].player === controller.piece.player)) {
        error("same player");
        return false
    }     

    // calculate move by x and y
    const xDelta = colIdx - controller.pieceColNum;
    const yDelta = rowIdx - controller.pieceRowNum;
    
    // validate dynamic piece
    if (controller.piece.moves.dyanamic) {
        // console.log("validating move for dynamic piece...");
        
        // determine whether orthogonal, diagonal, or neither
        if (Math.abs(xDelta * yDelta) === 0) {
            controller.direction = "orthogonal";
            // console.log(`${controller.piece.name} moved orthogonally`);
        } else if (Math.abs(xDelta) === Math.abs(yDelta)) {
            controller.direction = "diagonal";
            // console.log(`${controller.piece.name} moved diagonally`);
        } else {
            error(`${controller.piece.name} must move in ${controller.piece.moves.dyanamic.join(" or ")} direction`);
            return false
        }

        // validate that piece can move in direction

        if (controller.piece.moves.dyanamic.indexOf(controller.direction) === -1) {
            error(`${controller.piece.name} can't move ${controller.direction}ly`);
            return false
        }

        // check if there are pieces in between starting and ending space

        // sign: 1, -1, 0
        const xSign = Math.sign(xDelta);
        const ySign = Math.sign(yDelta);

        // console.log("validating move path...")
        for (let i = 1; i < (Math.abs(xDelta) || Math.abs(yDelta)); i++) {
            const iteration = [(controller.pieceColNum + (i * xSign)),(controller.pieceRowNum + (i * ySign))]            
            if (board[iteration[0]][iteration[1]]) {
                error("there's a piece in the way");
                return false
            }
        }
        // console.log("no pieces in path")
        // console.log("make move...")            
        return true

    } else {
        // console.log("validating move for static piece...");
        // loop through moves
        for (let move of controller.piece.moves.static) {            

            // find matching move
            if ((move.xDelta === (xDelta * turn)) && (move.yDelta === yDelta * turn)) {
                // console.log(`${controller.piece.name} can make this move...`)
                // validate for move rules
                // console.log("validating for move rules...");
                // console.log("validating for first move rule...");
                if (move.firstMove && controller.piece.movesNum) {
                    error(`${controller.piece.name} can only make this move on the first move`);
                    return false
                }
                // console.log("validating must take rule...");
                if (move.mustTake && !board[colIdx][rowIdx]) {
                    error(`${controller.piece.name} must take a piece to make this move`)
                    return false
                }
                // console.log("validating must not take rule...");
                if (move.mustNotTake && board[colIdx][rowIdx]) {
                    error(`${controller.piece.name} can't take a piece making this move`)
                    return false
                }

                // console.log("make move...");
                return true
            }            
        }
        // console.log(`${controller.piece.name} can't make this move.`)
    }   

}

function move(colIdx, rowIdx) {
    // adjust points
    
    // move piece
    board[colIdx][rowIdx] = currentMove.piece;
    board[currentMove.pieceColNum][currentMove.pieceRowNum] = null;
    const putsInCheck = validateCheck();
    if (putsInCheck) alert("That move puts you in check!");

    // 

    turn *= -1;
    currentMove = {};
    render();
}




// space click
boardEl.addEventListener("click", e => {
    
    // getting index of boar element
    boardElIdx = boardEls.indexOf(e.target);
    // returning on errant click
    if (boardElIdx === -1) {
        error("did not click on board");
        return
    }

    // get correspondig column and array indexes
    const colIdx = boardElIdx % 8;
    const rowIdx = (boardElIdx - colIdx) / 8;

    // get board array item
    const boardArrItem = board[colIdx][rowIdx];

    // determine whether user is selecting piece or move & call respective function
    // passing indices to selectMove to keep reference value
    
    if (currentMove.piece) {
        if (checkMove(currentMove, colIdx, rowIdx)) {
            move(colIdx, rowIdx);
        }
    } else {
        selectPiece(currentMove, boardArrItem, colIdx, rowIdx);
    }    


})

init();
render();