import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SignUp from './components/SignUp';
import Login from './components/Login';
import HomePage from './components/HomePage';
import JobListings from './components/JobListings';
import TopCompanies from './components/TopCompanies';
import About from './components/AboutUs';
import Profile from './components/Profile';
import ParentComponent from './components/ParentComponent';
function App() {
  return (
    <Router>
      <div>
        {/* Header will appear on every page */}
        

        {/* Routes */}
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/jobs" element={<JobListings />} />
          <Route path="/candidate" element={<TopCompanies />} />
          <Route path="/about" element={<About />}/>
          <Route path="/profile" element={<ParentComponent />}/>

          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
