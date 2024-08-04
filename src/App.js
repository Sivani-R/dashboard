import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Overview from './pages/Overview';
import Analytics from './pages/Analytics'; 
import Settings from './pages/Settings';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/overview" element={<Overview />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/" element={<Overview />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
