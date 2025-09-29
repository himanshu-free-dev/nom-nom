import express, { type Request, type Response } from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';
import myUserRoute from './routes/user.route.js';

(async function () {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);
        console.log('Connected to db!!!');
    } catch (error) {
        console.log(`Error while connecting to mongodb: ${error}`);
    }
})();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/my/user', myUserRoute);

app.listen('8000', () => {
    console.log('local host listening at 8000');
});
