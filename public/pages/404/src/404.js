// Rotate gradient
var gradientRotate = 45;
setInterval(function () {
    gradientRotate ++;
    document.body.style.backgroundImage = 'linear-gradient(' + gradientRotate + 'deg, #0683C5, #E593FF)'
}, 50);