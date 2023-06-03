import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {

    const MONGODB_URL =
      `mongodb://${USERNAME}:${PASSWORD}@ac-it3pqeu-shard-00-00.kvwkjb9.mongodb.net:27017,ac-it3pqeu-shard-00-01.kvwkjb9.mongodb.net:27017,ac-it3pqeu-shard-00-02.kvwkjb9.mongodb.net:27017/?ssl=true&replicaSet=atlas-fj5omq-shard-0&authSource=admin&retryWrites=true&w=majority`;
    // mongoose.connect(MONGODB_URL, {useNewUrlParser: true});
    mongoose.connect(MONGODB_URL, {useNewUrlParser: true});

    mongoose.connection.on('connected', () => {
        console.log('Database connected successfully!');    
    })

    mongoose.connection.on("disconnected", () => {
      console.log("Database disconnected");
    });

    mongoose.connection.on('error', () => {
        console.log('Error while connecting with the database', error.message);
    })
}

export default Connection