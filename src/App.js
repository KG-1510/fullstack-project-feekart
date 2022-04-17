import { RecoilRoot } from "recoil";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "tailwindcss/tailwind.css";
import { CookiesProvider } from "react-cookie";
import { LoginComponent } from "../src/components/login";
import { DashboardComponent } from "../src/components/dashboard";
import { RegisterComponent } from "./components/register";
import { ProfileComponent } from "./components/profile";
import { LedgerComponent } from "./components/ledger";
import ProtectedRoute from "./protectedroutes";

function App() {
  return (
    <CookiesProvider>
      <RecoilRoot>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          rtl={false}
          draggable
          pauseOnHover
        />
        <Router>
          <Routes>
            <Route path="/" element={<LoginComponent />}></Route>
            <Route path="/login" element={<LoginComponent />}></Route>
            <Route path="/register" element={<RegisterComponent />}></Route>
            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<DashboardComponent />}></Route>
              <Route path="/profile" element={<ProfileComponent />}></Route>
              <Route path="/ledger" element={<LedgerComponent />}></Route>
            </Route>
          </Routes>
          {/* <ProtectedRoute
          exact
          path="/dashboard"
          component={<DashboardComponent />}
          auth={true}
        /> */}
        </Router>
      </RecoilRoot>
    </CookiesProvider>
  );
}

export default App;
