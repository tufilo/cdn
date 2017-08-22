function randomFromTo(from, to) {
    var numb = Math.floor(Math.random() * (to - from + 1) + from);
    return numb;
}

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            if (oldonload) {
                oldonload();
            }
            func();
        };
    }
}

addLoadEvent(function() {
    var a1 = [1, 7, 5, 2, 9, 3, 4, 8, 10, 6];
    for (var i = 0; i < 10; i++) {
        var t1 = setTimeout("document.getElementById('" + a1[i] + "').innerHTML='<img src=\"//cdn.tufilo.com/img/avloading.gif\" width=\"95\" height=\"10\">'", randomFromTo(2500, 3500));
    }
    for (var i = 0; i < 10; i++) {
        var t1 = setTimeout("document.getElementById('" + a1[i] + "').innerHTML='<img src=\"//cdn.tufilo.com/img/good.png\" />'", randomFromTo(6000, 10000));
    }
});
$(function () {
  $('[data-toggle="popover"]').popover()
});