// // // import * as React from 'react';
// // // import { DataGrid } from '@mui/x-data-grid';
// // // import { TextField, InputAdornment, Button, IconButton, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
// // // import { Search } from '@mui/icons-material';
// // // import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// // // import Tree from 'react-d3-tree';
// // // import './DataTable.css';

// // // // Define CustomLabel component here
// // // const CustomLabel = ({ nodeData }) => (
// // //   <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
// // //     <div>{nodeData.attributes.condition}</div>
// // //   </div>
// // // );

// // // const DataTable = ({ columns, data }) => {
// // //   const [filterInput, setFilterInput] = React.useState('');
// // //   const [filteredRows, setFilteredRows] = React.useState(data);
// // //   const [selectedRowData, setSelectedRowData] = React.useState(null);
// // //   const [openModal, setOpenModal] = React.useState(false);
// // //   const [selectedRow, setSelectedRow] = React.useState(null);


// // //   const handleFilterChange = (e) => {
// // //     setFilterInput(e.target.value);
// // //   };

// // //   const handleIdFilter = () => {
// // //     const filteredRows = data.filter(
// // //       (row) => row.id.toString().toLowerCase().includes(filterInput.toLowerCase())
// // //     );
// // //     setFilteredRows(filteredRows);
// // //   };

// // //   const handleClearFilter = () => {
// // //     setFilterInput('');
// // //     setFilteredRows(data);
// // //   };

// // //   const handleArrowClick = (rowId) => {
// // //     const row = data.find((item) => item.id === rowId);
// // //     setSelectedRowData(row);
// // //     setOpenModal(true);
// // //   };

// // //   const handleCloseModal = () => {
// // //     setOpenModal(false);
// // //   };

// // //     const toggleDescription = (rowId) => {
// // //     setSelectedRow(selectedRow === rowId ? null : rowId);
// // //   };

// // //   const getDescription = (row) => {
// // //     let description = '';

// // //     if (row.Anomaly === 'True') {
// // //       if (row.PT_DISCHARGE < row.PT_ADMISSION) {
// // //         description += 'The Discharge Date is Earlier than the Admission Date\n';
// // //       }

// // //       if (row.PT_ADVANCEAMOUNT > row.PT_CHARGESAMOUNT) {
// // //         description += 'The Advance Payment Amount Exceeds the Total Charges.\n';
// // //       }

// // //       if (row.PT_BILLDATE < row.PT_ADMISSION || row.PT_BILLDATE > row.PT_DISCHARGE) {
// // //         description += 'The Bill was Generated Before Admission or After Discharge.\n';
// // //       }
// // //     }

// // //     return description.trim();
// // //   };

// // //   const renderTree = () => {
// // //     if (!selectedRowData) return null;

// // //     let rootName = '';
// // //     let conditionDescription = '';
// // //     let children = [];

// // //     const row = selectedRowData;

// // //     if (row.Anomaly === 'True') {
// // //       if (row.PT_DISCHARGE < row.PT_ADMISSION) {
// // //         rootName = 'Discharge Date';
// // //         conditionDescription = 'Earlier than Admission';
// // //       } else if (row.PT_ADVANCEAMOUNT > row.PT_CHARGESAMOUNT) {
// // //         rootName = 'Advance Payment Amount';
// // //         conditionDescription = 'Exceeds Total Charges';
// // //       } else if (row.PT_BILLDATE < row.PT_ADMISSION || row.PT_BILLDATE > row.PT_DISCHARGE) {
// // //         rootName = 'Bill Date';
// // //         conditionDescription = 'Before Admission Date';
// // //       }

// // //       children.push(
// // //         { name: 'No Anomaly', attributes: { condition: 'No Anomaly Found' }, nodeSvgShape: { shapeProps: { fill: 'green' } } },
// // //         { name: 'Anomaly', attributes: { condition: getDescription(row) }, nodeSvgShape: { shapeProps: { fill: 'red' } } }
// // //       );
// // //     } else {
// // //       rootName = 'No Anomaly';
// // //       conditionDescription = 'No Anomaly Found';
// // //       children.push(
// // //         { name: 'Anomaly', attributes: { condition: getDescription(row) }, nodeSvgShape: { shapeProps: { fill: 'red' } } },
// // //         { name: 'No Anomaly', attributes: { condition: 'No Anomaly Found' }, nodeSvgShape: { shapeProps: { fill: 'green' } } }
// // //       );
// // //     }

