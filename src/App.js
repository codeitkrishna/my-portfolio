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
