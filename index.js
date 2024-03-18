// const express = require('express');
import express from 'express';
import bodyParser from 'body-parser';
import todosRoutes from './routes/todos.routes.js';
import cors from "cors";

// Create express app
const app = express();

// Use middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

// Use routes
app.use(todosRoutes);


// Listen for incoming 
app.listen(4000, () => {
    console.log('Express app is running')
});