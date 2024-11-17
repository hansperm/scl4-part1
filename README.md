# scl4-part1
1
INFORMATION TECHNOLOGY DEPARTMENT
COLLEGE OF COMPUTING AND INFORMATION SCIENCES
CSSE3101 – ADVANCED WEB TECHNOLOGIES
SCL Activity 4 – MERN Stack (CRUD Implementation-Create & Read)
This task builds upon previous activities in the course, focusing on implementing 
CRUD (Create-Read-Update-Delete) functionalities using the MERN Stack.
PART 1 – MongoDb Setup
1. Register to https://www.mongodb.com/atlas/database.
2. Login to your MongoDb account and create the MongoDb database. These are the 
details of the MongoDb project. You may follow the video how to create the 
MongoDb database in MongoDb Atlas cloud platform.
Create MongoDb-Video
3. Create a Project. Below are the project details.
Project Name studApp
Cluster Name studCluster
Database Name studDb
Collection Name studInfos.
PART 2-SERVER-SIDE DEVELOPMENT USING NodeJS and Express
4. Open a new terminal in VSCode and navigate to the server folder.
5. In the server folder. Execute the command to initialize the server.
a. npm init
b. Accept the default server settings by pressing Enter.
2
INFORMATION TECHNOLOGY DEPARTMENT
COLLEGE OF COMPUTING AND INFORMATION SCIENCES
c. After executing the command your server folder will have the following files and 
folders.
6. Install the libraries. 
npm install express mongoose cors
7. Check package.json file if the libraries are installed.
8. In the server folder. Create a file index.js. This file in is the entry point for your server.
d. Write the code to create the express server.
import express from "express";
const app = express();
app.listen(3001, () => {
console.log("You are connected");
});
e. import now is supported in new JS, edit package.json and add the following after 
the main…
"type":"module",
3
INFORMATION TECHNOLOGY DEPARTMENT
COLLEGE OF COMPUTING AND INFORMATION SCIENCES
f. Run your server.
Note: Every time you have changes in your index.js, you need to run again the 
server.
9. Using nodemon. By using nodemon, you don’t need to explicitly restart the server every 
time you have changes in your codes.
a. Install nodemon.
b. Update package.json and write script for executing nodemon.
c. Run your nodemon using the script. In this way, there is no need to explicitly stop 
and restart the server when there are changes in index.js.
4
INFORMATION TECHNOLOGY DEPARTMENT
COLLEGE OF COMPUTING AND INFORMATION SCIENCES
PART 3-CONNECTING TO MONGODB 
10. Login to your MongoDb Atlas account. Go to the specific project. Click the Database menu.
11. Select the Connect to you application->Drivers.
5
INFORMATION TECHNOLOGY DEPARTMENT
COLLEGE OF COMPUTING AND INFORMATION SCIENCES
Follow the instructions given:
In the terminal (server folder), install mongodb.
12. In index.js:
a. import mongoose library.
b. Create a connectionString variable and assign the connection string generated from 
MongoDb Atlas.
c. Example connection string, change the values to your specific values.
mongodb+srv://admin:<password>@studentinfocluster.5pqj5zu.mongodb.net/n
ame of database ?retryWrites=true&w=majority
import express from "express";
import mongoose from "mongoose";
const app = express();
//Database connection
const connectString =
"mongodb+srv://admin:admin12345clusterstudapp.w5mibfb.mongod
b.net/studDb?retryWrites=true&w=majority";
mongoose.connect(connectString, {
useNewUrlParser: true,
useUnifiedTopology: true,
});
app.listen(3001, () => {
console.log("You are connected");
});
6
INFORMATION TECHNOLOGY DEPARTMENT
COLLEGE OF COMPUTING AND INFORMATION SCIENCES
PART 4-CREATING MODELS
13. In the server folder, create the folder: Models. This is where we will save our database 
models.
14. We will create a model that will save the student information. 
a. Create a new file: StudentModel.js and save it in the Models folder.
b. Import mongoose.
import mongoose from "mongoose";
c. Create a schema.
const StudentSchema = mongoose.Schema({});
7
INFORMATION TECHNOLOGY DEPARTMENT
COLLEGE OF COMPUTING AND INFORMATION SCIENCES
d. Add the fields in the schema.
const StudentSchema = mongoose.Schema({
studId: {
type: String,
required: true,
},
studName: {
type: String,
required: true,
},
email: {
type: String,
required: true,
},
dept: {
type: String,
required: true,
},
courseWork: {
type: Number,
required: true,
},
mid: {
type: Number,
required: true,
},
final: {
type: Number,
required: true,
},
totalMark: {
type: Number,
required: true,
},
passMark: {
type: Number,
required: true,
},
result: {
type: String,
required: true,
},
});
8
INFORMATION TECHNOLOGY DEPARTMENT
COLLEGE OF COMPUTING AND INFORMATION SCIENCES
e. Create a model variable based on the schema created.
Syntax:
mongoose.model(name, schema, collectionName, skipInit)
Example:
const StudentModel = 
mongoose.model("studInfo",StudentSchema,"studInfos");
Here's a breakdown of each parameter:
name: This is the singular name of the collection that the model is for. Mongoose 
automatically looks for the plural version of this name in MongoDB. For example, if 
you provide "User" as the name, Mongoose will look for a collection named "users".
schema: This is a Mongoose schema object that defines the structure of documents 
within the collection. It specifies the fields and their types, along with any validation 
rules or other options.
collectionName (optional): This parameter allows you to specify a different name 
for the collection in MongoDB. If you don't provide this parameter, Mongoose will 
use the pluralized version of the name parameter as the collection name.
skipInit (optional): This parameter allows you to control whether Mongoose 
initializes the model. By default, it's set to false, which means the model will be 
initialized immediately. Setting it to true will skip initialization, and you'll need to 
call model.init() manually later.
f. Export the model.
export default StudentModel;
PART 5-CREATING EXPRESS ROUTES
15. CRUD Implementation – Create or Adding new record to the databases.
a. In server\index.js. Import the following:
import cors from "cors";
import StudentModel from "./Models/StudentModel.js";
b. Mount the needed middleware functions
i. Parse the incoming requests with JSON payloads
app.use(express.json());
ii. Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());
9
INFORMATION TECHNOLOGY DEPARTMENT
COLLEGE OF COMPUTING AND INFORMATION SCIENCES
16. Create the routes that will handle request from the client.
Route for saving the student information.
app.post("/addStudent", async (req, res) => {
const studId = req.body.studId;
const studName = req.body.studName;
const email = req.body.email;
const dept = req.body.dept;
const courseWork = req.body.courseWork;
const mid = req.body.mid;
const final = req.body.final;
const totalMark = req.body.totalMark;
const passMark = req.body.passMark;
const result = req.body.result;
try {
const student = new StudentModel({
studId: studId,
studName: studName,
email: email,
dept: dept,
courseWork: courseWork,
mid: mid,
final: final,
totalMark: totalMark,
passMark: passMark,
result: result,
});
await student.save();
 res.send({ msg: "Record successfully added." });
} catch (err) {
res.send({ msg: err });
}
});
17. Testing the Express routes using Thunder Client. In extensions, install Thunder Client.
10
INFORMATION TECHNOLOGY DEPARTMENT
COLLEGE OF COMPUTING AND INFORMATION SCIENCES
18. After installing, the Thunder Client icon will be available. 
19. Click new New Request. Select the appropriate method and provide the name of the 
Express Route to be tested from the index.js.
20. In the request body, provide example values for the request body in JSON format as test 
values to be sent to the MongoDb database. If the request is successful, you should see 
that Status 200 OK and in the Response section you should the response from the server.
11
INFORMATION TECHNOLOGY DEPARTMENT
COLLEGE OF COMPUTING AND INFORMATION SCIENCES
21. Then go your MongoDb database and browse the collection and check if the information is
saved.
22. CRUD Implementation – Read or Retrieving records from the database.
a. In server\index.js. Create a new Express route for retrieving the student 
information.
i. .find() method – retrieves all the records
ii. .countDocuments() method – counts the number of records
/********************************************************/
//express GET route for retrieving records from the database
app.get("/manage", async (req, res) => {
try {
const result = await StudentModel.find({});
const countStudent = await StudentModel.countDocuments({});
res.send({ result, count: countStudent });
} catch (err) {
res.send({ msg: "Error" });
}
});
12
INFORMATION TECHNOLOGY DEPARTMENT
COLLEGE OF COMPUTING AND INFORMATION SCIENCES
b. Testing the route in Thunder Client.
PART 6-SENDING DATA FROM CLIENT(Front-end) TO SERVER
23. In the client folder:
a. Install the following Axios: npm install axios
24. In Student.js, import axios.
import Axios from "axios";
25. Define a new state variable which will be used for displaying the response message from 
the server.
const [responseMsg, setresponseMsg] = useState("");
26. In the function computeMark(), write the code for sending an Axios request to the server. 
Use the Async/await structure to implement this function to handle asynchronous. It 
provides a more readable and synchronous-looking syntax for writing asynchronous code, 
making it easier to work with promises.
Here's a basic explanation of how async/await works:
async: This keyword is used to define an asynchronous function. It allows you to use the await 
keyword inside the function. An async function always returns a promise.
await: This keyword can only be used inside an async function. It pauses the execution of the 
async function until the promise is resolved. It "waits" for the promise to resolve and returns 
its resolved value.
13
INFORMATION TECHNOLOGY DEPARTMENT
COLLEGE OF COMPUTING AND INFORMATION SCIENCES
const computeMark = async() => {
var total = parseInt(cw) + parseInt(mid) + parseInt(final);
var res = "";
settm(total);
total >= parseInt(passMark) ? (res = "Passed") : (res = "Failed");
setresult(res);
try {
const response = await Axios.post("http://localhost:3001/addStudent", {
studId: studId,
studName: studName,
email: email,
dept: department,
courseWork: cw,
mid: mid,
final: final,
totalMark: total,
passMark: passMark,
result: res,
});
// Handle successful response
setresponseMsg(response.data.msg);
} catch (error) {}
};
27. Test your code by providing example input in the form.
14
INFORMATION TECHNOLOGY DEPARTMENT
COLLEGE OF COMPUTING AND INFORMATION SCIENCES
28. Browse to the MongoDb collection and check if the information is saved.
29. In Manage.js component:
Import the following:
import React, { useState, useEffect } from "react";
import Axios from "axios";
a. Create state variables using useState hook.
const [listOfStudents, setlistOfStudents] = useState([]);
const [countRecords, setcountRecords] = useState(0);
b. Create a useEffect hook to accept the response from the server.
useEffect(() => {
Axios.get("http://localhost:3001/manage")
.then((response) => {
setlistOfStudents(response.data.result);
setcountRecords(response.data.count);
})
.catch((err) => {
console.log(err);
});
}, []);
15
INFORMATION TECHNOLOGY DEPARTMENT
COLLEGE OF COMPUTING AND INFORMATION SCIENCES
c. Use the map() function to iterate over the response and display the returned
data from the server.
return (
<div className="listStudents">
<h1 className="display-6">Manage Students</h1>
<table className="table table-striped table-responsive">
<thead>
<tr>
<th>Student ID</th>
<th>Student Name</th>
<th>Email</th>
<th>Department</th>
<th>Coursework</th>
<th>Mid</th>
<th>Final</th>
<th>Total Marks</th>
<th>Passing Marks</th>
<th>Result</th>
</tr>
</thead>
<tbody>
{listOfStudents.map((students) => (
<tr key={students._id}>
<td>{students.studId}</td>
<td>{students.studName}</td>
<td>{students.email}</td>
<td>{students.dept}</td>
<td>{students.courseWork}</td>
<td>{students.mid}</td>
<td>{students.final}</td>
<td>{students.totalMark}</td>
<td>{students.passMark}</td>
<td>{students.result}</td>
</tr>
))}
</tbody>
</table>
<div>
<h3>Number of Records: {countRecords}</h3>
</div>
</div>
);
16
INFORMATION TECHNOLOGY DEPARTMENT
COLLEGE OF COMPUTING AND INFORMATION SCIENCES
d. Display the number of records.
<div>
<h3>Number of Records: {countRecords}</h3>
</div>
30. Create the appropriate CSS styles to achieve the desired UI design.
