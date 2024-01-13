import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Pages/Home';
import ContactUsPopup from './Components/ContactUsPopup.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Servises from './Components/Pages/Details';
import Details from './Components/Pages/Details.js';
import Ticket from './Components/Pages/Ticket';


function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Routes>
        {/* <Route path="/" Component={Home} />
        <Route path="/Details" commponent={Details} /> */}

<Route path="/" element={<Home />} />
  <Route path="/Details" element={<Details />} />
  <Route path="/Ticket" element={<Ticket />} />


    </Routes>

    </Router>
    </>
  );
}

export default App;
