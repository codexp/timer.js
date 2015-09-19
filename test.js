var Timer = require('./timer');

var timer = new Timer(1000);
var counter = 0;

// bind event handler
timer
    .on('timer', function () {
        ++counter;
        if (0 === counter % 4) {
            console.log('delaying for 3 seconds');
            this.delay(3000);
        } else {
            console.log('timer');
        }
    }.bind(timer))
    .start();
