import { createConnection } from 'typeorm';
import { Numeros } from './Entities/Numeros';

import { DB_USERNAME, DB_PASSWORD,DB_HOST,DB_DATABASE, DB_PORT } from '../config';

export const connectDB = async () => {
    await createConnection({
        type: 'mysql',
        username: DB_USERNAME,
        password: DB_PASSWORD,
        port: Number(DB_PORT),
        host: DB_HOST,
        database: DB_DATABASE,
        entities: [Numeros],
        synchronize: false,
        ssl: false
        
    })
}