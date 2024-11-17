import { useState } from "react";
import Axios from "axios";


const Student = () => {
  var dept = ["IT", "Engineering", "Business"];
  const [studId, setstudId] = useState("");
  const [studName, setstudName] = useState("");
  const [email, setemail] = useState("");
  const [department, setdepartment] = useState();
  const [cw, setcw] = useState(0);
  const [mid, setmid] = useState(0);
  const [final, setfinal] = useState();
  const [totalMarks, settm] = useState(0);
  const [passMark, setpassMark] = useState(0);
  const [result, setresult] = useState("");
  const [responseMsg, setresponseMsg] = useState("");


  const computeMark = async () => {
    var totalMarks = parseInt(cw) + parseInt(mid) + parseInt(final);
    var res = "";
    settm(totalMarks);

    totalMarks >= parseInt(passMark) ? (res = "Passed") : (res = "Failed");
    setresult(res);

   try {

    const response = await Axios.post("http://localhost:3001/addStudent", {
      studId : studId,
      studName : studName,
      email : email,
      dept : department,
      courseWork : cw,
      mid : mid,
      final : final,
      totalMarks : totalMarks,
      passMark : passMark,
      result : res,
    });
    //handle successful message
    setresponseMsg(response.data.msg);
   } catch(err) {
    //handle error
    console.error(err);
   }


  };

  return (
    <div className="App">
      <h1 className="title">Student Information</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="info">
            <form>
              <table className="centertable">
                <tbody>
                  <tr>
                    <td>Student ID:</td>
                    <td>
                      <input
                        type="text"
                        id="sid"
                        className="form-control"
                        onChange={(e) => setstudId(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Student Name:</td>
                    <td>
                      <input
                        type="text"
                        id="sname"
                        className="form-control"
                        onChange={(e) => setstudName(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Email:</td>
                    <td>
                      <input
                        type="email"
                        id="email"
                        className="form-control"
                        onChange={(e) => setemail(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Department:</td>
                    <td>
                      <select
                        id="dept"
                        className="form-control"
                        onChange={(e) => setdepartment(e.target.value)}
                      >
                        {dept.map((dept, key) => (
                          <option key={key}>{dept}</option>
                        ))}
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Coursework:</td>
                    <td>
                      <input
                        type="number"
                        id="cw"
                        className="form-control"
                        onChange={(e) => setcw(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Mid Marks:</td>
                    <td>
                      <input
                        type="number"
                        id="mid"
                        className="form-control"
                        onChange={(e) => setmid(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Final Marks:</td>
                    <td>
                      <input
                        type="number"
                        id="final"
                        className="form-control"
                        onChange={(e) => setfinal(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Passing Marks:</td>
                    <td>
                      <input
                        type="number"
                        id="pmark"
                        className="form-control"
                        onChange={(e) => setpassMark(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <input
                        type="button"
                        value="Compute Total Marks"
                        className="btn btn-primary"
                        onClick={computeMark}
                      />
                      <br />
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>{responseMsg}</p>
            </form>
          </div>
        </div>

        <div className="col-md-6">
          <p className="display-6">Student Summary</p>
          <p>Student Id: {studId}</p>
          <p>Student Name:{studName}</p>
          <p>Email: {email}</p>
          <p>Department: {department}</p>
          <p>Coursework: {cw}</p>
          <p>Mid Marks: {mid}</p>
          <p>Final Marks:{final} </p>
          <h4>Total Marks: {totalMarks}</h4>
          <h4 className="result">Result:{result}</h4>
        </div>
      </div>
    </div>
  );
};
export default Student;
