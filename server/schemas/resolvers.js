const Game = require('../models/games.js');


const resolvers = {
    Query: {
        // find all games in query using find
        games: async () => {return Game.find();},

        game: async (parent, args) => {return Game.findById(args.id)} 
    },
    Mutation: {
        addGame: async (parent,args) =>{
            const game = await Game.create(args);
            return {game};
        }
    }
    
}

module.exports = resolvers;