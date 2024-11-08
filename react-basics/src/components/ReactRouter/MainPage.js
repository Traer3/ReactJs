import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

const MainPage = () => {
    return(
        <Router>
            <nav>
                <Link to= "/"> Home </Link> | 
                <Link to="/about">About me </Link> | 
                <Link to="contact">Contacts</Link>
             </nav>
             <Routes>
                <Route path="*" element={<h2>stop acting like you know the way ahead,like you know the rules.There are no rules man,we're lost</h2>}/>                
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                
             </Routes>
        </Router>
    );
};

export default MainPage;

