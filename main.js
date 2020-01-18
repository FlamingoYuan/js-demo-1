var div1 = document.createElement('div');
div1.className = "demo";
document.body.appendChild(div1);

var dragging = false;
//记录前一次次鼠标的位置
var lastX;
var lastY;
//鼠标按下时的操作
div1.onmousedown = function (e) {
    lastX = e.clientX;
    lastY = e.clientY;
    dragging = true;
}
//鼠标移动时的操作
document.onmousemove = function (e) {
    if (dragging === true) {
        var deltaX = e.clientX - lastX;
        var deltaY = e.clientY - lastY;
        var top = parseInt(div1.style.top) || 0; //确保值为整数
        var left = parseInt(div1.style.left) || 0;
        var resultY = top + deltaY;
        var resultX = left + deltaX;

        if (resultY < 0) {
            resultY = 0;
        }
        if (resultX < 0) {
            resultX = 0;
        }

        div1.style.top = resultY + 'px';
        div1.style.left = resultX + 'px';

        lastX = e.clientX; //更新位置
        lastY = e.clientY;
    }
}
//鼠标松开时的操作
document.onmouseup = function () {
    dragging = false;
}
