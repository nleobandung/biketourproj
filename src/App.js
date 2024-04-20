import React, { useState } from 'react';
import { Box, TextField, Button, Link, Typography } from '@mui/material';

function App() {
  const [position1Value, setPosition1Value] = useState('');
  const [position2Value, setPosition2Value] = useState('');
  const [savedData, setSavedData] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

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
  }

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

  if (loggedIn) {}

  return (
    <Box
    sx={{
      display: 'flex',
      justifyContent: 'left',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: 'white',
      flexDirection: 'row',
      width: '100%'
    }}
  >
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#6c957c',
        padding: '24px',
        flexDirection: 'row',
        width: '50%'
      }}
    >

      <Box
        sx={{
          backgroundColor: 'white',
          paddingX: '24px',
          paddingY: '24px',
          borderRadius: '8px',
          height: 'fit-content', // Adjust height to fit content
          boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)', // Add shadow for depth effect
          position: 'relative', // Set position to relative
          width: '50%',
          zIndex: '1'
        }}
      >
      <Typography component="h1" variant="h5" sx={{ textAlign: 'center', fontWeight: 'bold', color: 'darkgreen'}}>
        Sign in
      </Typography>

        <form onSubmit={handleLogin}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="username"
            label="Username or Email"
            name="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={{ '&:hover': {scale: '1.02'}, marginRight: '100%', marginTop: '8px', position: 'relative', zIndex: '1' }} // Set position to relative and zIndex to render above
          />
          <TextField
            variant="outlined"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ '&:hover': {scale: '1.02'}, marginRight: '100%', marginTop: '8px', position: 'relative', zIndex: '1' }} // Set position to relative and zIndex to render above
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ '&:hover': {scale: '1.02',backgroundColor: 'darkgreen',}, fontWeight: 'bold', backgroundColor: 'darkgreen', color: '#8bc34a', marginTop: '8px', marginRight: '100%', marginBottom: '6px', position: 'relative', zIndex: '1' }} // Set position to relative and zIndex to render above
          >
            Sign in
          </Button>
          <Link href="#" variant="body2" sx={{ '&:hover': {scale: '1.02'}, color: 'darkgreen', position: 'relative', zIndex: '1' }}>Forgot password?</Link>
        </form>
        </Box>
      </Box>

      <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: 'white',
        padding: '24px',
        flexDirection: 'row',
        width: '50%'
      }}
      >
      <Typography component="h1" variant="h5" sx={{ textAlign: 'center', fontWeight: 'bold', color: 'darkgreen'}}>
        Bike Buddy
      </Typography>
      </Box>
    </Box>
  );
}

export default App;
