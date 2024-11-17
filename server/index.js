import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import StudentModel from "./Models/StudentModel.js";

const app = express();

//Database Connection

const connectString = "mongodb+srv://admin:mongodb123@studentapp.mix5s.mongodb.net/?retryWrites=true&w=majority&appName=studentApp";

//Middleware

app.use(express.json());
app.use(cors());

mongoose.connect(connectString,{});


//crud implementation express routes

//express POST route for adding new student

app.post("/addStudent", async(req,res) => {
    console.log(req.body);
    const studId = req.body.studId;
    const studName = req.body.studName;
    const email = req.body.email;
    const dept = req.body.dept;
    const courseWork = req.body.courseWork;
    const mid = req.body.mid;
    const final = req.body.final;
    const totalMarks = req.body.totalMarks;
    const passMark = req.body.passMark;
    const result = req.body.result;

    try {
        const student = new StudentModel ({

            studId : studId,
            studName : studName,
            email : email,
            dept : dept,
            courseWork : courseWork,
            mid : mid,
            final : final,
            totalMarks : totalMarks,
            passMark : passMark,
            result : result,

        });

        await student.save();
        res.send({msg : "Record succesfully added."});

    } catch (err) {
        res.send({msg: "Record Not succesfully added!"});
    }




});

//express GET route for retrieving all student

app.get("/manage", async (req, res) => {


    try {
        const result = await StudentModel.find({});
        const countStudent = await StudentModel.countDocuments({});
        res.send({result, count: countStudent});
    } catch (err) {
        res.send({msg : "Error"});
    }

} );



app.listen(3001, () => {

console.log("You are now connected");



});


