import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Services from './Pages/Services.jsx';
import NavBar from './Components/NavBar.jsx';
import Footer from './Components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
