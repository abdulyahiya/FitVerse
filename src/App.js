import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Diet from './pages/Diet';
import ExerciseGuide from './pages/ExerciseGuide';
import JoinForm from './pages/JoinForm';
import Dashboard from './pages/Dashboard';
import AboutUs from './pages/AboutUs';
import { useAuth } from './context/AuthContext';
import './App.css';

function App() {
  const { user } = useAuth();

  return (
    <div className="App">
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/diet" element={<Diet />} />
          <Route path="/exercises" element={<ExerciseGuide />} />
          <Route path="/join" element={<JoinForm />} />
          <Route path="/about" element={<AboutUs />} />
          {user && <Route path="/dashboard" element={<Dashboard />} />}
        </Routes>
      </motion.div>
    </div>
  );
}

export default App;
