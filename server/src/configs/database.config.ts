import { connect, ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export const dbConnect = () => {

    console.log(`Connecting to ${process.env.CONNECTION_STRING}...`);

    connect(process.env.CONNECTION_STRING!, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    } as ConnectOptions).then(
        () => console.log("MongoDb Database connect successfully"),
        (error) => console.log('Database connection error', error)
    )
}