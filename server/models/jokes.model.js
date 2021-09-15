const mongoose = require('mongoose');

const JokesSchema = new mongoose.Schema({
    // fields that a table (jokes here) would have
    content:{
        type: String,
        required:[true, "A joke is required!"],
        minlength: [5, "The joke must be longer than 5 characters"]
    },
    comedian:{
        type:String,
        required:[true, "Had to be said by somebody."]
    }
})

const Joke = mongoose.model("Joke", JokesSchema)

module.exports = Joke;