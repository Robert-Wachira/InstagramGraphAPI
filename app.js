const express = require('express');
const bodyParser = require('body-parser');
const { ApolloServer } = require("apollo-server-express");
require("dotenv").config();
const PORT = process.env.PORT || 5000;


const typeDefs = require('./schema');
const resolvers = require('./resolver/index');
const app = express();
app.use(bodyParser.json());

const server = new ApolloServer({ typeDefs, resolvers });
server.start().then(() => {
  return server.applyMiddleware({ app });
});

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
