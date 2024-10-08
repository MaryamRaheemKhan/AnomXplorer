
// import { Button, FormControl, InputLabel, MenuItem, Select, Snackbar, IconButton, Menu } from '@mui/material';
// import MuiAlert from '@mui/material/Alert';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import './Log.css';

// const Log = () => {
//   const [data, setData] = useState([]);
//   const [selectedOption, setSelectedOption] = useState('');
//   const [notificationOpen, setNotificationOpen] = useState(false);
//   const [anchorEl, setAnchorEl] = useState(null);

//   const handleOptionChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

//   const handleGoButtonClick = () => {
//     // Handle navigation based on the selected option
//     switch (selectedOption) {
//       case 'DoctorCheckIn':
//         break;
//       case 'BloodTest':
//         break;
//       case 'TotalCostInsurance':
//         break;
//       default:
//         break;
//     }
//   };

//   const fetchAndCheckData = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/api/predictions');
//       if (!response.ok) {
//         throw new Error('Failed to fetch data');
//       }
//       const jsonData = await response.json();

//       // Check if new entries are added
//       if (jsonData.length > data.length) {
//         setNotificationOpen(true); // Trigger notification alert
//       }

//       setData(jsonData);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       // Handle error gracefully, e.g., show a message to the user
//     }
//   };

//   useEffect(() => {
//     setInterval(() => {
//       fetchAndCheckData();
//     }, 10000);
//   }, []); // Empty dependency array as there are no dependencies

//   const handleNotificationClose = () => {
//     setNotificationOpen(false);
//   };

//   const handleNotificationClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };


//     // Define columns here
//   const columns = [
//     { field: 'id', headerName: 'ID', width: 200 },
//     { field: 'PT_ADMISSION', headerName: 'PT_ADMISSION', width: 200 },
//     { field: 'PT_DISCHARGE', headerName: 'PT_DISCHARGE', width: 200 },
//     { field: 'PT_CHARGESAMOUNT', headerName: 'PT_CHARGESAMOUNT', width: 200 },
//     { field: 'PT_ADVANCEAMOUNT', headerName: 'PT_ADVANCEAMOUNT', width: 200 },
//     { field: 'PT_BILLDATE', headerName: 'PT_BILLDATE', width: 200 },
//     { field: 'Anomaly', headerName: 'Anomaly', width: 200 }
//   ];

//   return (
//     <div style={{ maxWidth: '10000px', margin: 'auto', padding: '20px' }}>
// <img src="images/set6.png" alt="set6" style={{ width: '300px', height: '50px', marginLeft: '38%'}} />
//       <div style={{ marginBottom: '2px', marginLeft: '1200px' }}>
//         <FormControl variant="outlined" style={{ minWidth: 200, marginRight: 10, marginTop: 10 }}>
//           <InputLabel id="options-label" style={{ marginTop: 3 }}>Select an option</InputLabel>
//           <Select
//             labelId="options-label"
//             id="options"
//             value={selectedOption}
//             onChange={handleOptionChange}
//             label="Select an option"
//           >
//             <MenuItem value="">Select an option</MenuItem>
//             <MenuItem value="DoctorCheckIn">True</MenuItem>
//             <MenuItem value="BloodTest">False</MenuItem>
//           </Select>
//         </FormControl>
//         <Link to={`/${selectedOption}`}>
//           <Button variant="contained" color="primary" onClick={handleGoButtonClick} style={{ marginTop: 19 }}>
//             Go
//           </Button>
//         </Link>
//       </div>
//       <DataTable columns={columns} data={data} />

//       {/* Notification Snackbar */}
//       <Snackbar
//         anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
//         open={notificationOpen}
//         autoHideDuration={6000}
//         onClose={handleNotificationClose}
//         action={
//           <React.Fragment>
//             <IconButton size="small" aria-label="notification" color="inherit" onClick={handleNotificationClick}>
//               <ArrowDropDownIcon />
//             </IconButton>
//           </React.Fragment>
//         }
//       >
//         <MuiAlert elevation={6} variant="filled" onClose={handleNotificationClose} severity="success">
//           New entry added to JSON file!
//         </MuiAlert>
//       </Snackbar>


//     </div>
//   );
// };
// export default Log;

import React, { useState, useEffect } from 'react';
import DataTable from '../components/DataTable.js';
import MuiAlert from '@mui/material/Alert';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Snackbar,IconButton } from '@mui/material';

import './Log.css';