// // //     const treeData = {
// // //       name: rootName,
// // //       attributes: { condition: conditionDescription },
// // //       children: children
// // //     };

// // //     return (
// // //       <Dialog open={openModal} onClose={handleCloseModal} fullWidth maxWidth="sm">
// // //         <DialogTitle>Decision Tree</DialogTitle>
// // //         <DialogContent>
// // //           <Tree
// // //             data={treeData}
// // //             orientation="vertical"
// // //             separation={{ siblings: 1.5, nonSiblings: 2 }}
// // //             allowForeignObjects
// // //             nodeLabelComponent={{
// // //               render: <CustomLabel />,
// // //               foreignObjectWrapper: {
// // //                 y: 30
// // //               }
// // //             }}
// // //           />
// // //         </DialogContent>
// // //         <DialogActions>
// // //           <Button onClick={handleCloseModal} color="primary">Close</Button>
// // //         </DialogActions>
// // //       </Dialog>
// // //     );
// // //   };

// // //   const renderAnomalyCell = (params) => {
// // //     const handleArrowButtonClick = () => {
// // //       handleArrowClick(params.row.id);
// // //     };
  
// // //     const ArrowButton = () => {
// // //       if (params.value === 'True') {
// // //         return (
// // //           <IconButton aria-label="arrow" size="large" onClick={handleArrowButtonClick}>
// // //             <ArrowForwardIcon />
// // //           </IconButton>
// // //         );
// // //       } else {
// // //         return null;
// // //       }
// // //     };
  
// // //     return (
// // //       <>
// // //         <div>{params.value}</div>
// // //         <ArrowButton />
// // //         {renderTree(params.row)}
// // //       </>
// // //     );
// // //   };
  
  


// // //   function getCellClassName(params) {
// // //     return params.row.Anomaly === 'True' ? 'highlighted-row' : '';
// // //   }



// // //   return (
// // //     <div style={{ height: 800, width: '100%' }}>
// // //       <div style={{ padding: 10 }}>
// // //         <TextField
// // //           label="Filter by ID"
// // //           value={filterInput}
// // //           onChange={handleFilterChange}
// // //           InputProps={{
// // //             startAdornment: (
// // //               <InputAdornment position="start">
// // //                 <Search />
// // //               </InputAdornment>
// // //             ),
// // //           }}
// // //           style={{ marginBottom: 10, marginLeft: 10 }}
// // //         />
// // //         <Button
// // //           variant="contained"
// // //           color="primary"
// // //           onClick={handleIdFilter}
// // //           style={{ marginLeft: 30, marginBottom: 14 }}
// // //         >
// // //           Filter
// // //         </Button>
// // //         <Button
// // //           variant="contained"
// // //           onClick={handleClearFilter}
// // //           style={{ marginLeft: 20, marginBottom: 15 }}
// // //         >
// // //           Clear Filter
// // //         </Button>
// // //       </div>
// // //       <DataGrid
// // //         style={{ backgroundColor: '#ffffff', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}
// // //         rows={filterInput ? filteredRows : data}
// // //         columns={columns.map((col) =>
// // //           col.field === 'Anomaly' ? { ...col, renderCell: renderAnomalyCell } : col
// // //         )}
// // //         pageSize={5}
// // //         rowsPerPageOptions={[5, 10, 20]}
// // //         checkboxSelection
// // //         disableSelectionOnClick
// // //         getCellClassName={getCellClassName}
// // //         rowClassName={(row) => `super-row ${row.isSelected ? 'selected-row' : ''}`}
// // //         components={{
// // //           NoRowsOverlay: () => (
// // //             <div style={{ width: '100%', textAlign: 'center', padding: '20px', color: '#777' }}>No data available</div>
// // //           ),
         
// // //         }}
       
// // //       />
// // //       {renderTree()}
// // //     </div>
// // //   );
// // // };

// // // export default DataTable;

