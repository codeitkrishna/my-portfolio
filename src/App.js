import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import './index.css';
import Navbar from './components/navbar.jsx';
import Work from './pages/work.jsx';
import Footer from './components/footer.jsx';


function App() {
  return (
    <Router>
    <main className="base-app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Work />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </main>
    <Footer />
    </Router>
  );
}

export default App;
