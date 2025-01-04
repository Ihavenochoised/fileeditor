// Rotate gradient
var gradientRotate = 45;
setInterval(function () {
    gradientRotate ++;
    document.body.style.backgroundImage = 'linear-gradient(' + gradientRotate + 'deg, #0683C5, #E593FF)'
}, 50);
// Show header when it is on the top
var header = document.querySelector('.header');
var content = document.querySelector('.content');
window.onscroll = function () {
    if (window.scrollY > 0) {
        header.classList.add("sticky");
        header.style.backgroundColor = 'transparent';
        content.style.marginTop = `${header.offsetHeight + 10}px`;
    } else {
        header.classList.remove("sticky");
        header.style.backgroundColor = '#ffffff';
        content.style.marginTop = '0';
    }
};
header.onmouseover = function () {
    header.style.backgroundColor = '#ffffff';
};
header.onmouseout = function () {
    if (window.scrollY > 0) {
        header.style.backgroundColor = 'transparent';
    }
};
// Text Editor Option
var text = document.querySelector('.tool');
var picText = document.querySelector('.picTool');
text.onmouseover = function () {
    text.style.backgroundColor = '';
    picText.style.brightness = '200%';
};