const mongoose = require('mongoose')
const stadiumSchema = mongoose.Schema({
    name: String,
    capacity: Number,
    country: String,
    teamId: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "team"
        }
    ]
});
const stadium = mongoose.model("Stadium", stadiumSchema)
module.exports = stadium;