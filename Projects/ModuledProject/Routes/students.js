const express = require("express")
const StudentRouter = express.Router()
const Student = require("../Models/model")

StudentRouter.get( "/student" , async ( req , res ) => {
    const students = await Student.find({})
    const html = `
        <table>
            <thead>
                <tr>
                    <th>Roll Number</th>
                    <th>Student Name</th>
                    <th>Program</th>
                    <th>Discipline</th>
                </tr>
            </thead>
            <tbody>
                ${ students.map( v => (
                    `<tr>
                        <td>${v.roll}</td>
                        <td>${v.name}</td>
                        <td>${v.program}</td>
                        <td>${v.discipline}</td>
                    </tr>`
                )).join("") }
            </tbody>
        </table>
    `
    res.status(200).send(html)
} )

module.exports = StudentRouter