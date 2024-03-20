import { Router} from "express";
import { Todo } from "../models/todo.js";


const router = Router();


// Define routes
router.post('/todos', async (req, res) => {
    // Add todo to the todos collection
    const result = await Todo.create(req.body);
    // Return response
    res.json(result);
});

router.get('/todos', async (req, res) => {
    // Get all todos from todos collection
    const result = await Todo.find({});
    // Return response
    res.json(result);
});

router.delete('/todos', async (req, res) => {
    // Delete todos from todos collection
    const deleteManyResult = await Todo.deleteMany({});
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