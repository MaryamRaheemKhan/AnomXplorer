import React, { useState, useEffect } from 'react';

const WebSocket = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/poll'); // Fetch data from backend endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json(); // Parse JSON response
        setData(jsonData);

        // Write the fetched data to data.json (optional)
        // This is just a client-side operation and won't update the actual data.json file on disk
        // If you need to persist the data, consider using localStorage or IndexedDB
        localStorage.setItem('data.json', JSON.stringify(jsonData));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call fetchData function
  }, []);

  return (
    <div>
      <h1>Data from Backend</h1>
      {data && (
        <pre>{JSON.stringify(data, null, 2)}</pre> // Display fetched data
      )}
    </div>
  );
};

export default WebSocket;