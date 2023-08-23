import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';

export default function AnalyticsPage() {
  const [analyticsData, setAnalyticsData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4050/api/tracking/track")
      .then((response) => {
        setAnalyticsData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching analytics data:', error);
      });
  }, []);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Analytics Data
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>IP Address</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Page Visited</TableCell>
              <TableCell>Time Spent (ms)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {analyticsData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.ip}</TableCell>
                <TableCell>{row.timestamp}</TableCell>
                <TableCell>{row.page}</TableCell>
                <TableCell>{row.timeSpent}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
