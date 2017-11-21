var canvas = document.getElementById("board");
var ctx = board.getContext("2d");
ctx.fillStyle = "#FFFFFF";
for (var r = 0; r < 8; r++) {
    for (var c = 0; c < 8; c++) {
        if (r % 2 === 0 && c % 2 === 0) {
            ctx.fillRect(40 * r, 40 * c, 40, 40);
        }
        if (r % 2 !== 0 && c % 2 !== 0) {
            ctx.fillRect(40 * r, 40 * c, 40, 40);
        }
    }
}
var blackPawn = document.getElementById('blackPawn');
var whitePawn = document.getElementById('whitePawn');
for (var i = 0; i < 8; i++) {
    ctx.drawImage(whitePawn, 40 * i, 240, 40, 40);
    ctx.drawImage(blackPawn, 40 * i, 40, 40, 40);
}
var whiteKnight = document.getElementById('whiteKnight');
var whiteBishop = document.getElementById('whiteBishop');
var whiteRook = document.getElementById('whiteRook');
var whiteQueen = document.getElementById('whiteQueen');
var whiteKing = document.getElementById('whiteKing');
ctx.drawImage(whiteKnight, 40, 280, 40, 40);
ctx.drawImage(whiteKnight, 240, 280, 40, 40);
ctx.drawImage(whiteRook, 280, 280, 40, 40);
ctx.drawImage(whiteRook, 0, 280, 40, 40);
ctx.drawImage(whiteBishop, 200, 280, 40, 40);
ctx.drawImage(whiteBishop, 80, 280, 40, 40);
ctx.drawImage(whiteQueen, 120, 280, 40, 40);
ctx.drawImage(whiteKing, 160, 280, 40, 40);
ctx.drawImage(blackKnight, 40, 0, 40, 40);
ctx.drawImage(blackKnight, 240, 0, 40, 40);
ctx.drawImage(blackRook, 280, 0, 40, 40);
ctx.drawImage(blackRook, 0, 0, 40, 40);
ctx.drawImage(blackBishop, 200, 0, 40, 40);
ctx.drawImage(blackBishop, 80, 0, 40, 40);
ctx.drawImage(blackQueen, 120, 0, 40, 40);
ctx.drawImage(blackKing, 160, 0, 40, 40);
$('#board').on('click', function (event) {
    var xPos = this.getBoundingClientRect().left;
    var yPos = this.getBoundingClientRect().top;
    var X = Math.ceil((event.clientX - xPos) / 40);
    var Y = 8 - Math.floor((event.clientY - yPos) / 40);
    console.log('You clicked ' + X + ',' + Y);
    outlineRect(this, [40 * (X - 1), 40 * (8 - Y)]);
    // clearRect(this, [40 * (X - 1), 40 * (8 - Y)],'#FFFFFF');
});
function outlineRect(canvas, position) {
    var ctx = canvas.getContext('2d');
    ctx.rect(position[0] + 1, position[1] + 1, 38, 38);
    ctx.lineWidth = "2";
    ctx.strokeStyle = "red";
    ctx.stroke();
}
function clearRect(canvas, position, color) {
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = color;
    ctx.fillRect(position[0],position[1],40,40);
}