const Log = () => {
   const [data, setData] = useState([]);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  
  const handleNotificationClose = () => {
    setNotificationOpen(false);
  };

  const fetchAndCheckData = async () => {
    try {

      const response = await fetch('https://anomxplorerfyp-production.up.railway.app/api/predictions');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response.json();

      // Map over the fetched data to include an id property
      const transformedData = jsonData.map((item, index) => ({
        ...item,
        id: item._id || index // Use MongoDB _id or index as fallback
      }));

      // Check if new entries are added
      if (transformedData.length > data.length) {
        setNotificationOpen(true); // Trigger notification alert
      }

      setData(transformedData);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error gracefully, e.g., show a message to the user
    } 
  };
  

    const handleNotificationClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  useEffect(() => {
    setInterval(() => {
      fetchAndCheckData();
    }, 10000);
  }, []); // Empty dependency array as there are no dependencies

  const columns = [
    { field: 'id', headerName: 'ID', width: 200 },
    { field: 'PT_ADMISSION', headerName: 'PT_ADMISSION', width: 200 },
    { field: 'PT_DISCHARGE', headerName: 'PT_DISCHARGE', width: 200 },
    { field: 'PT_CHARGESAMOUNT', headerName: 'PT_CHARGESAMOUNT', width: 200 },
    { field: 'PT_ADVANCEAMOUNT', headerName: 'PT_ADVANCEAMOUNT', width: 200 },
    { field: 'PT_BILLDATE', headerName: 'PT_BILLDATE', width: 200 },
    { field: 'Anomaly', headerName: 'Anomaly', width: 200 }
  ];

  return (
    <div style={{ maxWidth: '10000px',maxHeight:'500px' , margin: 'auto', padding: '20px' }}>
       <img src="images/set6.png" alt="set6" style={{ width: '300px', height: '50px', marginLeft: '38%'}} />
      
      <DataTable columns={columns} data={data} />

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

// import React, { useState, useEffect } from 'react';
// import DataTable from '../components/DataTable.js';
// import MuiAlert from '@mui/material/Alert';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import { Snackbar, IconButton } from '@mui/material';

// import './Log.css';

// const Log = () => {
//   const [data, setData] = useState([]);
//   const [notificationOpen, setNotificationOpen] = useState(false);
//   const [anchorEl, setAnchorEl] = useState(null);

//   const handleNotificationClose = () => {
//     setNotificationOpen(false);
//   };

//   const fetchAndCheckData = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/api/predictions');
//       if (!response.ok) {
//         throw new Error('Failed to fetch data');
//       }
//       const jsonData = await response.json();

//       // Check if new entries are added
//       if (jsonData.length > data.length) {
//         setNotificationOpen(true); // Trigger notification alert
//       }

//       setData(jsonData);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       // Handle error gracefully, e.g., show a message to the user
//     }
//   };

//   const handleNotificationClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   useEffect(() => {
//     setInterval(() => {
//       fetchAndCheckData();
//     }, 10000);
//   }, []); // Empty dependency array as there are no dependencies

//   const columns = [
//     { field: 'id', headerName: 'ID', width: 200 },
//     { field: 'PT_ADMISSION', headerName: 'PT_ADMISSION', width: 200 },
//     { field: 'PT_DISCHARGE', headerName: 'PT_DISCHARGE', width: 200 },
//     { field: 'PT_CHARGESAMOUNT', headerName: 'PT_CHARGESAMOUNT', width: 200 },
//     { field: 'PT_ADVANCEAMOUNT', headerName: 'PT_ADVANCEAMOUNT', width: 200 },
//     { field: 'PT_BILLDATE', headerName: 'PT_BILLDATE', width: 200 },
//     { field: 'Anomaly', headerName: 'Anomaly', width: 200 }
//   ];

//   return (
//     <div style={{ maxWidth: '10000px', margin: 'auto', padding: '20px' }}>
//  <img src="images/set6.png" alt="set6" style={{ width: '300px', height: '50px', marginLeft: '38%'}} />
//       <div className="scrollable-content">
//         <DataTable columns={columns} data={data} />

//         {/* Notification Snackbar */}
//         <Snackbar
//           anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
//           open={notificationOpen}
//           autoHideDuration={6000}
//           onClose={handleNotificationClose}
//           action={
//             <IconButton size="small" aria-label="notification" color="inherit" onClick={handleNotificationClick}>
//               <ArrowDropDownIcon />
//             </IconButton>
//           }
//         >
//           <MuiAlert elevation={6} variant="filled" onClose={handleNotificationClose} severity="success">
//             New entry added to JSON file!
//           </MuiAlert>
//         </Snackbar>
//       </div>
//     </div>
//   );
// };

// export default Log;

// import React, { useState, useEffect } from 'react';
// import DataTable from '../components/DataTable.js';
// import { Button, FormControl, InputLabel, MenuItem, Select, Snackbar, IconButton } from '@mui/material';
// import MuiAlert from '@mui/material/Alert';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import './Log.css';

// const Log = () => {
//    const [data, setData] = useState([]);
//   const [selectedOption, setSelectedOption] = useState('');
//   const [notificationOpen, setNotificationOpen] = useState(false);
//   const [anchorEl, setAnchorEl] = useState(null);
//   const handleOptionChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

//   const handleGoButtonClick = () => {
//     let filteredData = [];
//     switch (selectedOption) {
//       case 'True':
//         filteredData = data.filter(item => item.Anomaly === true);
//         break;
//       case 'False':
//         filteredData = data.filter(item => item.Anomaly === false);
//         break;
//       default:
//         filteredData = data;
//         break;
//     }
//     setData(filteredData);
//   };

//   const handleNotificationClose = () => {
//     setNotificationOpen(false);
//   };
//   // const fetchAndCheckData = async () => {
//   //   try {
//   //     const response = await fetch('http://localhost:5000/api/predictions');
//   //     if (!response.ok) {
//   //       throw new Error('Failed to fetch data');
//   //     }
//   //     const jsonData = await response.json();

//   //     // Check if new entries are added
//   //     if (jsonData.length > data.length) {
//   //       setNotificationOpen(true); // Trigger notification alert
//   //     }

//   //     setData(jsonData);
//   //   } catch (error) {
//   //     console.error('Error fetching data:', error);
//   //     // Handle error gracefully, e.g., show a message to the user
//   //   }
//   // };

  
//     const handleNotificationClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   useEffect(() => {
//     setInterval(() => {
//       fetchAndCheckData();
//     }, 10000);
//   }, []); // Empty dependency array as there are no dependencies

//   const columns = [
//     { field: 'id', headerName: 'ID', width: 200 },
//     { field: 'PT_ADMISSION', headerName: 'PT_ADMISSION', width: 200 },
//     { field: 'PT_DISCHARGE', headerName: 'PT_DISCHARGE', width: 200 },
//     { field: 'PT_CHARGESAMOUNT', headerName: 'PT_CHARGESAMOUNT', width: 200 },
//     { field: 'PT_ADVANCEAMOUNT', headerName: 'PT_ADVANCEAMOUNT', width: 200 },
//     { field: 'PT_BILLDATE', headerName: 'PT_BILLDATE', width: 200 },
//     { field: 'Anomaly', headerName: 'Anomaly', width: 200 }
//   ];

//   return (
//     <div style={{ maxWidth: '10000px', margin: 'auto', padding: '20px' }}>
//      <img src="images/set6.png" alt="set6" style={{ width: '300px', height: '50px', marginLeft: '38%'}} />
//       <div style={{ marginBottom: '2px', marginLeft: '1200px' }}>
//         <FormControl variant="outlined" style={{ minWidth: 200, marginRight: 10, marginTop: 10 }}>
//           <InputLabel id="options-label" style={{ marginTop: 3 }}>Select an option</InputLabel>
//           <Select
//             labelId="options-label"
//             id="options"
//             value={selectedOption}
//             onChange={handleOptionChange}
//             label="Select an option"
//           >
//             <MenuItem value="">Select an option</MenuItem>
//             <MenuItem value="true">True</MenuItem>
//             <MenuItem value="false">False</MenuItem>
//           </Select>
//         </FormControl>
//         <Button variant="contained" color="primary" onClick={handleGoButtonClick} style={{ marginTop: 19 }}>
//           Go
//         </Button>
//       </div>
//       <DataTable columns={columns} data={data} />

//       {/* Notification Snackbar */}
//       <Snackbar
//         anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
//         open={notificationOpen}
//         autoHideDuration={6000}
//         onClose={handleNotificationClose}
//         action={
//           <IconButton size="small" aria-label="notification" color="inherit" onClick={handleNotificationClick}>
//             <ArrowDropDownIcon />
//           </IconButton>
//         }
//       >
//         <MuiAlert elevation={6} variant="filled" onClose={handleNotificationClose} severity="success">
//           New entry added to JSON file!
//         </MuiAlert>
//       </Snackbar>
//     </div>
//   );
// };

// export default Log;