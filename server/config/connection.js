const mongoose = require('mongoose'); 


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/backend', {
    useNewUrlParser: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})

module.exports = mongoose.connection;