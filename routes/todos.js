// Import the express library to create a router.
const express = require("express");

// Create an instance of an Express router.
const router = express.Router();

// Import the controller function

const { createTodo } = require("../controllers/createTodo");
const { getTodo } = require("../controllers/getTodo");
const {getTodoById} = require("../controllers/getTodoById")
const {updateTodo} = require("../controllers/updateTodo")
const {deleteTodo} = require ("../controllers/deleteTodo")

// Define API routes.

router.post("/createTodo", createTodo)
router.get("/getTodos",getTodo)
router.get("/getTodosById/:id",getTodoById)
router.put("/updateTodo/:id",updateTodo)
router.delete("/deleteTodo/:id",deleteTodo)

// Export the router to make it available for use in other parts of the application.
module.exports = router;
