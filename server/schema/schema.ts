import { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLList } from "graphql";
import axios from "axios";

import env from "dotenv";

import UserType from "../models/User";

env.config();

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields: () => ({
        users: {
            type: new GraphQLList(UserType),
            async resolve(parentValue, args) { 
                return await axios.get(`${process.env.DB_URL}`)
                .then(response => Promise.resolve(response.data))
                .catch(error => Promise.reject(error));
                                             }
        },
        user: {
                type: UserType,
                args: { _id: {type: GraphQLString} },
                async resolve(parentValue, args) { 
                    return await axios.get(`${process.env.DB_URL}/${args._id}`)
                    .then(response => Promise.resolve(response.data))
                    .catch(error => Promise.reject(error));
                                                 }
            }
    })
});

const schema = new GraphQLSchema({
    query: RootQuery
});

export default schema;

