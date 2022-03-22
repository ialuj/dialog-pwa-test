import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "../schema/schema";

import cors from "cors";

import env from "dotenv";

env.config(); // {path: "path/to/file"}

const app = express();

const expressGraphQL = graphqlHTTP;

const corsOptions = {
    origin: 'http://localhost:3000', 
    optionsSuccessStatus: 200 
  }

app.use(cors(corsOptions));

app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}));

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server Started at ${process.env.SERVER_PORT}`);
})