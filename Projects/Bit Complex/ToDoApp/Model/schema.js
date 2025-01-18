const mongoose = require("mongoose")

const Schema = mongoose.Schema( {
    username:{
        type : String,
        required : true,
        unique : true
    },
    id : {
        type : String,
        required : true,
        unique : true
    },
    tasks : [
        {
            type : String,
        }
    ],
    CompletedTasks : [
        {
            type : String
        }
    ],
    RecentlyDeletedTask : {
        type : String
    }
} )

module.exports = Schema