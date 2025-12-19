// import mongoose module
const mongoose = require('mongoose');
// create match schema
const matchShema = mongoose.Schema({
    scoreOne: Number,
    scoreTwo: Number,
    teamOne: String,
    teamTwo: String,
})
// ceare model name Match
const match = mongoose.model("Match", matchShema);
// export Match madel 
module.exports = match;