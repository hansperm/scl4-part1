import React, { useState, useEffect } from "react";
import Axios from "axios";

const Manage = () => {
  const [listOfStudents, setlistOfStudents] = useState([]);
  const [countRecords, setcountRecords] = useState(0);

  useEffect((listOfStudents) => {
    Axios.get("http://localhost:3001/manage")
      .then((response) => {
        setlistOfStudents(response.data.result);
        setcountRecords(response.data.count);
        console.log(response);
        console.log(listOfStudents);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
              <td>{students.totalMarks}</td>
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
};

export default Manage;
