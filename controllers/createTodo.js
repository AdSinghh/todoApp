// Import the Todo model from the specified path.
const Todo = require("../models/Todo");

// Define a route handler function named createTodo using async/await.
exports.createTodo = async (req, res) => {
    try {
        // Extract the 'title' and 'description' from the request body.
        const { title, description } = req.body;

        // Create a new Todo object and insert it into the database using the Todo model.
        const response = await Todo.create({ title, description });

        // Send a JSON response indicating success.
        res.status(200).json({
            success: true,
            data: response,
            message: "Entry created successfully"
        });
    } catch (err) {
        // If an error occurs during the process, log the error to the console.
        console.error(err);

        // Send a JSON response indicating a server error with details.
        res.status(500).json({
            success: false,
            data: "Internal Server Error",
            message: err.message,
        });
    }
};
