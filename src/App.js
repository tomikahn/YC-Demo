import logo from "./logo.svg";
import "./App.css";
import { styles } from "./styles";
import RegisterClient from "./components/Register/Client/RegisterClient";
import { useState } from "react";
//Other libraries
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Portfolio from "./components/Portfolio";

function App() {
  const [user, setUser] = useState({activo:true});
  return (
    <>
      <Router>
        <Nav user={user} setUser={setUser}/>
        <Routes>
          <Route path="/login" exacct element={<Login user={user} setUser={setUser}/>} />
          <Route path="/register" exacct element={<RegisterClient />} />
          <Route path="/" exacct element={<Home />} />
          <Route path="/projects" exacct element={<Projects />} />
          <Route path="/project" exacct element={<Project />} />
          <Route path="/portfolio" exacct element={<Portfolio />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
