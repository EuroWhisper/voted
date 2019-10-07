const express = require('express');
const cors = require('cors');
const app = express();
const pollsRouter = require ('./routes/polls');
const voteRouter = require ('./routes/vote');

require('./db/mongoose');

app.use(cors());
app.use(express.json());

app.use('/polls', pollsRouter);
app.use('/vote', voteRouter);

const port = process.env.PORT || 3001
app.listen(port);