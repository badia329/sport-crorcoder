const mongoose = require('mongoose');
const teamSchema = mongoose.Schema({
    name: String,
    owner: String,
    foundation: String,
    stadiumId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Stadium"
    },
    playerId: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Player"
        }
    ]
});

const team = mongoose.model("Team", teamSchema);
module.exports = team;