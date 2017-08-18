var d = new Date();
var n = d.getFullYear();

function copyRight() {
    document.querySelector('.indicia').innerHTML = '&copy; ' + n;
}

window.onload = function() {
    copyRight();
};