import React from "react";
import './App.css'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from "./components/Home";
import About from "./components/About.js";
import Services from "./components/Services";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Page from "./components/Page.js";
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

                    <div className="nav-item dropdown-x">
                      <Link className="nav-link">Dropdown</Link>
                              <div className="dropdown-menu-x">
                                    <div><Link to="/home" className='nav-link'>Home</Link></div>
                                    <div><Link to="/about" className='nav-link'>About</Link></div>
                                    <div><Link to="/contact" className='nav-link'>Contact</Link></div>
                                    <div><Link to="/services" className='nav-link'>Services</Link></div>
                                    
                                    
                              </div>
                    </div>
                    
              </ul>
           </nav>

            


                    <Routes>
                          <Route path="/" element={<Home/>}/>
                          <Route path="/about" element={<About/>}/>
                          <Route path="/about/:page" element={<Page/>}/>
                          <Route path="/services" element={<Services/>}/>
                          <Route path="/contact" element={<Contact/>} />
                          <Route path ="*" element={<NotFound/>}/>
                    </Routes>
    </div>
                    
  </Router>
  );
}

export default App;
