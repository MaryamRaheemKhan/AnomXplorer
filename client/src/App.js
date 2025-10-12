import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Log = lazy(() => import('./pages/Log'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Anomaly = lazy(() => import('./pages/Anomaly'));
const Email = lazy(() => import('./pages/Email'));

function AppContent() {
  const location = useLocation();

  // Hide Sidebar on main ("/") page
  const hideSidebar = location.pathname === '/';

  return (
    <div>
      {!hideSidebar && <Sidebar />}

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Home />} />
          <Route path="/log" element={<Log />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/anomaly" element={<Anomaly />} />
          <Route path="/email" element={<Email />} />
        </Routes>
      </Suspense>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
