// Anomaly.js
import React from 'react';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { lightBlue } from '@mui/material/colors';
import './Anomaly.css'; 
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  styled,
  createTheme,
  ThemeProvider,
  Typography,
} from '@mui/material';


const data = [
  {
    category: 'Early Discharge',
    description:
      'The system will flag an anomaly if the discharge date recorded for a patient is earlier than their admission date, indicating an inconsistency in the patient\'s timeline of care.',
  },
  {
    category: 'Payment Exceedance',
    description:
      'An anomaly will be identified if the advance payment made by the patient exceeds the total charges incurred, suggesting an overpayment or an error in financial transactions.',
  },
  {
    category: 'Billing Timing',
    description:
      'The system will detect an anomaly if the billing record indicates that the bill was generated either before the patient\'s admission or after their discharge, highlighting a discrepancy in the billing process.',
  },
];

const theme = createTheme({
  palette: {
    primary: {
      main: '#7bbbff',
    },
    secondary: {
      main: '#7bbbff',
    },
    action: {
      hover: '#7bbbff',
    },
  },
});

const Anomaly = () => {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h4" align="center" className="anomaly-heading">
        ANOMALIES DESCRIPTION
      </Typography>

      <TableContainer component={Paper} className="anomaly-table-container">
        <Table className="anomaly-table">
          <TableHead>
            <TableRow>
              <TableCell className="anomaly-table-cell">Category</TableCell>
              <TableCell className="anomaly-table-cell">Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index} className="anomaly-table-row">
                <TableCell>{row.category}</TableCell>
                <TableCell>{row.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
};

export default Anomaly;
