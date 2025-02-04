import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { ExtractJwt, Strategy as jwtStratergy } from 'passport-jwt';
import passport from 'passport';
import env from 'dotenv';
const app = express();
env.config();

app.use(express.json());

const port = process.env.PORT;

//Start the server
app.listen(port, ()=>{
    console.log(`Server started on port: ${port}`);
});