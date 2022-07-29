import {GraphQLList} from 'graphql';
import {NumerosType} from '../TypeDefs/Numeros';


export const GET_ALL_NUMEROS = {
    type: new GraphQLList (NumerosType),
    resolve() {
        return []
    }
}