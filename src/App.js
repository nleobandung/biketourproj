import React, { useState } from 'react';
import { Box, TextField, Button, Link, Typography } from '@mui/material';
import Logo from './bike_buddy_logo.png'

function App(props) {
  const [position1Value, setPosition1Value] = useState('');
  const [position2Value, setPosition2Value] = useState('');
  const [savedData, setSavedData] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');

  const handleSaveButtonClick = async () => {
    // Save the data from text fields to the state
    const newData = {
      position1: position1Value,
      position2: position2Value,
    };
    setSavedData([...savedData, newData]);
    setPosition1Value('');
    setPosition2Value('');

    const response = await fetch(`http://localhost:3000/returnjson?pos1=${newData.position1}&pos2=${newData.position2}`);
    const data = await response.json();

    setDistance(data.distance);
    setDuration(data.duration);

    setDistance(data["Distance"]);
    setDuration(data["Duration"]);

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
    setPosition1Value('');
    setPosition2Value('');
    setDistance('');
    setDuration('');
    setSavedData([]);
  };

  if (loggedIn) {
    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'start',
          minHeight: '100vh',
          backgroundColor: '#6c957c',
        }}
      >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'start',
          minHeight: '100vh',
          backgroundColor: '#6c957c',
          width:'30%',
          flexDirection:'column'
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
              width: '80%',
              zIndex: '1',
              margin: '15px',
            }}
        >
        <Typography component="h1" variant="h5" sx={{ textAlign: 'center', fontWeight: 'bold', color: 'darkgreen'}}>
          Plan your adventure!
        </Typography>

        <form onSubmit={handleSaveButtonClick}>
        <TextField
            variant="outlined"
            required
            fullWidth
            name = "position1"
            label="Starting Location"
            id="position1"
            value={position1Value}
            onChange={(e) => setPosition1Value(e.target.value)}
            sx={{ '&:hover': {scale: '1.02'}, marginRight: '100%', marginTop: '4px', position: 'relative', zIndex: '1' }}
          />
          <TextField
            variant="outlined"
            required
            fullWidth
            name = "position2"
            label="Destination"
            id="position2"
            value={position2Value}
            onChange={(e) => setPosition2Value(e.target.value)}
            sx={{ '&:hover': {scale: '1.02'}, marginRight: '100%', marginTop: '4px', position: 'relative', zIndex: '1' }}
          />
          <Button
            fullWidth
            variant="contained"
            onClick={handleSaveButtonClick}
            sx={{ '&:hover': {scale: '1.02',backgroundColor: 'darkgreen',}, fontWeight: 'bold', backgroundColor: 'darkgreen', color: '#8bc34a', marginTop: '4px', marginRight: '100%', marginBottom: '6px', position: 'relative', zIndex: '1' }} // Set position to relative and zIndex to render above
          >
            Search ride
          </Button>
          </form>
        </Box>
        <Box
            sx={{
              backgroundColor: 'white',
              paddingX: '24px',
              paddingY: '24px',
              borderRadius: '8px',
              height: 'fit-content', // Adjust height to fit content
              boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)', // Add shadow for depth effect
              position: 'relative', // Set position to relative
              width: '80%',
              zIndex: '1',
              margin:'15px'
            }}
        >
          <Typography component="h1" variant="h5" sx={{ textAlign: 'center', fontWeight: 'bold', color: 'darkgreen'}}>
            Route Statistics
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'left', marginTop: '16px' }}>
            Total Distance: {distance}
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'left', marginTop: '8px' }}>
            Total Duration: {duration}
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'left', marginTop: '8px' }}>
            Elevation:
          </Typography>
          <Typography component="h1" variant="h5" sx={{ textAlign: 'center', fontWeight: 'bold', color: 'darkgreen'}}>
            Route Statistics
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'left', marginTop: '16px' }}>
            Total Distance: {distance}
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'left', marginTop: '8px' }}>
            Total Duration: {duration}
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'left', marginTop: '8px' }}>
            Elevation:
          </Typography>
          <Typography component="h1" variant="h5" sx={{ textAlign: 'center', fontWeight: 'bold', color: 'darkgreen'}}>
            Route Statistics
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'left', marginTop: '16px' }}>
            Total Distance: {distance}
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'left', marginTop: '8px' }}>
            Total Duration: {duration}
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'left', marginTop: '8px' }}>
            Elevation:
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'start',
          minHeight: '100vh',
          backgroundColor: '#6c957c',
          width:'70%',
          flexDirection:'column'
        }}
      >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'start',
          minHeight: '100vh',
          backgroundColor: '#6c957c',
          flexDirection:'column'
        }}
      >
        <Box
            sx={{
              backgroundColor: 'white',
              paddingX: '24px',
              paddingY: '20px',
              borderRadius: '8px',
              height: 'fit-content', // Adjust height to fit content
              boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)', // Add shadow for depth effect
              position: 'relative', // Set position to relative
              width: '20%',
              zIndex: '1',
              margin:'15px'
            }}
    >
      <img src={Logo} alt="bike_buddy_logo.png" style={{scale: '1', width: '100%', height: 'auto' }} />
      <Button
            fullWidth
            variant="contained"
            onClick={handleLogout}
            sx={{ marginTop:'10px','&:hover': {scale: '1.02',backgroundColor: 'darkgreen',}, fontWeight: 'bold', backgroundColor: 'darkgreen', color: '#8bc34a', marginTop: '4px', marginRight: '100%', marginBottom: '6px', position: 'relative', zIndex: '1' }} // Set position to relative and zIndex to render above
          >
            Logout
          </Button>
    </Box>
  </Box>
  </Box>  
  </Box>
  );
}

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
        flexDirection: 'column',
        width: '50%'
      }}
      >
      <Typography component="h1" variant="h5" sx={{ textAlign: 'center', fontWeight: 'bold', color: 'darkgreen'}}>
        Bike Buddy
      </Typography>
      <img src={Logo} alt="bike_buddy_logo.png" style={{scale: '1',marginBottom: '15px', width: '100%', height: 'auto' }} />
      </Box>
    </Box>
  );
}

export default App;