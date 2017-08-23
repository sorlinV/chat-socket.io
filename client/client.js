        var socket = io();
        socket.emit('test', 'test');
        document.querySelector('form').onsubmit = function(e) {
            let val = document.querySelector("#m");
            socket.emit('chat message', val.value);
            val.value = "";
            e.preventDefault();
        };

        socket.on('chat message', function(msg) {
            document.querySelector('#messages').innerHTML += '<li>' + msg + '</li>'
        });