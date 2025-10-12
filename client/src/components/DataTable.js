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
  const [filterAnomaly, setFilterAnomaly] = useState('');
  const [filteredRows, setFilteredRows] = useState(data);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  
  
  
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

    if (row.Anomaly === 'TRUE') {
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

    if (row.Anomaly === 'TRUE') {
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
      if (params.value === 'TRUE') {
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
    return params.row.Anomaly === 'TRUE' ? 'highlighted-row' : '';
  };

  // Email Dialog
  const handleSendEmail = () => {
    // Implement email sending functionality here
    window.location.href = 'https://anom-xplorer-fyp.vercel.app/Email';
  };

  return (
  <div >

  <DataGrid
  style={{ 
    backgroundColor: '#ffffff', 
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', 
    borderRadius: '8px',
    width: '100%' // Changed to 100% to use full container width
  }}
  rows={filterAnomaly ? filteredRows : data}
  columns={columns.map((col) =>
    col.field === 'Anomaly' ? { ...col, renderCell: renderAnomalyCell } : col
  )}
  getRowId={(row) => row.PT_ID}
  pageSize={5}
  rowsPerPageOptions={[5, 10, 20]}
  checkboxSelection
  disableSelectionOnClick
  getCellClassName={getCellClassName}
  rowClassName={(row) => `super-row ${row.isSelected ? 'selected-row' : ''}`}
  
  // Compact density settings
  density="compact"
  
  // Reduce cell padding
sx={{
  '& .MuiDataGrid-cell': {
    padding: '4px 8px 4px 15px', // top, right, bottom, left - consolidated
  },
  '& .MuiDataGrid-columnHeaders': {
    padding: '4px 8px',
  },
  '& .MuiDataGrid-columnHeaderTitleContainer': {
    paddingRight: '15px', // This moves header titles to the right
  },
   '& .MuiDataGrid-columnHeaderTitle': {
      fontWeight: 'bold',
   },
  '& .MuiDataGrid-cellContent': {
    fontSize: '0.9rem',
  },
  '& .MuiDataGrid-virtualScroller': {
    minHeight: '200px',
  }
}}
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

