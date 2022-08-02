import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql'

export const NumeroType = new GraphQLObjectType({
    name: 'Numbero',
    fields: {
        id: {type: GraphQLID},
        numero1: {type:GraphQLString},
        numero2: {type:GraphQLString},
        ResponseValue: {type:GraphQLString}
    }
})