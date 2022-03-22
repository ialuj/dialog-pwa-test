import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList, GraphQLNonNull } from "graphql";

const UserType: GraphQLObjectType = new GraphQLObjectType({
    name:'User',
    fields: () => ({
        _id: { type: GraphQLString },
        index: { type: GraphQLInt },
        picture: { type: GraphQLString },
        age: { type: GraphQLInt },
        eyeColor: { type: GraphQLString },
        name: { type: GraphQLString },
        company: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
        friends: {type: new GraphQLList(UserType)},
        greeting: { type: GraphQLString }
    })
});

export default UserType;