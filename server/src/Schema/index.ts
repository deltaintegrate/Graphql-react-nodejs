import { GraphQLSchema, GraphQLObjectType } from "graphql";
import {GET_ALL_NUMEROS} from './Queries/Numeros';
const RootQuery = new GraphQLObjectType({
    name:"RootQuery",
    fields: {
        getAllNumeros: GET_ALL_NUMEROS
    }
})

const Mutation = new GraphQLObjectType({
    name:"Mutation",
    fields: {}
})




export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})