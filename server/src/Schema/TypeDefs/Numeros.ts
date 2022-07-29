import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLFloat } from "graphql";

export const NumerosType = new GraphQLObjectType({
    name: "Numeros",
    fields: () => ({
        id: {GraphQLID},
        Result: {GraphQLFloat},
    })
})