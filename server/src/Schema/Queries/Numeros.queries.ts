import { GraphQLID, GraphQLList, GraphQLString } from 'graphql';
import { Numeros } from '../../database/Entities/Numeros';
import { NumeroType } from '../typeDef/Numeros.typedef';

export const GET_ALL_NUMEROS = {
    type: new GraphQLList(NumeroType),
    async resolve() {
        return await Numeros.find();;
    }

};

export const GET_NUMERO = {
    type: NumeroType,
    args: {
        id: {type: GraphQLID},
    },
    async resolve(_:any, args: any) {
        return await Numeros.findOneBy(args)
    }
}