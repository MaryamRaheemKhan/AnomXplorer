import React, { useState, useEffect } from 'react';
import DataTable from '../components/DataTable.js';
import MuiAlert from '@mui/material/Alert';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Snackbar, IconButton } from '@mui/material';
import new_data from '../../src/pages/csvjson.json'
import { TextField, InputAdornment, Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Search } from '@mui/icons-material';
import './Log.css';

const Log = () => {
  const [data, setData] = useState([]);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [filterInput, setFilterInput] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [filteredRows, setFilteredRows] = useState([]);

  // Initialize filteredRows with data when data changes
  useEffect(() => {
    setFilteredRows(data);
  }, [data]);

  const handleFilterChange = (e) => {
    setFilterInput(e.target.value);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleGoButtonClick = () => {
    let filtered = [];
    
    switch (selectedOption) {
      case 'TRUE':
        filtered = data.filter(row => row.Anomaly === 'TRUE');
        break;
      case 'FALSE':
        filtered = data.filter(row => row.Anomaly === 'FALSE');
        break;
      default:
        filtered = data;
        break;
    }
    setFilteredRows(filtered);
    console.log(filtered);
  };

  const handleNotificationClose = () => {
    setNotificationOpen(false);
  };

  const handleIdFilter = () => {
    const filtered = data.filter(
      (row) => row.PT_ID && row.PT_ID.toString().toLowerCase().includes(filterInput.toLowerCase())
    );
    setFilteredRows(filtered);
  };

  const handleClearFilter = () => {
    setFilterInput('');
    setSelectedOption('');
    setFilteredRows(data);
  };

  const fetchAndCheckData = async () => {
    console.log("Fetching data...");
    try {
      const response = await fetch('http://localhost:5000/api/predictions');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response.json();

      const transformedData = jsonData.map((item, index) => ({
        ...item,
        id: item._id || index
      }));

      if (transformedData.length > data.length) {
        setNotificationOpen(true);
      }

      if (!transformedData) {
        setData(new_data);
      } else {
        setData(transformedData);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } 
  };

  const handleNotificationClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    setData(new_data);
  }, []);

const columns = [
  { field: 'PT_ID', headerName: 'PT_ID', width: 130, flex: 1 }, // Reduced width + flex
  { field: 'PT_ADMISSION', headerName: 'ADMISSION', width: 130, flex: 1 }, // Shorter header
  { field: 'PT_DISCHARGE', headerName: 'DISCHARGE', width: 130, flex: 1 }, // Shorter header
  { field: 'PT_CHARGESAMOUNT', headerName: 'CHARGES', width: 130, flex: 1 }, // Shorter header
  { field: 'PT_ADVANCEAMOUNT', headerName: 'ADVANCE', width: 130, flex: 1 }, // Shorter header
  { field: 'PT_BILLDATE', headerName: 'BILL DATE', width: 130, flex: 1 }, // Shorter header
  { field: 'Anomaly', headerName: 'ANOMALY', width: 130, flex: 1 } // Reduced width
];
  return (
    <div style={{ 
      width: '100%', 
      minHeight: '100vh', 
      padding: '20px',
      transform: 'scale(1)',
      transformOrigin: 'top center',
      overflow: 'auto'
    }}>
      {/* Header Section */}
      <img 
        src="images/set6.png" 
        alt="set6" 
        style={{ 
          width: '300px', 
          height: '50px', 
          display: 'block',
          margin: '0 auto 20px auto'
        }} 
      />
      
      {/* Filter Controls Section */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'flex-start',
        marginBottom: '20px',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        {/* ID Filter Section */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <TextField
            label="Filter by ID"
            value={filterInput}
            onChange={handleFilterChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            style={{ width: '250px' }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleIdFilter}
          >
            Filter
          </Button>
          <Button
            variant="outlined"
            onClick={handleClearFilter}
          >
            Clear
          </Button>
        </div>

        {/* Anomaly Filter Section */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <FormControl variant="outlined" style={{ minWidth: 200 }}>
            <InputLabel id="options-label">Filter by Anomaly</InputLabel>
            <Select
              labelId="options-label"
              id="options"
              value={selectedOption}
              onChange={handleOptionChange}
              label="Filter by Anomaly"
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="TRUE">True</MenuItem>
              <MenuItem value="FALSE">False</MenuItem>
            </Select>
          </FormControl>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={handleGoButtonClick}
          >
            Go
          </Button>
        </div>
      </div>

      {/* Table Section */}
      <div style={{ 
        width: '100%',
        height: '60vh',
        overflow: 'auto',
        border: '1px solid #e0e0e0',
        borderRadius: '8px'
      }}>
        <DataTable columns={columns} data={filteredRows.length > 0 ? filteredRows : data} />
      </div>

      {/* Notification Snackbar */}
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={notificationOpen}
        autoHideDuration={6000}
        onClose={handleNotificationClose}
        action={
          <IconButton size="small" aria-label="notification" color="inherit" onClick={handleNotificationClick}>
            <ArrowDropDownIcon />
          </IconButton>
        }
      >
        <MuiAlert elevation={6} variant="filled" onClose={handleNotificationClose} severity="success">
          New entry added to JSON file!
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default Log;