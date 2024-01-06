import React from "react";
import './App.css'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from './components/Home'
import Users from "./components/Users";
function App() {
   
  return (
    <Router>
      <div className="container">
                <div className="navbar navbar-expand">
                          <ul className="navbar-nav">
                            <li className="nav-item"><Link to={"/home"} className="nav-link">Home</Link></li>
                            <li className="nav-item"><Link to={"/users"} className="nav-link">Users</Link></li>
                          </ul>
                </div>

                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/home"} element={<Home/>}/>
                    <Route path={"/users"} element={<Users/>}/>
                </Routes>
          </div>
    </Router>
          
  );
}

export default App;
