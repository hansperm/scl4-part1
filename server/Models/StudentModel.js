import mongoose from "mongoose";

const StudentSchema = mongoose.Schema({

studId: {
    type : String,
    required: true,
},


studName: {
    type : String,
    required: true,
},


email: {
    type : String,
    required: true,
},

dept: {
    type : String,
    required: true,
},

courseWork: {
    type : Number,
    required: true,
},
mid: {
    type : Number,
    required: true,
},
final: {
    type : Number,
    required: true,
},

totalMarks: {
    type : Number,
    required: true,
},

passMark: {
    type : Number,
    required: true,
},

result: {
    type : String,
    required: true,
},



});

const StudentModel = mongoose.model("studInfo",StudentSchema,"studInfos");

export default StudentModel;


