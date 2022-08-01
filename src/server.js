const { createServer } = require('@graphql-yoga/node');
const resolvers = require('./resolvers');
const schema = require('./schema');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/graphqlnode', {
    useNewUrlParser: true,
})

const server = new createServer({
    schema: {
        typeDefs: schema,
        resolvers
    },
});

server.start();
