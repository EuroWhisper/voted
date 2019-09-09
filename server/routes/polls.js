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

// Retrieve all polls
polls.get('/', (req, res) => {
//     I suggest you to use 2 queries:

// db.collection.count() will return total number of items. This value is stored somewhere in Mongo and it is not calculated.

// db.collection.find().skip(20).limit(10) here I assume you could use a sort by some field, so do not forget to add an index on this field. This query will be fast too.

// I think that you shouldn't query all items and than perform skip and take, cause later when you have big data you will have problems with data transferring and processing.


    // If request has no pagination params, return all polls.
    if (!req.body) {
        // TODO: Return all polls regardless of category and with no pagination.
        Poll.find({}).then((polls) => {
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
    }
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