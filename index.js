
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/connect.js';
import authRouter from './routes/auth.js';
import session from 'express-session';


dotenv.config();
const app = express();

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: true,
        httpOnly: true,
        sameSite: 'strict',
        maxAge: 1000 * 60 * 60 * 24
    }
}));


app.use(express.json());

app.use('/api/v1/auth', authRouter);

const start = async () => {
    try{
        await connectDB(process.env.DATABASE_URL);
        app.listen(process.env.PORT || 5555, () => {
            console.log(`Server is listening on port ${process.env.PORT}`);
        })
    } catch (error){
        console.log(error);
    }
}

start();