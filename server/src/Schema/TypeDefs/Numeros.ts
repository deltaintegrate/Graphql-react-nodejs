import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLFloat } from "graphql";

export const NumerosType = new GraphQLObjectType({
    name: "Numero",
    fields: () =>({
        id: {GraphQLID},
        Result: {GraphQLFloat},
    })
})