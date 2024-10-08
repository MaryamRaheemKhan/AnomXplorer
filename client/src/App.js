import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Main from './components/Main';

// Use lazy and Suspense for lazy loading other components
const Home = lazy(() => import('./pages/Home'));
const Log = lazy(() => import('./pages/Log'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Anomaly = lazy(() => import('./pages/Anomaly'));
const Email = lazy(() => import('./pages/Email'));

// const BloodTest = lazy(() => import('./pages/BloodTest'));
// const NursePresence = lazy(() => import('./pages/NursePresence'));
// const DoctorCheckIn = lazy(() => import('./pages/DoctorCheckIn'));
// const Anomaly = lazy(() => import('./pages/Anomaly'));
// const BedAssign = lazy(() => import('./pages/BedAssign'));
// const TotalCostInsurance = lazy(() => import('./pages/TotalCostInsurance'));

function App() {
  return (
    <div>
      <Router>
        <Switch>
          {/* Render the Sidebar only on pages other than the login page */}
          <Route path='/' exact component={Main}></Route>
          <Route>
            <Sidebar />
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route path='/Home' component={Home}></Route>
                <Route path='/log' component={Log}></Route>
                <Route path='/Dashboard' component={Dashboard}></Route>
                <Route path='/Anomaly' component={Anomaly}></Route>
                <Route path='/Email' component={Email}></Route>

                {/* <Route path='/DoctorCheckIn' component={DoctorCheckIn}></Route>
                <Route path='/BloodTest' component={BloodTest}></Route>
                <Route path='/NursePresence' component={NursePresence}></Route>
                <Route path='/BedAssign' component={BedAssign}></Route>
                <Route path='/TotalCostInsurance' component={TotalCostInsurance}></Route> */}
              </Switch>
            </Suspense>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

