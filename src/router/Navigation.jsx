import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Join from "../pages/Join";
import Main from "../pages/Main";
import "../default.css";

function Navigation() {
  return (
    <Router className="main">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/join" element={<Join />} />
        <Route exact path="/main" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default Navigation;
