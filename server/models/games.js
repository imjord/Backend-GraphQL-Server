const {Schema, model } = require("mongoose");


const gameSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    descrption: {
        type: String, 
        require: true
    }
})

const Game = model('Game', gameSchema);


module.exports = Game;