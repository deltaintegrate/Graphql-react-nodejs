import  app  from './app';
import { connectDB } from './database/db';

async function main() {
    try {
        await connectDB();
        app.listen(3001);
        console.log("LISTEN PORT 3001");
    } catch (error) {
        console.log(error);
        
    }
}

main();