
import "./App.css";
import "./styles.css";
import Student from "./Components/Student";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Banner from "./Components/Banner";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Manage from "./Components/Manage";


const App = () => {
  return (
    <div className="container-fluid">
      <Router>
        <div className="row">
          <div className="col-md-12">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Banner />
          </div>
        </div>
        <div className="row">
          <Routes>
            <Route path="/" element={<Student />}></Route>
            <Route path="/manage" element={<Manage />}></Route>
           
          </Routes>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Footer />
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
