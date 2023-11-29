# Pseudocode

## Model

### Fixed variables
- Pieces: 0-31
- Piece moves
- Players

### State variables
- Turn num
- Player turn - 1/-1
- Spaces - null, 0-31
- Player score: num
- Move
    - Player
    - Piece
    - Space

## View

### Elements to cache

- Board
- Pieces
- Btn for restart

### Event listeners

- Piece click
- Space click
- Restart click

## Controller

### On new move
- Set turn num sv
- Set move.player sv

### On piece click
- Set move.piece sv
- Set move.space sv

### On move click
- Get move.space sv
- See if valid move
...