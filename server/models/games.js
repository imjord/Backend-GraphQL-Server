const {Schema, model } = require("mongoose");


const gameScheam = new Schema({
    title: {
        type: String,
        require: true
    },
    descrption: {
        type: String, 
        require: true
    }
})


module.exports = gameScheam;