const express = require('express');
const router = require('./routes');
const mongoose = require('mongoose');

const cors = require('cors');
require('dotenv').config();

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const connectedUsers = {
}

io.on('connection', socket => {
  const { user } = socket.handshake.query;

  connectedUsers[user] = socket.id;
});

mongoose.connect(process.env.MONGO_URL, 
                { useNewUrlParser: true,
                  useUnifiedTopology: true
                });

app.use((req, res, next) => {
  req.io = io;
  req.connectedUsers = connectedUsers;

  return next();
})

app.use(cors());
app.use(express.json());
app.use(router);

server.listen(process.env.PORT || 3333);
