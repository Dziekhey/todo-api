import { Router} from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv"

dotenv.config({path:['.env.local']})

const router = Router();
const url = process.env.MONGO_URI;
const client = new MongoClient(url);
const todoDb = 'todo-db';
const todoCollection = 'todos';

// Define routes
router.post('/todos', async (req, res) => {
    //Connect the mongo client
    await client.connect();
    // Get access to a database
    const db = client.db(todoDb);
    // Get access to todos collection in the database
    const collection = db.collection(todoCollection);
    // Add todo to the todos collection
    const result = await collection.insertOne(req.body);
    // Disconnect the mongo client
    await client.close();
    // Return response
    res.json(result);
});

router.get('/todos', async (req, res) => {
    //Connect the mongo client
    await client.connect();
    // Get access to a database
    const db = client.db(todoDb);
    // Get access to todos collection in the database
    const collection = db.collection(todoCollection);
    // Get all todos from todos collection
    const result = await collection.find().toArray();
    // Disconnect the mongo client
    await client.close();
    // Return response
    res.json(result);
});

router.delete('/todos', async (req, res) => {
    //Connect the mongo client
    await client.connect();
    // Get access to a database
    const db = client.db(todoDb);
    // Get access to todos collection in the database
    const collection = db.collection(todoCollection);
    // Delete todos from todos collection
    const deleteManyResult = await collection.deleteMany({});
    // Disconnect the mongo client
    await client.close();
    // Return response
    res.json(deleteManyResult);
});

router.get('/todos/:id', (req, res) => {
    res.send(`Get single todos with id: ${req.params.id}!`);
});

router.patch('/todos/:id', (req, res) => {
    res.send('Update single todos!');
});

router.delete('/todos/:id', (req, res) => {
    res.send('Delete single todos!');
});



//Export router
export default router;