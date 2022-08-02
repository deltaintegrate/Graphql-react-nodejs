import { GraphQLFloat } from 'graphql';
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