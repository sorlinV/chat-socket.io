let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);
let path = require('path');

app.get('/client.js', function(req, res) {
    res.sendfile(path.join(__dirname, '..', '/client/client.js'));
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
    socket.on('chat message', function(msg) {
        io.emit('chat message', msg);
        console.log(msg);
    });
});

http.listen(3000, function() {
    console.log('listening on *:3000');
});