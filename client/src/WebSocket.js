// // // // const socket = new WebSocket('ws://localhost:5000'); // WebSocket connection to the backend server
// // // // const fs = require('fs');

// // // // socket.onopen = () => {
// // // //   console.log('WebSocket connection established');
// // // // };

// // // // socket.onmessage = (event) => {
// // // //   const updatedData = JSON.parse(event.data); // Parse the incoming message (updated data)

// // // //   // Assume you have a function to update the frontend JSON file
// // // //   updateFrontendJSONFile(updatedData);
// // // // };

// // // // socket.onerror = (error) => {
// // // //   console.error('WebSocket error:', error);
// // // // };




// // // // // Function to update the frontend JSON file
// // // // function updateFrontendJSONFile(updatedData) {
// // // //   console.log('Updating frontend JSON file with new data:', updatedData);
// // // //   // Read the existing data from the JSON file
// // // //   fs.readFile('data.json', 'utf8', (err, data) => {
// // // //     if (err) {
// // // //       console.error('Error reading JSON file:', err);
// // // //       return;
// // // //     }

// // // //     // Parse the existing JSON data
// // // //     let jsonData;
// // // //     try {
// // // //       jsonData = JSON.parse(data);
// // // //     } catch (parseErr) {
// // // //       console.error('Error parsing JSON:', parseErr);
// // // //       return;
// // // //     }

// // // //     // Add the new record to the end of the existing data
// // // //     jsonData.push(updatedData);

// // // //     // Write the updated data back to the JSON file
// // // //     fs.writeFile('data.json', JSON.stringify(jsonData), 'utf8', (writeErr) => {
// // // //       if (writeErr) {
// // // //         console.error('Error writing to JSON file:', writeErr);
// // // //         return;
// // // //       }
// // // //       console.log('Data added to JSON file:', updatedData);
// // // //     });
// // // //   });
// // // // }


// // // import React, { useState, useEffect } from 'react';
// // // import WebSocket from 'ws';

// // // const WebSocketComponent = () => {
// // //   const [updatedData, setUpdatedData] = useState(null);

// // //   useEffect(() => {
// // //     const socket = new WebSocket('http://localhost:5000/api/updates');

// // //     socket.onopen = () => {
// // //       console.log('WebSocket connection established');
// // //     };

// // //     socket.onmessage = (event) => {
// // //       const receivedData = JSON.parse(event.data);
// // //       setUpdatedData(receivedData);
// // //     };

// // //     socket.onerror = (error) => {
// // //       console.error('WebSocket error:', error);
// // //     };

// // //     // Clean up the WebSocket connection
// // //     return () => {
// // //       socket.close();
// // //     };
// // //   }, []);

// // //   return (
// // //     <div>
// // //       {updatedData && (
// // //         <div>
// // //           <h2>Updated Data</h2>
// // //           {/* <pre>{JSON.stringify(updatedData, null, 2)}</pre> */}
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default WebSocketComponent;


// // import React, { useEffect, useState } from 'react';

// // const SSEComponent = () => {
// //   const [prediction, setPrediction] = useState(null);

// //   useEffect(() => {
// //     const eventSource = new EventSource('http://localhost:5000/events');

// //     eventSource.onopen = () => {
// //       console.log('SSE connection established');
// //     };

// //     eventSource.onmessage = (event) => {
// //       const { data } = event;
// //       const parsedData = JSON.parse(data);
// //       setPrediction(parsedData);
// //     };

// //     eventSource.onerror = (error) => {
// //       console.error('SSE error:', error);
// //       eventSource.close();
// //     };

// //     return () => {
// //       eventSource.close();
// //     };
// //   }, []);

// //   useEffect(() => {
// //     if (prediction) {
// //       // Update data.json file on the frontend
// //       updateDataJson(prediction);
// //     }
// //   }, [prediction]);

// //   const updateDataJson = (newData) => {
// //     fetch('/data.json')
// //       .then(response => response.json())
// //       .then(data => {
// //         // Append new data to existing data
// //         const updatedData = [...data, newData];
// //         // Update the data.json file
// //         const blob = new Blob([JSON.stringify(updatedData, null, 2)], { type: 'application/json' });
// //         const url = window.URL.createObjectURL(blob);
// //         const a = document.createElement('a');
// //         a.href = url;
// //         a.download = 'data.json';
// //         document.body.appendChild(a);
// //         a.click();
// //         window.URL.revokeObjectURL(url);
// //         document.body.removeChild(a);
// //       })
// //       .catch(error => {
// //         console.error('Error updating data.json:', error);
// //       });
// //   };

// //   return (
// //     <div>
// //       <h2>SSE Component</h2>
// //       {prediction && (
// //         <div>
// //           <p>New prediction data received:</p>
// //           <pre>{JSON.stringify(prediction, null, 2)}</pre>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default SSEComponent;

// import React, { useState, useEffect } from 'react';

// const App = () => {
//   const [predictions, setPredictions] = useState([]);

//   useEffect(() => {
//     // Function to fetch predictions from the backend
//     const fetchPredictions = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/api/predictions');
//         const data = await response.json();
//         setPredictions(data);
//       } catch (error) {
//         console.error('Error fetching predictions:', error);
//       }
//     };

//     // Fetch predictions initially
//     fetchPredictions();

//     // Set up interval to fetch predictions periodically
//     const interval = setInterval(fetchPredictions, 5000);

//     // Clean up interval on component unmount
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div>
//       <h1>Predictions</h1>
//       <ul>
//         {predictions.map((prediction, index) => (
//           <li key={index}>{prediction.name}: {prediction.prediction}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;

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