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
        this.img;
        this.inPlay = true;
    }
}

class Pawn extends Piece {
    constructor(player) {
        super(player);    
        this.img = `<svg width="1600" height="1600" viewBox="0 0 1600 1600" fill="${colors[this.player]}" xmlns="http://www.w3.org/2000/svg">
        <path d="M1090.91 1250.91H509.08C476.949 1250.91 450.897 1276.96 450.897 1309.09C450.897 1341.22 476.949 1367.27 509.08 1367.27H1090.89C1123.02 1367.27 1149.08 1341.22 1149.08 1309.09C1149.08 1276.95 1123.03 1250.91 1090.9 1250.91H1090.91Z"/>
        <path d="M552.733 1221.81H1047.28C1079.41 1221.81 1105.46 1195.76 1105.46 1163.63C1105.46 1131.5 1079.41 1105.45 1047.28 1105.45H552.733C520.603 1105.45 494.551 1131.5 494.551 1163.63C494.551 1195.76 520.613 1221.81 552.733 1221.81Z" />
        <path d="M656.2 1076.36H943.813C975.449 1076.36 995.073 1050.95 987.449 1019.9L881.455 588.443C928.408 560.573 960.001 509.489 960.001 450.896C960.001 362.532 888.365 290.896 800.001 290.896C711.637 290.896 640.001 362.532 640.001 450.896C640.001 509.484 671.58 560.568 718.564 588.443L612.559 1019.9C604.918 1050.95 624.553 1076.36 656.204 1076.36H656.2Z"/>
        </svg>`;
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
        this.img = `<svg width="1200pt" height="1200pt" version="1.1" viewBox="0 0 1200 1200" fill="${colors[this.player]}" xmlns="http://www.w3.org/2000/svg">
        <path d="m815.2 987.79h-430.39c-23.77 0-43.035 19.418-43.035 43.387s19.266 43.395 43.035 43.395h430.39c23.781 0 43.035-19.418 43.035-43.395 0-23.969-19.285-43.387-43.035-43.387z"/>
        <path d="m417.08 966.1h365.85c23.762 0 43.027-19.406 43.027-43.387 0-23.977-19.277-43.387-43.027-43.387l-365.85 0.003906c-23.77 0-43.035 19.406-43.035 43.387-0.003907 23.977 19.273 43.383 43.035 43.383z"/>
        <path d="m861.82 400.3c0-3.8828-5.3789-11.684-5.3789-13.844s1.2969-3.4688 2.8047-7.1445c1.4961-3.6641 1.4961-26.172 1.4961-26.172s-9.7539-14.172-12.012-16.441c-2.2461-2.2695-5.3555-11.465-11.816-17.957-6.4375-6.5-43.551-31.594-61.375-40.68-17.816-9.0859-63.949-36.141-74.684-44.988-10.723-8.8672-39.285-28.777-48.742-33.328-9.4375-4.5391-14.598-7.9961-23.836-10.605-9.2305-2.6055-24.676-3.0234-27.895-6.2734-3.2188-3.2383-5.5742-27.043-8.5859-30.078-3-3.0234-10.516-4.9648-10.516-4.9648s-5.0391-3.25-24.676-3.25c-19.637 0-37.984-0.65625-48.609-2.2695s-24.785-1.6133-24.785-1.6133-33.164-15.25-39.273-15.25c-6.1211 0-10.941 0.65625-10.941 3.5664 0 2.9141 17.391 21.414 17.391 28.875 0 7.4609-10.145 12.5-11.598 13.953-1.4492 1.4609-7.4062 3.5664-7.4062 3.5664l-1.9297 6.4922s-10.297 2.2695-12.238 2.2695c-1.9414 0-4.3438 9.8945 1.6055 15.906 5.957 6-9.6562 7.7891-13.844 3.5664-4.1797-4.2227-3.2188-2.2695-6.1211-2.2695-2.9023 0-4.5039 14.922-1.125 21.73 3.3828 6.8164-0.64453 7.7891-3.2188 7.7891-2.5742 0-9.9805-1.4609-12.719-4.2227-2.7383-2.75-7.5586 3.0859-7.5586 9.4023 0 6.3281 5.3906 12.906 7.4062 14.934 2.0195 2.0273 2.7383 4.0469-1.375 5.4336-4.1016 1.375-8.6055-2.5078-12.152-2.5078s-9.6562 3.8828-8.8594 8.7617c0.79688 4.875 7.0039 11.129 9.3398 13.461 2.3359 2.3555-0.16406 7.1328-5.957 7.1328h-11.27s-7.8867 7.8008-2.5742 14.934c5.3125 7.1328 8.8594 10.703 8.8594 10.703v5.0273h-6.7617s-9.4141 3.0781-9.4141 9.4922c0 6.4141 6.3594 15 10.703 15s-0.23828 4.6367-0.23828 4.6367l-12.316 2.3555v9.4023s5.6406 9.25 9.9805 10.059c4.3438 0.80859 0.48047 6.6562 0.48047 6.6562-0.007812 0.007812-11.898 0.52344-11.898 5.7266 0 5.1914 3.3828 9.7305 9.0234 11.027s5.6406 3.25 5.6406 3.25l-0.97266 3.8828s-11.434 4.7109-10.625 10.551c0.80859 5.8477 9.0117 11.039 13.68 11.039 4.668 0 6.043 3.4805 0.80859 6.3281-5.2266 2.8359-8.8594 5.1914-8.8594 9.7422 0 4.5391 5.1484 8.9141 10.309 10.551 5.1484 1.6133 7.7227 0.16406 5.1484 4.5391-2.5742 4.375-10.297 6.1641-9.5781 11.445s2.0078 7.6914 7.1562 9.4688c5.1484 1.7891 4.9844 3.4141 8.2031 3.4141s2.8164 2.6719 0.64453 4.8555c-2.1719 2.1914-9.1758 7.3086-9.1758 11.191 0 3.8945 6.9258 8.7617 10.297 8.7617 3.3945 0 4.2656-0.56641 4.832 0 0.56641 0.57812 0.96094 8.7695 0.96094 8.7695s-10.133 3.7305-8.5312 8.5977c1.6055 4.8672 6.4375 8.2812 9.0117 9.0859 2.5742 0.80859 7.4062 1.9531 9.9805 1.9531s-6.4375 11.52-7.5586 14.434c-1.1328 2.9336 3.0547 7.1328 4.418 8.5195 1.375 1.375 3.457 1.375 6.1953 1.375h4.5039s-7.4062 7.8008-7.4062 13.309c0 5.5195 4.1875 8.9219 7.7227 7.7891 3.5469-1.1328 5.957-1.1328 5.957-1.1328v7.2969s-3.5469 3.7422-3.5469 6.6445c0 2.9219 2.0938 7.875 4.9102 7.875 2.8164 0 7.0781 2.5859 3.7852 5.9141-3.3047 3.3398-3.3047 5.5195-3.3047 7.1445s0.85156 2.4766 1.4492 3.0781c0.60938 0.62109 4.7578 1.4609 5.5508 1.4609 0.79688 0 1.6055 5.5195 1.6055 5.5195s-4.582 2.7695-4.582 4.6367c0 1.8672 4.9102 6.4023 6.5234 6.4023 1.6055 0 3.0547 5.6836 3.0547 5.6836s-6.7617 2.2812-5.3125 5.3672c1.4492 3.0781 5.3125 5.3438 6.1211 5.3438s0.80859 6.1523 0.80859 6.1523l-6.7617 2.5742 0.80859 6.8164h5.3125s3.2188-3.7305 3.2188 2.9336-9.3398 7.9531-9.3398 12.031c0 4.0352 6.918 2.75 6.918 7.7773 0 5.0273-2.1719 5.2578-4.8203 7.9531-2.6602 2.6719 7.7227 4.7109 3.5352 8.9023-4.1875 4.2344-3.0859 13.168 0.12109 18.055 2.4883 2.7383-6.7305 8.3555-5.8906 13.559 0.52344 3.2305 4.7109-3.1094 5.3242 1.3086 0.32812 2.3672 0.31641 2.2461 0.67578 4.8672 0.55469 4.1562-2.8672 11.227-2.2695 15.852 0.42578 3.25 5.2148 6.5898 5.6523 9.9727 0.40234 3.1094-3.5469 6.25-3.1406 9.4023 0.51172 4.0586 5.3984 8.1289 5.9141 12.133 0.5 3.8633-4.3633 8.6289-3.8711 12.328 0.62109 4.6133 6.5898 8.0938 7.1875 12.25 0.45703 3.2852-2.6289 6.3828-2.1914 9.25 1.6484 10.723 6.6328 18.086 7.6367 19.102 4.1797 4.2422 11.27 15.578 12.719 17.051 1.4492 1.4609 3.5469 4.9727 3.5469 4.9727h0.69922l298.76-0.023438s3.8711-9.3047 6.6445-12.086c2.793-2.8242 29.738-15.043 31.57-16.887 1.8203-1.8438 19.32-52.996 24.031-64.035 4.7109-11.039 17.824-35.477 19.766-61.43 1.9219-25.973-2.8047-50.629-8.5859-64.035-5.793-13.406-18.871-35.488-28.344-45.012-9.4375-9.5117-72.973-60.133-76.844-64.027-3.8633-3.8945-57.949-47.16-60.109-49.32-2.1367-2.1602-24.469-18.164-24.469-18.164l-1.2227-14.77s-11.914-9.7422-9.3164-15.414c2.5742-5.6719 9.9062-8.7617 24.73-8.7617h42.949c8.3672 0 32.836 6.6992 37.973 6.6992s20.805 1.0781 25.113 3.4492c4.3086 2.3906 26.398 35.922 32.203 38.082 5.7812 2.1602 12.438 2.1602 16.527 2.1602s11.379-4.7656 12.883-4.7656c1.5273 0 7.0586 5.6289 10.723 5.6289 3.6641 0 8.1602-1.2969 9.8633-3.0234 1.7227-1.7344 1.0703-6.2852-7.0703-14.5-8.1367-8.2266-24.457-24.656-32.836-28.984-8.3789-4.3203-13.941-6.2734-13.941-7.9961 0-1.7344 0.83984-8.8672 8.2578-10.059 7.4062-1.1875 21.59 3.1328 26.289 5.2891 4.7109 2.1602 20.598 13.406 24.031 14.922 3.4258 1.5156 13.078 9.5234 18.664 7.9961 5.5625-1.4844 5.5625-6.8867 5.5625-10.137 0-3.2383-4.5039-11.684-4.5039-14.062s4.5039-10.156 4.5039-14.062z"/>
      </svg>`;
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
        this.img = `<svg width="1200pt" height="1200pt" version="1.1" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg" fill="${colors[this.player]}">
        <path d="m818.18 1025.5h-436.37c-24.098 0-43.637 19.539-43.637 43.637s19.539 43.637 43.637 43.637h436.36c24.098 0 43.637-19.539 43.637-43.637s-19.535-43.637-43.633-43.637z"/>
        <path d="m414.55 1003.6h370.91c24.098 0 43.637-19.539 43.637-43.637s-19.539-43.637-43.637-43.637h-370.91c-24.098 0-43.637 19.539-43.637 43.637s19.539 43.637 43.637 43.637z"/>
        <path d="m720 894.55s-60-139.96-60-240c0-10.473 0.65625-21.492 1.9648-32.727l-123.93-0.003906c1.3086 11.238 1.9648 22.254 1.9648 32.727 0 100.04-60 240-60 240z"/>
        <path d="m681.82 600c9.0547 0 16.363-9.8164 16.363-21.816s-7.3086-21.816-16.363-21.816h-163.64c-9.0547 0-16.363 9.8164-16.363 21.816s7.3086 21.816 16.363 21.816z"/>
        <path d="m490.91 534.55h218.18c12 0 21.816-9.8164 21.816-21.816s-9.8164-21.816-21.816-21.816l-218.18-0.003906c-12 0-21.816 9.8164-21.816 21.816-0.003906 12 9.8164 21.82 21.816 21.82z"/>
        <path d="m638.18 114.55c0-21.055-17.129-38.184-38.184-38.184s-38.184 17.129-38.184 38.184 17.129 38.18 38.184 38.18 38.184-17.125 38.184-38.18z"/>
        <path d="m500.73 469.09h198.55c11.344-32.617 20.727-54.547 20.727-54.547h-24.98c15.711-27.383 24.98-61.855 24.98-99.273 0-51.926-18-98.184-46.035-127.96l-41.453 196.8c-1.0938 5.1328-5.6758 8.6211-10.695 8.6211-0.76172 0-1.5273-0.10937-2.2891-0.21875-5.8906-1.3086-9.6016-7.0898-8.4102-12.98l43.637-207.27c0.12109-0.4375 0.23047-0.87109 0.4375-1.3086-16.465-11.672-35.336-18.219-55.191-18.219-66.219 0-120 72.762-120 162.55 0 37.418 9.2734 71.891 24.98 99.273h-24.98s9.3828 21.926 20.727 54.543z"/>
      </svg>`;
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
        this.img = `<svg width="1200pt" height="1200pt" version="1.1" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg" fill="${colors[this.player]}">
          <path d="m818.18 991.72h-436.37c-24.098 0-43.637 19.758-43.637 44.129 0.003906 24.371 19.539 44.148 43.637 44.148h436.36c24.098 0 43.637-19.777 43.637-44.148 0-24.371-19.535-44.129-43.633-44.129z"/>
          <path d="m414.55 969.66h370.91c24.098 0 43.637-19.758 43.637-44.129s-19.539-44.148-43.637-44.148h-370.91c-24.098 0-43.637 19.777-43.637 44.148s19.539 44.129 43.637 44.129z"/>
          <path d="m480 395.86-43.637 463.45h327.27l-43.637-463.45z"/>
          <path d="m512.73 208.28v-88.277h-87.273v88.277z"/>
          <path d="m643.64 208.28v-88.277h-87.273v88.277z"/>
          <path d="m774.55 208.28v-88.277h-87.273v88.277z"/>
          <path d="m752.73 373.8 21.82-143.46h-349.09l21.82 143.46z"/>
        </svg>`;
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
        this.img = `<svg width="1200pt" height="1200pt" version="1.1" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg" fill="${colors[this.player]}">
        <path d="m818.15 938.18h-436.33c-23.902 0-43.637 19.223-43.637 43.637 0 24.402 19.734 43.637 43.637 43.637h436.36c23.902 0 43.637-19.234 43.637-43.637 0-24.418-19.766-43.637-43.668-43.637z"/>
        <path d="m414.55 916.36h370.91c23.902 0 43.637-19.234 43.637-43.637 0-24.414-19.734-43.637-43.637-43.637h-370.91c-23.902 0-43.637 19.223-43.637 43.637 0 24.406 19.734 43.637 43.637 43.637z"/>
        <path d="m720 807.27s-58.406-144.62-58.406-245.95c0-10.613 0.64453-26.301 1.9531-37.691h-122.97c1.2969 11.391 1.9531 27.078 1.9531 37.691 0 101.32-62.531 245.95-62.531 245.95z"/>
        <path d="m677.27 502.1c8.5508 0 15.457-9.8164 15.457-21.816 0-12.012-6.9062-21.816-15.457-21.816l-154.54-0.003906c-8.5508 0-15.457 9.8086-15.457 21.816 0 12 6.8945 21.816 15.457 21.816z"/>
        <path d="m495.46 436.36h209.09c11.5 0 20.914-9.8164 20.914-21.816s-9.4141-21.816-20.914-21.816l-209.09-0.003907c-11.488 0-20.914 9.8164-20.914 21.816 0.003906 12.004 9.418 21.82 20.914 21.82z"/>
        <path d="m518.28 274.96c2.2891-0.88281 4.6914-1.6562 7.2891-2.3125 0.83984-0.32812 1.7773-0.4375 2.707-0.4375 2.7148 0 5.3242 1.1016 7.2969 3.0859 2.082 2.2031 3.1328 5.0625 3.1328 8.0508 0 0.4375 0 0.98047-0.10938 1.418 0 6.0664 4.6914 11.027 10.418 11.027s10.418-4.9648 10.418-11.027c0-1.5391-0.31641-3.0781-1.0469-4.625-1.3633-3.1953-1.2539-6.9492 0.41406-10.145 1.668-3.0781 4.6914-5.0625 8.0195-5.3984 4.5938-0.55469 9.0781-0.99219 13.758-1.1016h0.20703c3.1328 0 6.043 1.4297 8.0195 3.9727 1.9727 2.6406 2.8164 6.0547 2.1836 9.3594-0.20703 1.0039-0.30469 1.7656-0.30469 2.4336 0 6.0547 4.6914 11.02 10.418 11.02 5.7266 0 10.418-4.9648 10.418-11.02 0-0.67578-0.097656-1.4297-0.29297-2.4336-0.63281-3.3047 0.085938-6.7188 2.1836-9.3594 1.9727-2.543 4.8867-3.9727 8.0078-3.9727h0.20703c4.6914 0.10938 9.1641 0.54688 13.758 1.1016 3.3398 0.32813 6.3594 2.3125 8.0078 5.3984 1.6562 3.0977 1.7773 6.9492 0.42578 10.145-0.71875 1.5508-1.0469 3.0859-1.0469 4.625 0 6.0664 4.6797 11.027 10.395 11.027 5.6406 0 10.32-4.8555 10.43-11.027-0.42578-3.5234 0.62109-6.9375 3.0234-9.4805 1.9727-1.9844 4.582-3.0859 7.2891-3.0859 0.92578 0 1.8672 0.10938 2.6953 0.4375 2.6055 0.66406 5.0078 1.4297 7.2969 2.3125 2.0742 0.66406 4.1562 1.4297 6.0312 2.3125 1.5586 0.65625 2.9141 1.8672 3.9609 3.1953-1.3438-7.9414-4.4727-15.438-8.957-22.277-1.3516-2.0938-2.8164-4.0703-4.4844-5.9453-16.449-20.172-45.809-33.621-79.344-33.621-33.535 0-62.891 13.449-79.344 33.621-1.6562 1.875-3.1211 3.8633-4.4727 5.9453-4.4844 6.7305-7.5039 14.215-8.957 22.047 1.1445-1.3203 2.3906-2.3125 3.9609-2.9688 1.9297-0.86719 4.0117-1.6445 5.9883-2.2969z"/>
        <path d="m621.91 196.59c0-12.121-9.3594-22.047-20.836-22.047-11.445 0-20.824 9.9258-20.824 22.047s9.3828 22.035 20.824 22.035c11.465 0 20.836-9.918 20.836-22.035z"/>
        <path d="m486.39 318.11v0.12109c0.31641 0.64453 0.52344 1.3203 0.9375 2.2031 3.1211 8.1602 9.9922 26.344 17.902 50.477h189.52c7.9297-24.141 14.781-42.316 17.922-50.477 0.40234-0.67578 0.71875-1.4414 0.92578-2.2031v-0.12109c0.10938-0.32812 0.31641-0.77344 0.42578-1.1133 0.31641-0.76172 0.51172-1.2109 0.51172-1.2109h-10.395c-4.1797 0-8.0195-1.2109-11.148-3.4141-1.2539-0.89453-2.3906-1.875-3.4375-2.9883-3.8516-3.9609-6.2383-9.4805-6.2383-15.645 0-1.5586 0.10938-3.0977 0.52344-4.5273 0.21875-1.3203 0.52344-2.6523 1.0469-3.8633-1.7656-0.77344-3.6445-1.4297-5.5312-2.0938-2.0625-0.77344-4.2656-1.4297-6.5469-2.0938 0.097656 0.4375 0.097656 0.99219 0.097656 1.5391 0 12.121-9.2734 22.047-20.836 22.047-11.551 0-20.816-9.9258-20.816-22.047 0-3.3047 0.73047-6.3828 1.9844-9.25-4.1797-0.4375-8.5312-0.88281-12.918-1.0039 0.31641 1.5508 0.52344 3.0977 0.52344 4.7578 0 12.121-9.2734 22.035-20.836 22.035-11.445 0-20.824-9.918-20.824-22.035 0-1.6562 0.20703-3.1953 0.52344-4.7578-4.375 0.12109-8.7383 0.56641-12.918 1.0039 1.2539 2.8672 1.9727 5.9453 1.9727 9.25 0 12.121-9.3594 22.047-20.824 22.047-11.445 0-20.816-9.9258-20.816-22.047 0-0.54688 0-1.1016 0.085938-1.5391-2.2812 0.66406-4.4727 1.3203-6.5664 2.0938-1.8672 0.66406-3.7422 1.3203-5.5078 2.0938 0.52344 1.2109 0.82812 2.543 1.0469 3.8633 0.41406 1.4297 0.51172 2.9688 0.51172 4.5273 0 6.1641-2.3906 11.672-6.2383 15.645-1.0469 1.1133-2.1836 2.0938-3.4492 2.9883-3.2305 2.2031-7.0703 3.4141-11.129 3.4141h-10.43s0.21875 0.44922 0.52344 1.2109c0.10938 0.33984 0.31641 0.78516 0.41797 1.1133z"/>
      </svg>`;
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
        this.img = `<svg width="1200pt" height="1200pt" version="1.1" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg" fill="${colors[this.player]}">
        <path d="m818.18 1003.6h-436.37c-24.109 0-43.637 19.527-43.637 43.637 0 24.109 19.527 43.637 43.637 43.637h436.36c24.109 0 43.637-19.527 43.637-43.637 0-24.109-19.527-43.637-43.633-43.637z"/>
        <path d="m414.55 981.82h370.91c24.109 0 43.637-19.527 43.637-43.637 0-24.109-19.527-43.637-43.637-43.637l-370.91 0.003906c-24.109 0-43.637 19.527-43.637 43.637 0 24.105 19.527 43.633 43.637 43.633z"/>
        <path d="m665.45 610.91c0-10.582-1.0898-21.602 0-32.727h-130.91c1.0898 11.129 0 22.145 0 32.727 0 109.09-65.453 261.82-65.453 261.82h261.82s-65.457-152.73-65.457-261.82z"/>
        <path d="m518.18 512.73c-9.0547 0-16.363 9.8164-16.363 21.816s7.3086 21.816 16.363 21.816h163.64c9.0547 0 16.363-9.8164 16.363-21.816s-7.3086-21.816-16.363-21.816z"/>
        <path d="m490.91 490.91h218.18c12 0 21.816-9.8164 21.816-21.816s-9.8164-21.816-21.816-21.816l-218.18-0.003906c-12 0-21.816 9.8164-21.816 21.816-0.003906 12 9.8164 21.82 21.816 21.82z"/>
        <path d="m567.27 283.64h65.453l-21.816-76.363 76.363 21.816v-65.453l-76.363 21.816 21.816-76.363h-65.453l21.816 76.363-76.363-21.816v65.453l76.363-21.816z"/>
        <path d="m501.82 425.45h196.36c9.4922-28.582 22.801-51.816 28.035-64.801 2.9492-7.4141 4.6953-11.562 4.6953-11.562 0-24.109-58.582-43.637-130.91-43.637s-130.91 19.527-130.91 43.637c0 0 1.7461 4.1445 4.6914 11.562 5.2383 12.984 18.547 36.219 28.035 64.801z"/>
      </svg>`;
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

const colors = {
    "1": "#556472",
    "-1": "#58D68D"
}

const pieces = [new Pawn(-1),new Pawn(-1),new Pawn(-1),new Pawn(-1),new Pawn(-1),new Pawn(-1),new Pawn(-1),new Pawn(-1),new Rook(-1),new Bishop(-1),new Knight(-1),new King(-1),new Queen(-1),new Knight(-1),new Bishop(-1),new Rook(-1),new Pawn(1),new Pawn(1),new Pawn(1),new Pawn(1),new Pawn(1),new Pawn(1),new Pawn(1),new Pawn(1),new Rook(1),new Bishop(1),new Knight(1),new Queen(1),new King(1),new Knight(1),new Bishop(1),new Rook(1)];

// State variables
let turn;
let turnNum;
let board;

// VIEW

const boardEl = document.getElementById("board");
const boardEls = [...document.querySelectorAll('#board > div')]
const scoreWhtEl = document.getElementById("wht-score");
const scoreLabelWhtEl = document.getElementById("wht-score-label");
const scoreBlkEl = document.getElementById("blk-score");
const scoreLabelBlkEl = document.getElementById("blk-score-label");
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
        [pieces[30],pieces[22],null,null,null,null,pieces[1],pieces[9]],
        [pieces[29],pieces[21],null,null,null,null,pieces[2],pieces[10]],
        [pieces[28],pieces[20],null,null,null,null,pieces[3],pieces[11]],
        [pieces[27],pieces[19],null,null,null,null,pieces[4],pieces[12]],
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
        spaceElsArr[i].innerHTML = "";
        if (boardArrItem) spaceElsArr[i].innerHTML = boardArrItem.img;                       
    }
    changeScore();
}

