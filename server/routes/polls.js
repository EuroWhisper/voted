const polls = require('express').Router();
const Poll = require('../db/poll');

polls.get('/:category', (req, res) => {
    res.sendStatus(200);
});

// Create a new Poll
polls.post('/', (req, res) => {
    // If the request body is empty
    if (!req.body) {
        // Return 'Bad Request' status
        return res.sendStatus(400);
    }
    console.log(req.body);
    Poll.create(req.body).then((doc) => {
        console.log("Poll added");
        return res.sendStatus(200);
    }).catch((err) => {
        console.log(err);
        return res.sendStatus(500);
    });
});

// URL example: /polls/?skip=10
// Fetch 10 polls 
// skip: optional param for pagination.
polls.get('/', async (req, res) => {
    // 1. Set default skip value to 0 and limit number of items returned.
    let skip = 0;
    const limit = 10;
    // 2. Check if user has provided skip param with the request.
    if (req.query.skip) {
        // Convert the skip param value from string to int.
        skip = parseInt(req.query.skip);
    }
    // 3. Asyncronously get the total number of polls in collection
    const totalNumPolls = await Poll.estimatedDocumentCount();
    // 4. Create an offset that will result in newest polls being returned first
    // instead of the oldest polls being returned first.
    const offset = ((totalNumPolls - limit) - skip);

    // 5. Attempt to find a number of polls restricted by value of limit, 
    // and with the index offset as defined above.
    Poll.find().skip(offset).limit(limit).then((polls) => {
        //console.log(polls);
        // If no polls were found
        if (polls.length === 0) {
            // 6. Return 404 not found status.
            return res.sendStatus(404);
        }
        // 6. Return the found Polls, with 200 status code.
        return res.status(200).send(polls);
    // 5. If something went wrong 
    }).catch((err) => {
        // 6. Return 500 error code & error object.
        return res.status(500).send(error);
    });
});

// Retrieve all polls for a given category
polls.get('/category/:category', (req, res) => {
    // 1. Snatch the category from request params.
    const category = req.params.category;

    // 2. Attempt to find polls belonging to category from the DB.
    Poll.find({category: category}).then((polls) => {
        // 3. If no polls were found
        if (polls.length === 0) {
            // Return 404 not found status.
            return res.sendStatus(404);
        }

        // 3. If polls were found, return them.
        return res.send(polls);
    }).catch((err) => {
        // 4. Return 500 error & error object if something went wrong.
        return res.status(500).send(error);
    });
});

module.exports = polls;