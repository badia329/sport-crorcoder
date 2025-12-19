const mongoose = require('mongoose')
const playerSchema = mongoose.Schema({
    name: String,
    age: Number,
    position: String,
    number: Number,
    // tId: FK (da valeur est récupéerée d'un Team)
    // tId: de type ObjectId
    teamId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team"
    }
});

const player = mongoose.model("Player", playerSchema)
module.exports = player;