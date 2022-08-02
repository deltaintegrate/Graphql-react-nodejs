import { GraphQLSchema, GraphQLObjectType, GraphQLInputObjectType } from 'graphql';
import { NUMEROS } from './Queries/Numeros';
import { CREATE_NUMBER } from './Mutations/Numeros.mutations';
import { GET_ALL_NUMEROS, GET_NUMERO } from './Queries/Numeros.queries';


const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        numeros: NUMEROS,
        getAllNumbers: GET_ALL_NUMEROS,
        getNumber: GET_NUMERO
    }
})

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createNumber: CREATE_NUMBER
    },
})

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})