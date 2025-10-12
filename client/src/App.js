import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Main from './components/Main';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Log = lazy(() => import('./pages/Log'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Anomaly = lazy(() => import('./pages/Anomaly'));
const Email = lazy(() => import('./pages/Email'));

function App() {
  return (
    <Router>
      <div>
        {/* Sidebar outside of Routes so it renders on all pages except login if needed */}
        <Sidebar />

        {/* Suspense wraps Routes for lazy loading */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* Routes now use `element` prop instead of `component` */}
            <Route path="/" element={<Main />} />
            <Route path="/home" element={<Home />} />
            <Route path="/log" element={<Log />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/anomaly" element={<Anomaly />} />
            <Route path="/email" element={<Email />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
