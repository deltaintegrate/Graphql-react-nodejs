import { createConnection } from 'typeorm';
import { Numeros } from './Entities/Numeros';

export const connectDB = async () => {
    await createConnection({
        type: 'mysql',
        username: 'root',
        password: '',
        port: 3306,
        host: 'localhost',
        database: 'graphqlCRUD',
        entities: [Numeros],
        synchronize: false,
        ssl: false
        
    })
}