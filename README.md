# ES6 Timer class

## OO delayable interval timer

I've made this class because the setTimeout or setInterval weren't enough, or are not comfortable to use when you just need to pause or delay your timer.
This is an object oriented approach for a delayable interval timer with event manager capabilities.

Here is an example on how to use it:

```javascript
var Timer = require('@codexp/timer');

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
```

Run test script:

```bash
$ npm install @codexp/timer
$ node test
```
