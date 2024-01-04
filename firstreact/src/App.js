import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from "./components/Home";
import About from "./components/About.js";
import Services from "./components/Services";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import { useParams } from "react-router-dom";
function App() {
   
  return (
    <Router>
    <div className="container">
           <nav className="navbar navbar-expand-lg">
              <ul className="navbar-nav ">
                    <li className="nav-item"><Link to="/" className='nav-link'>Home</Link></li>
                    <li className="nav-item"><Link to="/about" className='nav-link'>About</Link></li>
                    <li className="nav-item"><Link to="/services" className='nav-link'>Services</Link></li>
                    <li className="nav-item"><Link to="/contact" className='nav-link'>Contact</Link></li>

                    
              </ul>
           </nav>
                    <Routes>
                          <Route path="/" element={<Home/>}/>
                          <Route path="/about" element={<About/>}/>
                          <Route path="/services" element={<Services/>}/>
                          <Route path="/contact" element={<Contact/>} />
                          <Route path ="*" element={<NotFound/>}/>
                    </Routes>
    </div>
                    
  </Router>
  );
}

export default App;
