import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import AddUser from "./users/AddUser";
import Home from "./pages/Home";
import EditBook from "./users/EditUser";
import Viewbook from "./users/Viewbook";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addbook" element={<AddUser />} />
          <Route exact path="/editbook/:id" element={<EditBook />} />
          <Route exact path="/Viewbook/:id" element={<Viewbook />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
