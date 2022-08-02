import { GraphQLBoolean, GraphQLFloat, GraphQLID } from 'graphql';
import { Numeros } from '../../database/Entities/Numeros';
import { NumeroType } from '../../schema/typeDef/Numeros.typedef';

export const CREATE_NUMBER = {
    type: NumeroType,
    args: {
        numero1: {type: GraphQLFloat},
        numero2: {type: GraphQLFloat},
    },
    async resolve(_:any, args: any) {
        const {numero1, numero2} = args
        let multiply = numero1 * numero2;
        const result = await Numeros.insert({
            numero1: numero1.toString(),
            numero2: numero2.toString(),
            ResponseValue: multiply.toString()
        })


        return {...args, id: result.identifiers[0].id,ResponseValue: multiply }
    }
}

export const DELETE_NUMBER = {
    type: GraphQLBoolean,
    args: {
        id: { type: GraphQLID },
    },
    async resolve(_: any, {id}: any) {
        const result = await Numeros.delete(id);
        if(result.affected === 1) return true
        return false;
    }
}

export const DELETE_ALL_NUMBER = {
    type: GraphQLBoolean,
    args: {
        delete: { type: GraphQLBoolean },
    },
    async resolve(_: any, {args}: any) {
        const listall = await Numeros.find();
        const result = await Numeros.remove(listall)
        console.log(result);
        return false;
    }
}

