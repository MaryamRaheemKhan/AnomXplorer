import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import jsonData from './csvjson.json';
import './Dashboard.css';

const Dashboard = () => {
  const [patientCount, setPatientCount] = useState(0);
  const [anomalyCount, setAnomalyCount] = useState({ trueCount: 0, falseCount: 0 });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const countPatients = () => {
      setPatientCount(jsonData.length);
    };

    const countAnomalies = () => {
      const trueAnomalies = jsonData.filter(item => item.Anomaly === 'TRUE');
      const falseAnomalies = jsonData.filter(item => item.Anomaly === 'FALSE');
      setAnomalyCount({ trueCount: trueAnomalies.length, falseCount: falseAnomalies.length });
    };

    countPatients();
    countAnomalies();

    const interval = setInterval(() => {
      countPatients();
      countAnomalies();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const { trueCount, falseCount } = anomalyCount;
  const totalAnomalies = trueCount + falseCount;
  const truePercentage = ((trueCount / totalAnomalies) * 100).toFixed(2);
  const falsePercentage = ((falseCount / totalAnomalies) * 100).toFixed(2);

  // Generate dynamic colors based on data
  const colors = ['#7ebcff', '#7ebcff']; // Example colors, you can change them as needed

  const anomalyCountOptions = {
    chart: {
      id: 'anomaly-count',
      toolbar: {
        show: false
      }
    },
    xaxis: {
      categories: ['True Anomalies', 'False Anomalies'],
      labels: {
        style: {
          colors: '#1E1E1E'
        }
      }
    },
    colors: colors,
    dataLabels: {
      enabled: false
    }
  };

  const anomalyCountSeries = [{
    name: 'Anomaly Count',
    data: [trueCount, falseCount]
  }];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="dashcontainer">
    <div className={`dashboard ${menuOpen ? 'menu-open' : ''}`}>
      
      <h1>Dashboard</h1>
      <div className="kpi-container">
        <div className="kpi-item">
          <h3>Patients</h3>
          <p>{patientCount}</p>
        </div>
        <div className="kpi-item">
          <h3>True Anomalies</h3>
          <p>{trueCount} ({truePercentage}%)</p>
        </div>
        <div className="kpi-item">
          <h3>False Anomalies</h3>
          <p>{falseCount} ({falsePercentage}%)</p>
        </div>
      </div>
      <div className="chart-container">
        <div className="chart-item">
          <h2>Anomaly Count</h2>
          <Chart options={anomalyCountOptions} series={anomalyCountSeries} type="bar" height="300" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
