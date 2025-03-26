import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <Router>
      <div
        className={`app-layout ${
          isSidebarOpen ? 'sidebar-open' : 'sidebar-collapsed'
        }`}
      >
        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen} />

        {/* Main Content */}
        <div className="main-content">
          <Header toggleSidebar={toggleSidebar} />

          <div className="content-wrapper">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
