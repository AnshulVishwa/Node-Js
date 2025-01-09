const { TODO } = require("../Model/model");

async function handlePostTask(req, res){
    const user = req.params.user
    const newtask = req.body.newtask
    if( !user ) return res.send("User is required")
    const validateDuplicate = await TODO.findOne({"tasks" : 45}) 
    console.log(validateDuplicate)
    if( validateDuplicate ) return res.status(400).json( { "error" : "Task already occured" } )
    const result = await TODO.findOneAndUpdate({"username" : user } , {$push : {tasks : newtask}})
    res.send(result)
}

async function handleGetAllTasks(req, res) {
    const tasks = await TODO.findOne({"username" : req.params.user })
    if( !tasks ) return res.status(404).json( { "msg" : "User not found" } )
    if( tasks.tasks.length == 0 ) return res.status(400).json({"msg" : "No Tasks"})
    let obj = {}
    for( let i = 0 ; i < tasks.tasks.length ; i++ ) obj[`Task ${i+1}`] = tasks.tasks[i] 
    res.status(200).json(obj)
}

module.exports = {
    handleGetAllTasks,
    handlePostTask
};
