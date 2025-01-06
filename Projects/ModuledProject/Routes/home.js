const express = require("express")
const HomeRouter = express.Router()

const { 
    GetAllUsers , 
    CreateNewStudent , 
    DeleteAllStudents ,
    GetSpecificStudent,
    ReplaceStudentInfo,
    UpdateStudentsProfile,
    DeleteSpecificStudent
 } = require("../Controller/handlers")

HomeRouter.route("/")
.get( GetAllUsers )
.post( CreateNewStudent )
.delete( DeleteAllStudents )

HomeRouter.route("/:roll")
.get( GetSpecificStudent )
.put( ReplaceStudentInfo )
.patch( UpdateStudentsProfile )
.delete( DeleteSpecificStudent )

module.exports = HomeRouter