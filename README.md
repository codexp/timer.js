#class Timer

## OO Delayable Timer

I've made this class because the setTimeout or setInterval weren't enough, or are not comfortable to use when you just need to pause or delay your timer.
This is an object oriented approach for a delayable interval timer with event manager capabilities.

Here is an example on how to use it:

```JS
    var Timer require('@codexp/timer');
    // create a timer with 3 seconds interval
    var timer = new Timer(3000);
    
    // bind event handler
    timer
        .on('timer', function () {
            if ($app.autoConnect && !client.connected) {
                client.connect(PORT, HOST);
                this.delay(5000);
            }
        }.bind(autoConnector))
        .start();
```