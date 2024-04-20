import React, { useState } from 'react';
import { Box, TextField, Button, Link, Typography } from '@mui/material';
import { Map, GoogleApiWrapper } from 'google-maps-react';

function App(props) {
  const [position1Value, setPosition1Value] = useState('');
  const [position2Value, setPosition2Value] = useState('');
  const [savedData, setSavedData] = useState([]);

  const handleSaveButtonClick = async () => {
    // Save the data from text fields to the state
    const newData = {
      position1: position1Value,
      position2: position2Value,
    };
    setSavedData([...savedData, newData]);

    // Clear text fields after saving data
    setPosition1Value('');
    setPosition2Value('');
  }
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here...
    // For demonstration, let's assume login is successful if both fields are non-empty
    if (username.trim() !== '' && password.trim() !== '') {
      setLoggedIn(true);
    } else {
      alert('Please enter username/email and password');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    setPassword('');
  };


  if (loggedIn) {
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
      <Map
        google={props.google}
        style={{ width: '80%', height: '400px' }}
        initialCenter={{
          lat: 37.7749,
          lng: -122.4194
        }}
        zoom={20}
      />

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
        <Typography variant="h6">Saved Data:</Typography>
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

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      <Typography component="h1" variant="h5">
        Login
      </Typography>
      <form onSubmit={handleLogin}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username or Email"
          name="username"
          autoFocus
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
        >
          Log In
        </Button>
        <Link href="#" variant="body2">
          Forgot password?
        </Link>
      </form>
    </Box>
  );
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCFvMTJRCfYIjBsNdTASP5RdBISZdGe-yo'
})(App);
//export default App;