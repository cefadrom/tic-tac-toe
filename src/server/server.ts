const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../web/index.html'));
});

app.use('/ts', express.static(path.join(__dirname, '../web/ts/')));
app.use('/css', express.static(path.join(__dirname, '../web/css/')));
app.use('/icons', express.static(path.join(__dirname, '../web/icons/')));

app.listen(80);
