import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "tailwindcss/tailwind.css";
import Login from "./components/login";
import Home from "./components/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
