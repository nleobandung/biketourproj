import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

function App() {
  const [position1Value, setPosition1Value] = useState('');
  const [position2Value, setPosition2Value] = useState('');
  const [savedData, setSavedData] = useState([]);

  const handleSaveButtonClick = () => {
    // Save the data from text fields to the state
    const newData = {
      position1: position1Value,
      position2: position2Value,
    };
    setSavedData([...savedData, newData]);

    // Clear text fields after saving data
    setPosition1Value('');
    setPosition2Value('');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh', // Set minimum height to fill the viewport
        flexDirection: 'column', // Align items in a column
        gap: '16px', // Spacing between elements
      }}
    >
      <TextField
        id="position1"
        label="Position 1"
        variant="filled"
        value={position1Value}
        onChange={(e) => setPosition1Value(e.target.value)}
      />
      <TextField
        id="position2"
        label="Position 2"
        variant="filled"
        value={position2Value}
        onChange={(e) => setPosition2Value(e.target.value)}
      />
      <Button variant="contained" onClick={handleSaveButtonClick}>
        Save Data
      </Button>

      {/* Display saved data */}
      <Box mt={4}>
        <h2>Saved Data:</h2>
        <ul>
          {savedData.map((data, index) => (
            <li key={index}>
              Position 1: {data.position1}, Position 2: {data.position2}
            </li>
          ))}
        </ul>
      </Box>
    </Box>
  );
}

export default App;
