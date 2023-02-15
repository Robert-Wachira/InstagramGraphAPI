const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql').graphqlHTTP;
require("dotenv").config();
const PORT = process.env.PORT || 5000;


const graphQlSchema = require('./schema/index');
const graphQlResolvers = require('./resolver/index');

const app = express();

app.use(bodyParser.json());


app.use(
  '/graphql',
  graphqlHttp({
    //fix this part
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true
  })
);

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
