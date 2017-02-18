$(document).ready(function() {
    "use strict";

    var canvas = document.getElementById('myMandala');
    var ctx = canvas.getContext("2d");
    canvas.height = window.innerHeight - 35;
    canvas.width = window.innerHeight - 35;
    var w = canvas.width;
    var h = canvas.height;

    function eventToCanvasCoords(e) {
        return [e.targetTouches[0].clientX - canvas.offsetLeft, e.targetTouches[0].clientY - canvas.offsetTop];
    }

    $('canvas').on('touchstart', function(e) {
        e.preventDefault();
        $('#console').text('touch start!');
        var coords = eventToCanvasCoords(e);
        $('#details').text('x = ' + coords[0] + ', y = ' + coords[1]);
    });

    $('canvas').on('touchmove', function(e) {
        e.preventDefault();
        $('#console').text('touch move!');
        var coords = eventToCanvasCoords(e);
        $('#details').text('x = ' + coords[0] + ', y = ' + coords[1]);
    });

    $('canvas').on('touchend', function(e) {
        e.preventDefault();
        $('#console').text('touch end!');
        var coords = eventToCanvasCoords(e);
        $('#details').text('x = ' + coords[0] + ', y = ' + coords[1]);
    });

});
