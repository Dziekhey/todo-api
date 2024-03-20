// const express = require('express');
import express from 'express';
import bodyParser from 'body-parser';
import cors from "cors";
import mongoose from 'mongoose';
import dotenv from "dotenv"
import todosRoutes from './routes/todos.routes.js';

dotenv.config({path:['.env.local']})

// Create express app
const app = express();

// Use middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

// Use routes
app.use(todosRoutes);

// Make database connection
await mongoose.connect(process.env.MONGO_URI);


// Listen for incoming 
app.listen(4000, () => {
    console.log('Express app is running')
});