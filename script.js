// MODEL

// Fixed variables

class StaticMove {
    constructor(xDelta,yDelta,firstMove,mustTake,mustNotTake) {
        this.xDelta = xDelta;
        this.yDelta = yDelta;
        this.firstMove = firstMove;
        this.mustTake = mustTake;
        this.mustNotTake = mustNotTake;
    }
}

class Piece {
    constructor(player) {                
        this.player = player;
        this.movesNum = 0;
    }
}

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

const pieces = [new Pawn(-1),new Pawn(-1),new Pawn(-1),new Pawn(-1),new Pawn(-1),new Pawn(-1),new Pawn(-1),new Pawn(-1),new Rook(-1),new Bishop(-1),new Knight(-1),new King(-1),new Queen(-1),new Knight(-1),new Bishop(-1),new Rook(-1),new Pawn(1),new Pawn(1),new Pawn(1),new Pawn(1),new Pawn(1),new Pawn(1),new Pawn(1),new Pawn(1),new Rook(1),new Bishop(1),new Knight(1),new Queen(1),new King(1),new Knight(1),new Bishop(1),new Rook(1)]

const players = {
    "1": "White",
    "-1": "Black"
}

// State variables
let turn;
let turnNum;
let board;

// VIEW

const boardEl = document.getElementById("board");
const boardEls = [...document.querySelectorAll('#board > div')]
// const restartBtnEl = document.getElementById("restart-btn");
// const turnLabelEl = document.getElementById("turn-label");

// CONTROLLER

const error = msg => {
    console.log(`illegal move: ${msg}`)
}

getPiecePosition = piece => {
    const flatIdx = board.flat().indexOf(piece);
    const row = flatIdx % 8;
    const col = (flatIdx - row) / 8;
    return [col,row];
}

let currentMove = {};

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

const validateCheck = () => {
    const king = pieces[pieces.findIndex(element => element.name === 'King' && element.player === turn)];
    let kingPosition;
    for (let item of board.flat()) {        
        if (item === king) {
            kingPosition = getPiecePosition(item);
        }
    }
    let opntArr = [];
    for (let item of board.flat()) {
        if (item && (item.player != turn)) {
            opntArr.push(getPiecePosition(item));
        }
    }    
    for (let piece of opntArr) {
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
  if (!space || space.player != turn) {
      error("player selected no piece or opponent's piece");        
      return
    }
    controller.piece = space;
    controller.pieceColNum = colIdx;
    controller.pieceRowNum = rowIdx;
}

const checkMove = (controller, colIdx, rowIdx) => {
    if (board[colIdx][rowIdx] && (board[colIdx][rowIdx].player === controller.piece.player)) {
        error("same player");
        return false
    }     
    const xDelta = colIdx - controller.pieceColNum;
    const yDelta = rowIdx - controller.pieceRowNum;
    if (controller.piece.moves.dyanamic) {
        if (Math.abs(xDelta * yDelta) === 0) {
            controller.direction = "orthogonal";
        } else if (Math.abs(xDelta) === Math.abs(yDelta)) {
            controller.direction = "diagonal";            
        } else {
            error(`${controller.piece.name} must move in ${controller.piece.moves.dyanamic.join(" or ")} direction`);
            return false
        }
        if (controller.piece.moves.dyanamic.indexOf(controller.direction) === -1) {
            error(`${controller.piece.name} can't move ${controller.direction}ly`);
            return false
        }
        const xSign = Math.sign(xDelta);
        const ySign = Math.sign(yDelta);
        for (let i = 1; i < (Math.abs(xDelta) || Math.abs(yDelta)); i++) {
            const iteration = [(controller.pieceColNum + (i * xSign)),(controller.pieceRowNum + (i * ySign))]            
            if (board[iteration[0]][iteration[1]]) {
                error("there's a piece in the way");
                return false
            }
        }               
        return true
    } else {
        for (let move of controller.piece.moves.static) {            
            if ((move.xDelta === (xDelta * turn)) && (move.yDelta === yDelta * turn)) {                
                if (move.firstMove && controller.piece.movesNum) {
                    error(`${controller.piece.name} can only make this move on the first move`);
                    return false
                }
                if (move.mustTake && !board[colIdx][rowIdx]) {
                    error(`${controller.piece.name} must take a piece to make this move`)
                    return false
                }
                if (move.mustNotTake && board[colIdx][rowIdx]) {
                    error(`${controller.piece.name} can't take a piece making this move`)
                    return false
                }
                return true
            }            
        }
    }   
}



function move(colIdx, rowIdx) {
    const pieceCopy = Object.assign(currentMove.piece);
    const spaceCopy = Object.assign([], board[colIdx][rowIdx]);
    board[colIdx][rowIdx] = currentMove.piece;
    board[currentMove.pieceColNum][currentMove.pieceRowNum] = null;
    if (validateCheck()) {
        board[colIdx][rowIdx] = spaceCopy;
        board[currentMove.pieceColNum][currentMove.pieceRowNum] = pieceCopy;
        return
    }
    turn *= -1;
    currentMove = {};
    render();
}

boardEl.addEventListener("click", e => {
    boardElIdx = boardEls.indexOf(e.target);
    if (boardElIdx === -1) {
        error("did not click on board");
        return
    }
    const colIdx = boardElIdx % 8;
    const rowIdx = (boardElIdx - colIdx) / 8;
    const boardArrItem = board[colIdx][rowIdx];
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