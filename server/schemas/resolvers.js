const Game = require('../models/games');


const resolvers = {
    Query: {
        // find all games in query using find
        games: async () => {return Game.find();},

        game: async (parent, args) => {return Game.findById(args.id)} 
    }
}

module.exports = resolvers;