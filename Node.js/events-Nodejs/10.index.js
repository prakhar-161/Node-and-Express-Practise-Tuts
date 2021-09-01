const EventEmitter = require('events');

const event = new EventEmitter();

event.on('sayMyName',() => {
    console.log('Your name is Shaun');
});

event.on('sayMyName',() => {
    console.log('Your name is Micheal');
});

event.on('sayMyName',() => {
    console.log('Your name is Joe');
});

event.on('checkpage',(sc,msg) => {
    console.log(`status code is ${sc} and the page is ${msg}`);
});

event.emit('sayMyName');
event.emit('checkpage',200,"ok");