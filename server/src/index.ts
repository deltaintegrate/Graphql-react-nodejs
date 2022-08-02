import  app  from './app';
import { connectDB } from './database/db';

import { PORT } from './config';

async function main() {
    try {
        await connectDB();
        app.listen(PORT);
        console.log("LISTEN PORT ",PORT);
    } catch (error) {
        console.log(error);
        
    }
}

main();