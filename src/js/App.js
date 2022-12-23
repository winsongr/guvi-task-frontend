import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../style/app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../components/login";
import SignUp from "../components/signup";
import Profile from "../components/profile";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
