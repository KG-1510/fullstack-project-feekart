import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "tailwindcss/tailwind.css";
import { LoginComponent } from "../src/components/login";
import { DashboardComponent } from "../src/components/dashboard";
import { RegisterComponent } from "./components/register";
import { ProfileComponent } from "./components/profile";
import { LedgerComponent } from "./components/ledger";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginComponent />}></Route>
        <Route exact path="/login" element={<LoginComponent />}></Route>
        <Route exact path="/dashboard" element={<DashboardComponent />}></Route>
        <Route exact path="/register" element={<RegisterComponent />}></Route>
        <Route exact path="/profile" element={<ProfileComponent />}></Route>
        <Route exact path="/ledger" element={<LedgerComponent />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
