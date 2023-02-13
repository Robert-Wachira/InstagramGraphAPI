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
    // graphiql: true
    context: ({ req }) =>
    {
      const access_token = req.headers.ACCESS_TOKEN
      return { access_token };
    }
  })
);

// app.get('/get-auth-code', (req, res, next) =>
// {
//   return res.send(
//     `<a href='https://api.instagram.com/oauth/authorize?client_id=${process.env.APP_ID}&redirect_uri=${process.env.REDIRECT_URI}&scope=user_media,user_profile&response_type=code'> Connect to Instagram </a>`
//   );
// });

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
