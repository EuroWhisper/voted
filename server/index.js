const express = require('express');
const cors = require('cors');
const app = express();
const pollsRouter = require ('./routes/polls');
require('./db/mongoose');
app.use('/polls', pollsRouter);
app.use(cors());
app.use(express.json());




app.listen(3001);