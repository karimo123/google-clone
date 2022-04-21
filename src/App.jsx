import React from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Searchpage from './pages/SearchPage';


function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/search" element={<Searchpage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>


    </div>
   
  );
}

export default App;


