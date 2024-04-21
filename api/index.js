import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';

dotenv.config();

const app = express();

//connecting db
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log(`DB CONNECTED SUCCESSFULLY`);
})
.catch((err) => {
    console.log(err);
})

app.listen(3000, () => {
    console.log(`Server is running on port 3000!!!!`);
});

app.use("/api/user",userRouter);