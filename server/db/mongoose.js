const databaseURL = process.env.MONGODB_URI || 'mongodb://localhost:27017/voted';
const mongoose = require('mongoose');

console.log("connecting mongoose");
mongoose.connect(databaseURL, {useNewUrlParser: true});