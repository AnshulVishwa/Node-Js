const { TODO } = require("../Model/model");

async function handlePostTask(req, res){
    const user = req.params.user
    const newtask = req.body.newtask
    if( !user ) return res.send("User is required")

    const validateDuplicate = await TODO.findOne({ tasks: newtask });
 
    if (validateDuplicate) {
        return res.status(400).json({ error: "Task already exists" });
    }
    
    await TODO.findOneAndUpdate({"username" : user } , {$push : {tasks : `${req.body.newtask}`}})
    res.status(200).send(await TODO.findOne({"username" : user }))
}

async function handleGetAllTasks(req, res) {
    const tasks = await TODO.findOne({"username" : req.params.user })
    if( !tasks ) return res.status(404).json( { "msg" : "User not found" } )
    if( tasks.tasks.length == 0 ) return res.status(400).json({"msg" : "No Tasks"})
    let obj = {}
    for( let i = 0 ; i < tasks.tasks.length ; i++ ) obj[`Task ${i+1}`] = tasks.tasks[i] 
    res.status(200).json(obj)
}

async function handleReqResCompletedTasks( req , res ){
    const tasks = await TODO.findOne( { "username" : req.params.user } )
    if( !tasks ) return res.status(404).json( { "msg" : "User not found" } )
    if( tasks.CompletedTasks.length == 0 ) return res.status(400).json({"msg" : "No Tasks"})
    let obj = {}
    for( let i = 0 ; i < tasks.CompletedTasks.length ; i++ ) obj[`Task ${i+1} ✔️`] = tasks.CompletedTasks[i] 
    res.status(200).json(obj)
}

async function PostCompletedTasks( req , res ) {
    const user = await TODO.findOne({ "username" : req.params.user })
    const task = user.tasks[req.params.task]
    if( !task ) res.status(400).json({"status" : "Task not Found"})
    await TODO.updateOne({ "username" : req.params.user } , { $pull : { "tasks" : `${task}` } })
    const result = await TODO.updateOne({ "username" : req.params.user } , { $push : { "CompletedTasks" : task } })
    if( !result ) res.status(400).json( { "status" : "Error Occured" } )
    res.json({"status" : "Tasks Updated"})
}

async function handleReqResDeleteTask( req , res ) {
    let { user , task } = req.params
    const validateUser = await TODO.findOne({"username" : user})
    if( !validateUser ) res.status(400).json({"msg" : "User Not Found"})
    const validateTask = await TODO.findOne({"username" : user})
    const toDeleteTask = validateTask.tasks[++task]
    if( validateTask.tasks.length < task ) res.status(400).json({"msg" : "Task Not Found"})
    await TODO.updateOne( { "username" : user } , { $pull : { "tasks" : toDeleteTask } } )
    await TODO.updateOne( { "username" : user } , { $set : { "RecentlyDeletedTask" : toDeleteTask } } )
    res.status(200).json( { "status" : "Deleted Successfully" } )
}

async function GetRecentlyDeletedTask( req , res ) { 
    const task = await TODO.findOne({"username" : req.params.user})
    res.status(200).json( {"Found" : `${task.RecentlyDeletedTask}`} )
}

module.exports = {
    handleGetAllTasks,
    handlePostTask,
    handleReqResCompletedTasks,
    PostCompletedTasks,
    handleReqResDeleteTask,
    GetRecentlyDeletedTask
};
