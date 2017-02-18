(function () {
    "use strict";

    $('#myMandala').on('touchstart', function (e) {
        e.preventDefault();
        $('#console').text('touch start!');

    });

    console.log('hello world');
})();
