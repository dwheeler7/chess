# Pseudocode

## Model

### Fixed variables
- Pieces
    - points
    - name
    - moves num
    - Moves
        - Dynamic:
            - horizontal (boolean)
            - diagonal (boolean)
            - false
        - Static (array of static move objects)
            - x value
            - y value
            - first move rule (boolean)
            - must take rule (boolean)
            - can't take rule (boolean)

- Players
    - objects titled 1/-1
    
### State variables

- Turn (1/-1)
- Turn num
- Board: 2d array; values: null, 0-31
- Player:
   - pieces lost - array of nums
   - points - num
   - points differential - num

- currentMove (reference variables??)
    - Player (players.turn)
    - Starting space
        - el
        - array item
    - Piece
    - Ending space
        - el
        - array item
        - xDelta
        - yDelta

## View

### Elements to cache

- Board
- Btn for restart
- Display content:
    - Pieces taken
    - Turn log
    - Current player label
    - Point differential

## Controller

### Event listeners

- Window load
- Space click
- Restart click

#### On window load || restart click

##### init

- Set turn to 1
- Set board array values
- Populate board
- Populate Current player label

#### On space click

##### Initiate move
- Validate click is on board
- Either select piece or space:
    - if !currentMove.piece...validate piece selection...else validate move selection

###### Validate piece selection (return true or false)
- match event arg to corresponding board array item
- validate that board array item has a piece
- validate that board array item piece.player = turn
- Save currentMove.startingSpace as board array item

###### Validate move selection (return true or false)
- match event arg to corresponding board array item, save as currentMove.endingSpace
- Set xDelta & yDelta
- Validate space doesn't have player piece
- Validate move for dynamic pieces
    - if currentMove.piece.moves.dynamic
    - ...
- Validate move for static pieces
    - Loop through static moves
    - check for move conditions

###### Execute move
- Set endingSpace board array value to startingSpace value
- Set startingSpace board array value to 0
- Clear currentMove object
- Change turn 

###### Render
- Populate board
- Populate Current player label