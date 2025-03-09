import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Pagination from "./components/Pagination";
import SecondHome from "./pages/SecondHome";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/pagination" element={<Pagination />} />
          <Route path="/page/:pageNumber" element={<SecondHome />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
