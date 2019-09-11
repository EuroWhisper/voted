const mongoose = require('mongoose');

const pollSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        lowercase: true,
        enum: [
            "movies",
            "television",
            "music",
            "gaming",
            "sports",
            "culture",
            "politics"
        ]
    },
    // TODO: CHECK HOW TO ENSURE THAT OPTIONS ARRAY ITEMS ARE STRINGS
    options: {
        type: [
            {
                description: {
                    type: String,
                    required: true
                },
                votes: {
                    type: Number,
                    required: true,
                    default: 0,
                    min: 0
                }
            }
        ]
    }
});

pollSchema.path('options').validate((options) => {
    if (!options) {
        return false;
    } else if (options.length < 2 || options.length > 20) {
        return false;
    }
}, 'The poll must contain at least 2 voting options, but no more than 20.');

const Poll = mongoose.model('Poll', pollSchema);

module.exports = Poll;