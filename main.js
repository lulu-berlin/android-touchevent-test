(function () {
    "use strict";

    var canvas = document.getElementById('myMandala');
    var ctx = canvas.getContext("2d");
    canvas.height = window.innerHeight-35;
    canvas.width = window.innerHeight-35;
    var w = canvas.width;
    var h = canvas.height;

    $('canvas').on('touchstart', function (e) {
        e.preventDefault();
        $('#console').text('touch start!');

    });

    console.log('hello world');
})();