import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { TextField, InputAdornment, Button, IconButton, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { Search } from '@mui/icons-material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Tree from 'react-d3-tree';
import './DataTable.css';
import {FormControl, InputLabel, MenuItem, Select } from '@mui/material';

// Define CustomLabel component here
const CustomLabel = ({ nodeData }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div>{nodeData.attributes.condition}</div>
  </div>
);

const DataTable = ({ columns, data }) => {
  const [filterInput, setFilterInput] = useState('');
  const [filterAnomaly, setFilterAnomaly] = useState('');
  const [filteredRows, setFilteredRows] = useState(data);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');
  // const [notificationOpen, setNotificationOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');


  const handleFilterChange = (e) => {
    setFilterInput(e.target.value);
  };
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleGoButtonClick = () => {
    let filteredRows = [];
    
    switch (selectedOption) {
      case 'True':
        filteredRows = data.filter(row => row.Anomaly === 'True');
        break;
      case 'False':
        filteredRows = data.filter(row => row.Anomaly === 'False');
        break;
      default:
        filteredRows = data;
        break;
    }
    setFilteredRows(filteredRows);
    setFilterAnomaly(filteredRows)
    console.log(filteredRows);
  };
  
  

  const handleIdFilter = () => {
    const filteredRows = data.filter(
      (row) => row.id.toString().toLowerCase().includes(filterInput.toLowerCase())
    );
    setFilteredRows(filteredRows);
  };

  const handleClearFilter = () => {
    setFilterInput('');
    setFilteredRows(data);
  };

  const handleArrowClick = (rowId) => {
    const row = data.find((item) => item.id === rowId);
    setSelectedRowData(row);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const toggleDescription = (rowId) => {
    setSelectedRow(selectedRow === rowId ? null : rowId);
  };

  const getDescription = (row) => {
    let description = '';

    if (row.Anomaly === 'True') {
      if (row.PT_DISCHARGE < row.PT_ADMISSION) {
        description += 'The Discharge Date is Earlier than the Admission Date\n';
      }

      if (row.PT_ADVANCEAMOUNT > row.PT_CHARGESAMOUNT) {
        description += 'The Advance Payment Amount Exceeds the Total Charges.\n';
      }

      if (row.PT_BILLDATE < row.PT_ADMISSION || row.PT_BILLDATE > row.PT_DISCHARGE) {
        description += 'The Bill was Generated Before Admission or After Discharge.\n';
      }
    }

    return description.trim();
  };

  const renderTree = () => {
    if (!selectedRowData) return null;

    let rootName = '';
    let conditionDescription = '';
    let children = [];

    const row = selectedRowData;

    if (row.Anomaly === 'True') {
      if (row.PT_DISCHARGE < row.PT_ADMISSION) {
        rootName = 'Discharge Date';
        conditionDescription = 'Earlier than Admission';
      } else if (row.PT_ADVANCEAMOUNT > row.PT_CHARGESAMOUNT) {
        rootName = 'Advance Payment Amount';
        conditionDescription = 'Exceeds Total Charges';
      } else if (row.PT_BILLDATE < row.PT_ADMISSION || row.PT_BILLDATE > row.PT_DISCHARGE) {
        rootName = 'Bill Date';
        conditionDescription = 'Before Admission Date';
      }

      children.push(
        { name: 'No Anomaly', attributes: { condition: 'No Anomaly Found' }, nodeSvgShape: { shapeProps: { fill: 'green' } } },
        { name: 'Anomaly', attributes: { condition: getDescription(row) }, nodeSvgShape: { shapeProps: { fill: 'red' } } }
      );
    } else {
      rootName = 'No Anomaly';
      conditionDescription = 'No Anomaly Found';
      children.push(
        { name: 'Anomaly', attributes: { condition: getDescription(row) }, nodeSvgShape: { shapeProps: { fill: 'red' } } },
        { name: 'No Anomaly', attributes: { condition: 'No Anomaly Found' }, nodeSvgShape: { shapeProps: { fill: 'green' } } }
      );
    }

    const treeData = {
      name: rootName,
      attributes: { condition: conditionDescription },
      children: children
    };

    return (
      <Dialog open={openModal} onClose={handleCloseModal} fullWidth maxWidth="sm">
        <DialogTitle>Decision Tree</DialogTitle>
        <DialogContent>
          <Tree
            data={treeData}
            orientation="vertical"
            separation={{ siblings: 1.5, nonSiblings: 2 }}
            allowForeignObjects
            nodeLabelComponent={{
              render: <CustomLabel />,
              foreignObjectWrapper: {
                y: 30
              }
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">Close</Button>
          <Button onClick={handleSendEmail} color="primary">Send Email</Button>
        </DialogActions>
      </Dialog>
    );
  };

  const renderAnomalyCell = (params) => {
    const handleArrowButtonClick = () => {
      handleArrowClick(params.row.id);
    };
  
    const ArrowButton = () => {
      if (params.value === 'True') {
        return (
          <IconButton aria-label="arrow" size="large" onClick={handleArrowButtonClick}>
            <ArrowForwardIcon />
          </IconButton>
        );
      } else {
        return null;
      }
    };
  
    return (
      <>
        <div>{params.value}</div>
        <ArrowButton />
        {renderTree(params.row)}
      </>
    );
  };

  const getCellClassName = (params) => {
    return params.row.Anomaly === 'True' ? 'highlighted-row' : '';
  };

  // Email Dialog
  const handleSendEmail = () => {
    // Implement email sending functionality here
    window.location.href = 'https://anom-xplorer-fyp.vercel.app/Email';
  };

  return (
  <div style={{ height: 800, width: '100%' }}>
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px' }}>
    <div style={{ flexGrow: 1, marginBottom: 7}}>
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
          style={{ marginBottom: 10, marginLeft: 10, marginBottom: 70 , marginTop: 10}}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleIdFilter}
          style={{ marginLeft: 30, marginTop: 20 }}
        >
          Filter
        </Button>
        <Button
          variant="contained"
          onClick={handleClearFilter}
          style={{ marginLeft: 20, marginTop: 20 }}
        >
          Clear Filter
        </Button>

    </div>
    <div style={{marginBottom:10}}>
      <FormControl variant="outlined" style={{ minWidth: 200, marginRight: 10 }}>
        <InputLabel id="options-label" style={{ marginTop: 2 }}>Select an option</InputLabel>
        <Select
          labelId="options-label"
          id="options"
          value={selectedOption}
          onChange={handleOptionChange}
          label="Select an option"
        >
          <MenuItem value="">Select an option</MenuItem>
          <MenuItem value="True">True</MenuItem>
          <MenuItem value="False">False</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" onClick={handleGoButtonClick} style={{ marginTop: 19 }}>
        Go
      </Button>
    </div>
  </div>
  <DataGrid
    style={{ backgroundColor: '#ffffff', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}
    rows={filterInput || filterAnomaly ? filteredRows : data}
    columns={columns.map((col) =>
      col.field === 'Anomaly' ? { ...col, renderCell: renderAnomalyCell } : col
    )}
    pageSize={5}
    rowsPerPageOptions={[5, 10, 20]}
    checkboxSelection
    disableSelectionOnClick
    getCellClassName={getCellClassName}
    rowClassName={(row) => `super-row ${row.isSelected ? 'selected-row' : ''}`}
    components={{
      NoRowsOverlay: () => (
        <div style={{ width: '100%', textAlign: 'center', padding: '20px', color: '#777' }}>No data available</div>
      ),
    }}
  />
  {renderTree()}
</div>
);
};

export default DataTable;

// import { DataGrid } from '@mui/x-data-grid';
// import React, { useState } from 'react';
// import { TextField, InputAdornment, Button, IconButton, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
// import { Search } from '@mui/icons-material';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import Tree from 'react-d3-tree';
// import './DataTable.css';
// import {FormControl, InputLabel, MenuItem, Select } from '@mui/material';


// // Define CustomLabel component here
// const CustomLabel = ({ nodeData }) => (
//   <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//     <div>{nodeData.attributes.condition}</div>
//   </div>
// );

// const DataTable = ({ columns, data }) => {
//   const [filterInput, setFilterInput] = useState('');
//   const [filterAnomaly, setFilterAnomaly] = useState('');
//   const [filteredRows, setFilteredRows] = useState(data);
//   const [selectedRowData, setSelectedRowData] = useState(null);
//   const [openModal, setOpenModal] = useState(false);
//   const [selectedRow, setSelectedRow] = useState(null);
//   // const [email, setEmail] = useState('');
//   // const [message, setMessage] = useState('');
//   // const [notificationOpen, setNotificationOpen] = useState(false);
//   const [selectedOption, setSelectedOption] = useState('');


//   const handleFilterChange = (e) => {
//     setFilterInput(e.target.value);
//   };
//   const handleOptionChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

//   const handleGoButtonClick = () => {
//     let filteredRows = [];
    
//     switch (selectedOption) {
//       case 'True':
//         filteredRows = data.filter(row => row.Anomaly === 'True');
//         break;
//       case 'False':
//         filteredRows = data.filter(row => row.Anomaly === 'False');
//         break;
//       default:
//         filteredRows = data;
//         break;
//     }
//     setFilteredRows(filteredRows);
//     setFilterAnomaly(filteredRows)
//     console.log(filteredRows);
//   };
  
  

//   const handleIdFilter = () => {
//     const filteredRows = data.filter(
//       (row) => row.id.toString().toLowerCase().includes(filterInput.toLowerCase())
//     );
//     setFilteredRows(filteredRows);
//   };

//   const handleClearFilter = () => {
//     setFilterInput('');
//     setFilteredRows(data);
//   };

//   const handleArrowClick = (rowId) => {
//     const row = data.find((item) => item.id === rowId);
//     setSelectedRowData(row);
//     setOpenModal(true);
//   };

//   const handleCloseModal = () => {
//     setOpenModal(false);
//   };

//   const toggleDescription = (rowId) => {
//     setSelectedRow(selectedRow === rowId ? null : rowId);
//   };

//   const getDescription = (row) => {
//     let description = '';

//     if (row.Anomaly === 'True') {
//       if (row.PT_DISCHARGE < row.PT_ADMISSION) {
//         description += 'The Discharge Date is Earlier than the Admission Date\n';
//       }

//       if (row.PT_ADVANCEAMOUNT > row.PT_CHARGESAMOUNT) {
//         description += 'The Advance Payment Amount Exceeds the Total Charges.\n';
//       }

//       if (row.PT_BILLDATE < row.PT_ADMISSION || row.PT_BILLDATE > row.PT_DISCHARGE) {
//         description += 'The Bill was Generated Before Admission or After Discharge.\n';
//       }
//     }

//     return description.trim();
//   };

//   const renderTree = () => {
//     if (!selectedRowData) return null;

//     let rootName = '';
//     let conditionDescription = '';
//     let children = [];

//     const row = selectedRowData;

//     if (row.Anomaly === 'True') {
//       if (row.PT_DISCHARGE < row.PT_ADMISSION) {
//         rootName = 'Discharge Date';
//         conditionDescription = 'Earlier than Admission';
//       } else if (row.PT_ADVANCEAMOUNT > row.PT_CHARGESAMOUNT) {
//         rootName = 'Advance Payment Amount';
//         conditionDescription = 'Exceeds Total Charges';
//       } else if (row.PT_BILLDATE < row.PT_ADMISSION || row.PT_BILLDATE > row.PT_DISCHARGE) {
//         rootName = 'Bill Date';
//         conditionDescription = 'Before Admission Date';
//       }

//       children.push(
//         { name: 'No Anomaly', attributes: { condition: 'No Anomaly Found' }, nodeSvgShape: { shapeProps: { fill: 'green' } } },
//         { name: 'Anomaly', attributes: { condition: getDescription(row) }, nodeSvgShape: { shapeProps: { fill: 'red' } } }
//       );
//     } else {
//       rootName = 'No Anomaly';
//       conditionDescription = 'No Anomaly Found';
//       children.push(
//         { name: 'Anomaly', attributes: { condition: getDescription(row) }, nodeSvgShape: { shapeProps: { fill: 'red' } } },
//         { name: 'No Anomaly', attributes: { condition: 'No Anomaly Found' }, nodeSvgShape: { shapeProps: { fill: 'green' } } }
//       );
//     }

//     const treeData = {
//       name: rootName,
//       attributes: { condition: conditionDescription },
//       children: children
//     };

//     return (
//       <Dialog open={openModal} onClose={handleCloseModal} fullWidth maxWidth="sm">
//         <DialogTitle>Decision Tree</DialogTitle>
//         <DialogContent>
//           <Tree
//             data={treeData}
//             orientation="vertical"
//             separation={{ siblings: 1.5, nonSiblings: 2 }}
//             allowForeignObjects
//             nodeLabelComponent={{
//               render: <CustomLabel />,
//               foreignObjectWrapper: {
//                 y: 30
//               }
//             }}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseModal} color="primary">Close</Button>
//           <Button onClick={handleSendEmail} color="primary">Send Email</Button>
//         </DialogActions>
//       </Dialog>
//     );
//   };

//   const renderAnomalyCell = (params) => {
//     const handleArrowButtonClick = () => {
//       handleArrowClick(params.row.id);
//     };
  
//     const ArrowButton = () => {
//       if (params.value === 'True') {
//         return (
//           <IconButton aria-label="arrow" size="large" onClick={handleArrowButtonClick}>
//             <ArrowForwardIcon />
//           </IconButton>
//         );
//       } else {
//         return null;
//       }
//     };
  
//     return (
//       <>
//         <div>{params.value}</div>
//         <ArrowButton />
//         {renderTree(params.row)}
//       </>
//     );
//   };

//   const getCellClassName = (params) => {
//     return params.row.Anomaly === 'True' ? 'highlighted-row' : '';
//   };

//   // Email Dialog
//   const handleSendEmail = () => {
//     // Implement email sending functionality here
//     window.location.href = 'http://localhost:3000/Email';
//   };

//   return (
//     <div style={{ height: 800, width: '100%' }}>
//       <div style={{ padding: 10 }}>
//         <TextField
//           label="Filter by ID"
//           value={filterInput}
//           onChange={handleFilterChange}
//           InputProps={{
//             startAdornment: (
//               <InputAdornment position="start">
//                 <Search />
//               </InputAdornment>
//             ),
//           }}
//           style={{ marginBottom: 10, marginLeft: 10 }}
//         />
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={handleIdFilter}
//           style={{ marginLeft: 30, marginBottom: 14 }}
//         >
//           Filter
//         </Button>
//         <Button
//           variant="contained"
//           onClick={handleClearFilter}
//           style={{ marginLeft: 20, marginBottom: 15 }}
//         >
//           Clear Filter
//         </Button>
//       </div>
      
//       <div style={{ marginBottom: '10px', marginLeft: '1200px' }}>
       
//       <FormControl variant="outlined" style={{ minWidth: 200, marginRight: 17 }}>
//           <InputLabel id="options-label" style={{ marginTop: 7 }}>Select an option</InputLabel>
//           <Select
//             labelId="options-label"
//             id="options"
//             value={selectedOption}
//             onChange={handleOptionChange}
//             label="Select an option"
//           >
//             <MenuItem value="">Select an option</MenuItem>
//             <MenuItem value="True">True</MenuItem>
//             <MenuItem value="False">False</MenuItem>
//           </Select>
//         </FormControl>
//         <Button variant="contained" color="primary" onClick={handleGoButtonClick}  value={filterAnomaly} style={{marginLeft:10}}>
//           Go
//         </Button>
        
//        </div>
//       <DataGrid
//         style={{ backgroundColor: '#ffffff', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', borderRadius: '8px'}}
//         rows={filterInput || filterAnomaly ? filteredRows : data}
//         columns={columns.map((col) =>
//           col.field === 'Anomaly' ? { ...col, renderCell: renderAnomalyCell } : col
//         )}
//         pageSize={2}
//         rowsPerPageOptions={[5, 10, 20]}
//         checkboxSelection
//         disableSelectionOnClick
//         getCellClassName={getCellClassName}
//         rowClassName={(row) => `super-row ${row.isSelected ? 'selected-row' : ''}`}
//         components={{
//           NoRowsOverlay: () => (
//             <div style={{ width: '100%', textAlign: 'center', padding: '20px', color: '#777' }}>No data available</div>
//           ),
//         }}
//       />
//       {renderTree()}
//     </div>
//   );
// };

// export default DataTable;

// // import React, { useState } from 'react';
// // import { DataGrid } from '@mui/x-data-grid';
// // import { TextField, InputAdornment, Button, IconButton, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
// // import { Search } from '@mui/icons-material';
// // import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// // import Tree from 'react-d3-tree';
// // import './DataTable.css';

// // // Define CustomLabel component here
// // const CustomLabel = ({ nodeData }) => (
// //   <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
// //     <div>{nodeData.attributes.condition}</div>
// //   </div>
// // );

// // const DataTable = ({ columns, data }) => {
// //   const [filterInput, setFilterInput] = useState('');
// //   const [filteredRows, setFilteredRows] = useState(data);
// //   const [selectedRowData, setSelectedRowData] = useState(null);
// //   const [openModal, setOpenModal] = useState(false);
// //   const [selectedRow, setSelectedRow] = useState(null);
// //   // const [email, setEmail] = useState('');
// //   // const [message, setMessage] = useState('');

// //   const handleFilterChange = (e) => {
// //     setFilterInput(e.target.value);
// //   };

// //   const handleIdFilter = () => {
// //     const filteredRows = data.filter(
// //       (row) => row.id.toString().toLowerCase().includes(filterInput.toLowerCase())
// //     );
// //     setFilteredRows(filteredRows);
// //   };

// //   const handleClearFilter = () => {
// //     setFilterInput('');
// //     setFilteredRows(data);
// //   };

// //   const handleArrowClick = (rowId) => {
// //     const row = data.find((item) => item.id === rowId);
// //     setSelectedRowData(row);
// //     setOpenModal(true);
// //   };

// //   const handleCloseModal = () => {
// //     setOpenModal(false);
// //   };

// //   const toggleDescription = (rowId) => {
// //     setSelectedRow(selectedRow === rowId ? null : rowId);
// //   };

// //   const getDescription = (row) => {
// //     let description = '';

// //     if (row.Anomaly === 'True') {
// //       if (row.PT_DISCHARGE < row.PT_ADMISSION) {
// //         description += 'The Discharge Date is Earlier than the Admission Date\n';
// //       }

// //       if (row.PT_ADVANCEAMOUNT > row.PT_CHARGESAMOUNT) {
// //         description += 'The Advance Payment Amount Exceeds the Total Charges.\n';
// //       }

// //       if (row.PT_BILLDATE < row.PT_ADMISSION || row.PT_BILLDATE > row.PT_DISCHARGE) {
// //         description += 'The Bill was Generated Before Admission or After Discharge.\n';
// //       }
// //     }

// //     return description.trim();
// //   };

// //   const renderTree = () => {
// //     if (!selectedRowData) return null;

// //     let rootName = '';
// //     let conditionDescription = '';
// //     let children = [];

// //     const row = selectedRowData;

// //     if (row.Anomaly === 'True') {
// //       if (row.PT_DISCHARGE < row.PT_ADMISSION) {
// //         rootName = 'Discharge Date';
// //         conditionDescription = 'Earlier than Admission';
// //       } else if (row.PT_ADVANCEAMOUNT > row.PT_CHARGESAMOUNT) {
// //         rootName = 'Advance Payment Amount';
// //         conditionDescription = 'Exceeds Total Charges';
// //       } else if (row.PT_BILLDATE < row.PT_ADMISSION || row.PT_BILLDATE > row.PT_DISCHARGE) {
// //         rootName = 'Bill Date';
// //         conditionDescription = 'Before Admission Date';
// //       }

// //       children.push(
// //         { name: 'No Anomaly', attributes: { condition: 'No Anomaly Found' }, nodeSvgShape: { shapeProps: { fill: 'green' } } },
// //         { name: 'Anomaly', attributes: { condition: getDescription(row) }, nodeSvgShape: { shapeProps: { fill: 'red' } } }
// //       );
// //     } else {
// //       rootName = 'No Anomaly';
// //       conditionDescription = 'No Anomaly Found';
// //       children.push(
// //         { name: 'Anomaly', attributes: { condition: getDescription(row) }, nodeSvgShape: { shapeProps: { fill: 'red' } } },
// //         { name: 'No Anomaly', attributes: { condition: 'No Anomaly Found' }, nodeSvgShape: { shapeProps: { fill: 'green' } } }
// //       );
// //     }

// //     const treeData = {
// //       name: rootName,
// //       attributes: { condition: conditionDescription },
// //       children: children
// //     };

// //     return (
// //       <Dialog open={openModal} onClose={handleCloseModal} fullWidth maxWidth="sm">
// //         <DialogTitle>Decision Tree</DialogTitle>
// //         <DialogContent>
// //           <Tree
// //             data={treeData}
// //             orientation="vertical"
// //             separation={{ siblings: 1.5, nonSiblings: 2 }}
// //             allowForeignObjects
// //             nodeLabelComponent={{
// //               render: <CustomLabel />,
// //               foreignObjectWrapper: {
// //                 y: 30
// //               }
// //             }}
// //           />
// //         </DialogContent>
// //         <DialogActions>
// //           <Button onClick={handleCloseModal} color="primary">Close</Button>
// //           <Button onClick={handleSendEmail} color="primary">Send Email</Button>
// //         </DialogActions>
// //       </Dialog>
// //     );
// //   };

// //   const renderAnomalyCell = (params) => {
// //     const handleArrowButtonClick = () => {
// //       handleArrowClick(params.row.id);
// //     };
  
// //     const ArrowButton = () => {
// //       if (params.value === 'True') {
// //         return (
// //           <IconButton aria-label="arrow" size="large" onClick={handleArrowButtonClick}>
// //             <ArrowForwardIcon />
// //           </IconButton>
// //         );
// //       } else {
// //         return null;
// //       }
// //     };
  
// //     return (
// //       <>
// //         <div>{params.value}</div>
// //         <ArrowButton />
// //         {renderTree(params.row)}
// //       </>
// //     );
// //   };

// //   const getCellClassName = (params) => {
// //     return params.row.Anomaly === 'True' ? 'highlighted-row' : '';
// //   };

// //   // Email Dialog
// //   const handleSendEmail = () => {
// //     // Implement email sending functionality here
// //     window.location.href = 'http://localhost:3000/Email';
// //   };

// //   return (
// //     <div style={{ height: 800, width: '100%' }}>
// //       <div style={{ padding: 10 }}>
// //         <TextField
// //           label="Filter by ID"
// //           value={filterInput}
// //           onChange={handleFilterChange}
// //           InputProps={{
// //             startAdornment: (
// //               <InputAdornment position="start">
// //                 <Search />
// //               </InputAdornment>
// //             ),
// //           }}
// //           style={{ marginBottom: 10, marginLeft: 10 }}
// //         />
// //         <Button
// //           variant="contained"
// //           color="primary"
// //           onClick={handleIdFilter}
// //           style={{ marginLeft: 30, marginBottom: 14 }}
// //         >
// //           Filter
// //         </Button>
// //         <Button
// //           variant="contained"
// //           onClick={handleClearFilter}
// //           style={{ marginLeft: 20, marginBottom: 15 }}
// //         >
// //           Clear Filter
// //         </Button>
// //       </div>
// //       <DataGrid
// //         style={{ backgroundColor: '#ffffff', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}
// //         rows={filterInput ? filteredRows : data}
// //         columns={columns.map((col) =>
// //           col.field === 'Anomaly' ? { ...col, renderCell: renderAnomalyCell } : col
// //         )}
// //         pageSize={5}
// //         rowsPerPageOptions={[5, 10, 20]}
// //         checkboxSelection
// //         disableSelectionOnClick
// //         getCellClassName={getCellClassName}
// //         rowClassName={(row) => `super-row ${row.isSelected ? 'selected-row' : ''}`}
// //         components={{
// //           NoRowsOverlay: () => (
// //             <div style={{ width: '100%', textAlign: 'center', padding: '20px', color: '#777' }}>No data available</div>
// //           ),
// //         }}
// //       />
// //       {renderTree()}
// //     </div>
// //   );
// // };

// // export default DataTable;


