var playerIcon = document.querySelector('body');
var picture = document.querySelector('img');
var btn = document.querySelector('button');
var kordinataX = 0;
var kordinataY = 0;
function move(e) {
    var x = e.clientX;
    var y = e.clientY;
    picture.style.left = x - 50 + 'px';
    picture.style.top = y - 50 + 'px';
    kordinataX = x - 50 + 'px';
    kordinataY = y - 50 + 'px';
}
playerIcon.addEventListener('click', move);
playerIcon.addEventListener('keydown', function () {
    if (event.Code === 39) {

        picture.style.left = kordinataX + 10 + 'px';
    }
})


function remove() {
    playerIcon.removeEventListener('click', move);
}

// btn.onclick = function() {
//     remove()
// };