const {gql} = require('apollo-server-express');



const typeDefs = gql (`
type Mutation {
    addGame(title: String, description: String): Game
}



type Query {
    games: [Game]
    game(id: ID!): Game
}

type Game {
    _id: ID
    title: String
    description: String
}
`)


module.exports = typeDefs;