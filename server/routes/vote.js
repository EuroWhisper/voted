const vote = require('express').Router();
const Poll = require('../db/poll');

// /vote/:id
// Increments the vote counter for the selected option 
// on a poll with any given id
vote.post('/:id', async (req, res) => {
    // 1. Grab the poll ID and the index of the selected option
    const pollID = req.params.id;
    const optionIndex = req.body.optionIndex;

    try {
        // 2. Fetch the selected poll by its unique ID.
        const selectedPoll = await Poll.findById(pollID);
        // 3. Increment the vote counter for the selected option.
        selectedPoll.options[optionIndex].votes += 1;
        // 4. Save the updated version of the poll.
        const result = await Poll.findOneAndUpdate({_id: pollID}, selectedPoll, { new: true });
        // 5. Return the updated poll with a 200 success status code.
        res.status(200).send(result);
    } catch (err) {
        // Something went wrong, return a 500 server error.
        res.sendStatus(500);
    }
});

module.exports = vote;