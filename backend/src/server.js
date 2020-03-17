const express = require('express');
const router = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');

const server = express();



mongoose.connect('yourLink', 
                { useNewUrlParser: true,
                  useUnifiedTopology: true
                });

server.use(cors());
server.use(express.json());
server.use(router);

server.listen(3333);
