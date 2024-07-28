// Import the Todo model from the specified path.
const Todo = require("../models/Todo");


exports.deleteTodo = async (req,res)=>{

    try{
     const {id} = req.params
     await Todo.findByIdAndDelete(id)

     res.status(200).json({
        status : true,
        data : Todo,
        message : "Todo deleted"
     })
        }
    catch{
        
        console.error(err);

        // Send a JSON response indicating a server error with details.
        res.status(500).json({
            success: false,
            data: "Server Error",
            message: err.message,
          })
    }

}