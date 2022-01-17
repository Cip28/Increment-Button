import React from 'react'
import './App.css';
import Navbar from "./Navbar";
import Daily from "./Daily";
import Home from "./Home";
import Archive from "./Archive";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'



function App () {
  return (
     
    <Router>
          <Navbar />
          <Routes>         
            <Route exact path="/Increment-Button" element={ <Home />}/>
            <Route path="/daily" element={<Daily />}/>
            <Route path="/archive" element={<Archive />}/>
          </Routes>
    </Router>

      );
}

export default App;
  