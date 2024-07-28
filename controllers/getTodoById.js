  // Import the Todo model from the specified path.
const Todo = require("../models/Todo");

exports.getTodoById = async (req,res)=>{
    try{
         // Extract Todo item basis on their id

         const id = req.params.id
         const todo = await Todo.findById({_id : id})

         if(!todo){
           return res.status(404).json({
            success : false,
            message : "No data found with this given Id"
           }
           )
         }
         // Data for given Id found

         res.status(200).json({
            status : true,
            data : todo,
            message :`Todo ${id} data successfully fetched`
         })
    }

    catch(err){
        
        // If an error occurs during the process, log the error to the console.
        console.error(err);

        // Send a JSON response indicating a server error with details.
        res.status(500).json({
            success: false,
            data: "Server Error",
            message: err.message,
          })
  }
}