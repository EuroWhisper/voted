const mongoose = require('mongoose');

console.log("connecting mongoose");
mongoose.connect('mongodb://localhost:27017/voted', {useNewUrlParser: true});