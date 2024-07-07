import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import './index.css';
import Navbar from './components/navbar.jsx';
import Work from './pages/work.jsx';
import About from './pages/about.jsx';
import TechStack from './pages/techStack.jsx';
import Connect from './pages/connect.jsx';


function App() {
  return (
    <Router>
    <main className="base-app">
    <div className="uiverse">
      <div className="wrapper">
        <div className="circle circle-12"></div>
        <div className="circle circle-11"></div>
        <div className="circle circle-10"></div>
        <div className="circle circle-9"></div>
        <div className="circle circle-8"></div>
        <div className="circle circle-7"></div>
        <div className="circle circle-6"></div>
        <div className="circle circle-5"></div>
        <div className="circle circle-4"></div>
        <div className="circle circle-3"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-1"></div>
        </div>
      </div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/tech-stack" element={<TechStack />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
    </main>
    
    </Router>
  );
}

export default App;