const selectPiece = (controller, space, colIdx, rowIdx, target) => {
  if (!space || space.player != turn) {
      error("player selected no piece or opponent's piece");        
      return
    }    
    target.classList.add("board__space--highlight");
    controller.piece = space;
    controller.pieceColNum = colIdx;
    controller.pieceRowNum = rowIdx;
}

const checkMove = (controller, colIdx, rowIdx, target) => {
    if (board[colIdx][rowIdx] && (board[colIdx][rowIdx].player === controller.piece.player)) {
        if (board[colIdx][rowIdx] === controller.piece) {
            currentMove = {};
            target.classList.remove("board__space--highlight");
            return
        }
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
    let pieceTaken;
    if (board[colIdx][rowIdx]) pieceTaken = board[colIdx][rowIdx];
    const pieceCopy = Object.assign(currentMove.piece);
    const spaceCopy = Object.assign([], board[colIdx][rowIdx]);
    board[colIdx][rowIdx] = currentMove.piece;    
    board[currentMove.pieceColNum][currentMove.pieceRowNum] = null;
    if (validateCheck()) {
        board[colIdx][rowIdx] = spaceCopy;
        board[currentMove.pieceColNum][currentMove.pieceRowNum] = pieceCopy;
        return
    }     
    
    board[colIdx][rowIdx].movesNum ++;
    
    if (pieceTaken) pieceTaken.inPlay = false;

    turn *= -1;
    currentMove = {};
    render();
}

boardEl.addEventListener("click", e => {
    let target = e.target;      
    if (target instanceof SVGElement) {
        if (target.parentElement instanceof SVGElement) {
            target = target.parentElement.parentElement;
        } else {
            target = target.parentElement;
        }
    }    

    boardElIdx = boardEls.indexOf(target);
    if (boardElIdx === -1) {
        error("did not click on board");
        return
    }
    const colIdx = boardElIdx % 8;
    const rowIdx = (boardElIdx - colIdx) / 8;
    const boardArrItem = board[colIdx][rowIdx];

    if (currentMove.piece) {    
        if (checkMove(currentMove, colIdx, rowIdx, target)) {            
            boardEls[((currentMove.pieceRowNum * 8) + currentMove.pieceColNum)].classList.remove("board__space--highlight");
            move(colIdx, rowIdx);
        }
    } else {        
        selectPiece(currentMove, boardArrItem, colIdx, rowIdx, target);        
    }    
})

function showScore(score) {
    if (score > 0) {
        return `+${score}`
    } else if (score < 0) {
        return score
    } else return "Even"
}

const changeScore = () => {    
    let score = 0;
    scoreWhtEl.innerHTML = "";
    scoreBlkEl.innerHTML = "";
    for (let piece of pieces) {
        if (!piece.inPlay) {
            const pieceLI = document.createElement("li");                        
            console.log(piece.pointValue);
            pieceLI.innerHTML = piece.img;
            pieceLI.innerHTML = piece.img;
            if (piece.player === 1) {                
                scoreWhtEl.appendChild(pieceLI);   
                score += piece.pointValue;                     
            } else {
                scoreBlkEl.appendChild(pieceLI);     
                score -= piece.pointValue;
            }
        }
    }         
        scoreLabelWhtEl.innerText = showScore(score);
        scoreLabelBlkEl.innerText = showScore(score * -1);
    
}

init();
render();