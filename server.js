var express = require('express'),
    app = express(),
    http = require('http'),
    socketIO = require('socket.io'),
    server, io;

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

server = http.Server(app);
server.listen(5000);

console.log("before start io socket");
io = socketIO(server);
console.log("after start io socket");

io.on('connection', function(socket) {
    var controllers = ['comments', 'posts'];
    console.log("start calling controller");
    for (var i = 0; i < controllers.length; i++) {
        require('./controllers/' + controllers[i] + '.controller')(socket);
    }
});