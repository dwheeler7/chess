there's a board and pieces for black and white
there's a scoreboard that shows how many points each player has
there's a log of all the past moves
there's a label that shows whose move it is

user clicks space
    // if space is occupied by their piece, highlight space
    // if not, do nothing
user clicks space to move the piece to
if the move isn't possible for any of the following reasons, they receive an error message and can try again
    // the piece cannot make that move
    // the move puts them off the board
    // the space has one of their own pieces on it
    // the path to the space is blocked by any piece
    // the move puts them in check
// if the move takes an opponent's piece...
    // the opponent loses the piece
    // the piece point value is subtracted from the opponents point total

// the move is logged and the label changes to the other player