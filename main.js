/*
Hide cursor when a key is pressed. Un-hide when mouse is moved.
*/
var lastMove = 0;

var mouseMoveListener = function () {
    // do nothing if last move was less than 50 ms ago
    if(Date.now() - lastMove > 50) {
        document.body.style.cursor = "default";
        lastMove = Date.now();
    }
};

var keyPressListener = function () {
    document.body.style.cursor = "none";
};

document.addEventListener('mousemove', mouseMoveListener, false);
document.addEventListener('keypress', keyPressListener, false);
