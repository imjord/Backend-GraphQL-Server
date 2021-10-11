// express 
const express = require('express');
const app = express();

// db connection with mongodbo
const db = require('./config/connection');

// apollo 
const { ApolloServer } = require("apollo-server-express");

// import schema 
const {typeDefs, resolvers } = require('./schemas')

const PORT = process.env.PORT || 3001;

// make apollo server
const server = new ApolloServer({
    typeDefs,
    resolvers
})

async function startServer() {
    await server.start();
    server.applyMiddleware({ app })
}
startServer();

// MIDDLEWARE 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// OPEN DB CONNECTION AND LISTEN ON PORT 
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`api server running on port ${PORT}`);
    })
})