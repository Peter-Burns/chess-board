var canvas = document.getElementById("board");
var ctx = canvas.getContext("2d");
var movePicks = 0;
var boardState = [
    ['blackRook', 'blackKnight', 'blackBishop', 'blackQueen', 'blackKing', 'blackBishop', 'blackKnight', 'blackRook'],
    ['blackPawn', 'blackPawn', 'blackPawn', 'blackPawn', 'blackPawn', 'blackPawn', 'blackPawn', 'blackPawn'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['whitePawn', 'whitePawn', 'whitePawn', 'whitePawn', 'whitePawn', 'whitePawn', 'whitePawn', 'whitePawn'],
    ['whiteRook', 'whiteKnight', 'whiteBishop', 'whiteQueen', 'whiteKing', 'whiteBishop', 'whiteKnight', 'whiteRook']
];
var positionHolder = [];
$('#board').on('click', function (event) {
    movePicks++;
    var xPos = this.getBoundingClientRect().left;
    var yPos = this.getBoundingClientRect().top;
    var X = Math.floor((event.clientX - xPos) / 40);
    var Y = Math.floor((event.clientY - yPos) / 40);
    positionHolder.push(Y, X);
    outlineRect(this, [40 * X, 40 * Y]);
    if (movePicks === 2) {
        movePicks = 0;
        if (validMove(positionHolder)) {
            movePiece(positionHolder);
            nextTurn();
        }
        drawBoard();
    }
});
function validMove(move) {
    return true;
}
function outlineRect(canvas, position) {
    ctx.beginPath();
    ctx.rect(position[0] + 1, position[1] + 1, 38, 38);
    ctx.lineWidth = "2";
    ctx.strokeStyle = "red";
    ctx.stroke();
}
function nextTurn() {
    var newTurn = Math.abs(parseInt($('#turnButton').attr('cy')) - 324);
    $('#turnButton').attr('cy', newTurn);
    if ($('#turnButton').attr('cy') == 22) {
        $('#turnButton').attr('fill', 'black');
    }
    else {
        $('#turnButton').attr('fill', 'white');
    }
}
function drawBoard() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(backBoard, 0, 0, 320, 320);
    for (var r = 0; r < 8; r++) {
        for (var c = 0; c < 8; c++) {
            if (boardState[r][c] !== '') {
                var piece = document.getElementById(boardState[r][c]);
                ctx.drawImage(piece, 40 * c, 40 * r, 40, 40);
            }
        }
    }
}
function newGame() {
    $('#takenPieces').empty();
    boardState = [
        ['blackRook', 'blackKnight', 'blackBishop', 'blackQueen', 'blackKing', 'blackBishop', 'blackKnight', 'blackRook'],
        ['blackPawn', 'blackPawn', 'blackPawn', 'blackPawn', 'blackPawn', 'blackPawn', 'blackPawn', 'blackPawn'],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['whitePawn', 'whitePawn', 'whitePawn', 'whitePawn', 'whitePawn', 'whitePawn', 'whitePawn', 'whitePawn'],
        ['whiteRook', 'whiteKnight', 'whiteBishop', 'whiteQueen', 'whiteKing', 'whiteBishop', 'whiteKnight', 'whiteRook']
    ];
    drawBoard();
    $('#turnButton').attr('cy', 302);
    $('#turnButton').attr('fill', 'white');
}
function movePiece(positions) {
    positionHolder = [];
    if(boardState[positions[2]][positions[3]]!==''){
        $('#takenPieces').append($(`<img src="assets/images/${boardState[positions[2]][positions[3]]}.svg" width='40' height='40'>`));
    }
    boardState[positions[2]][positions[3]] = boardState[positions[0]][positions[1]];
    boardState[positions[0]][positions[1]] = '';
}
$('#turnButton').on('click', function () {
    nextTurn();
});
$('#reset').on('click', function () {
    newGame();
});
newGame();