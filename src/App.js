import React, { useState } from 'react';
import { Box, TextField, Button, Link, Typography } from '@mui/material';
import Logo from './bike_buddy_logo.png'
import { Map, GoogleApiWrapper } from 'google-maps-react';

function App(props) {
  const [position1Value, setPosition1Value] = useState('');
  const [position2Value, setPosition2Value] = useState('');
  const [savedData, setSavedData] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [avgtempO, setAvgTempo] = useState('');
  const [avgtempD, setAvgTempd] = useState('');
  const [maxwindo, setMaxWindO] = useState('');
  const [maxwindd, setMaxWindd] = useState('');
  // const [airqo, setAirQO] = useState('');
  // const [airqd, setAirQD] = useState('');



  const handleSaveButtonClick = async () => {
    
    // Save the data from text fields to the state
    const newData = {
      position1: position1Value,
      position2: position2Value,
    };
    setSavedData([...savedData, newData]);
    setPosition1Value('');
    setPosition2Value('');

    const response = await fetch(`http://localhost:3001/returnjson?pos1=${newData.position1}&pos2=${newData.position2}`);
    const data = await response.json();

    // setDistance(data.distance);
    // setDuration(data.duration);
    // setAvgTempo(data.avgtempO);
    // setAvgTempd(data.avgtempD);
    // setMaxWindO(data.maxwindo);
    // setMaxWindd(data.maxwindd);
    // setAirQO(data.airqo);
    // setAirQD(data.airqd);

    setDistance(data["Distance"]);
    setDuration(data["Duration"]);
    setAvgTempo(data["AverageTempO"]);
    setAvgTempd(data["AverageTempd"]);
    setMaxWindO(data["MaxWindSpeedO"]);
    setMaxWindd(data["MaxWindSpeedd"]);
    // setAirQO(data["AirQo"]);
    // setAirQD(data["AirQd"])

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
              height: '450px', // Adjust height to fit content
              boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)', // Add shadow for depth effect
              position: 'relative', // Set position to relative
              width: '80%',
              zIndex: '1',
              margin:'25px'
            }}
        >
          <Typography component="h1" variant="h4" sx={{ marginTop:'5px', marginBottom: '10px', textAlign: 'center', fontWeight: 'bold', color: 'darkgreen'}}>
            Route Information
          </Typography>
          <Typography component="h1" variant="h5" sx={{ marginTop:'25px',textAlign: 'left', fontWeight: 'bold', color: 'darkgreen'}}>
            Length
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'left', marginTop: '8px' , fontWeight: 'bold'}}>
            Distance:  {distance}
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'left', marginTop: '8px', marginBottom:'25px', fontWeight: 'bold' }}>
            Duration:  {duration}
          </Typography>
          <Typography component="h1" variant="h5" sx={{ marginTop:'20x', textAlign: 'left', fontWeight: 'bold', color: 'darkgreen'}}>
            Temperature (F)
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'left', marginTop: '8px', fontWeight: 'bold' }}>
            Avg. temp at starting location:  {avgtempO} 
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'left', marginTop: '8px', fontWeight: 'bold' }}>
          Avg. temp. at destination:  {avgtempD} 
          </Typography>
          <Typography component="h1" variant="h5" sx={{ marginTop:'30px', textAlign: 'left', fontWeight: 'bold', color: 'darkgreen'}}>
            Wind speed (MPH)
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'left', marginTop: '16px', fontWeight: 'bold' }}>
          Max wind speed at starting location:  {maxwindo} 
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'left', marginTop: '16px', fontWeight: 'bold' }}>
          Max wind speed at destination:  {maxwindd} 
          </Typography>
        </Box>
        <Box
            sx={{
              backgroundColor: 'white',
              paddingX: '24px',
              paddingY: '20px',
              borderRadius: '8px',
              height: '200px',
              boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)', // Add shadow for depth effect
              position: 'relative', // Set position to relative
              width: '80%',
              zIndex: '1',
              marginLeft:'25px',
              marginRight:'25px',
              marginBottom:'25px',
            }}
        >
          <Typography component="h1" variant="h5" sx={{ marginTop:'20x', textAlign: 'center', fontWeight: 'bold', color: 'darkgreen'}}>
            Personal Stats
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'left', marginTop: '18px', fontWeight: 'bold',}}>
            All-time distance: 1347.2 miles
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'left', marginTop: '18px', fontWeight: 'bold',}}>
            Longest ride: 53 miles
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'left', marginTop: '18px',fontWeight: 'bold',}}>
            All-time elevation gain: 21,021 ft
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'left', marginTop: '18px',fontWeight: 'bold',}}>
            Rides completed: 42
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          minHeight: '100vh',
          backgroundColor: '#6c957c',
          width:'70%',
          flexDirection:'column'
        }}
      >
      <Box
        sx={{
          display: 'flex',
          minHeight: '100vh',
          backgroundColor: '#6c957c',
          flexDirection:'row',
          height:"30%"
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
              width: '60%',
              zIndex: '1',
              marginTop: '25px',
              marginLeft: '12px',
              marginBottom: '25px',
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
            label="Starting location"
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
              paddingY: '20px',
              borderRadius: '8px',
              height: 'fit-content', // Adjust height to fit content
              boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)', // Add shadow for depth effect
              position: 'relative', // Set position to relative
              width: '29%',
              zIndex: '1',
              margin:'25px',
            }}
    >
      <img src={Logo} alt="bike_buddy_logo.png" style={{scale: '1', width: '100%', height: 'auto' }} />
      <Button
            fullWidth
            variant="contained"
            onClick={handleLogout}
            sx={{ marginTop:'10px','&:hover': {scale: '1.02',backgroundColor: 'darkgreen',}, fontWeight: 'bold', backgroundColor: 'darkgreen', color: '#8bc34a', marginRight: '100%', marginBottom: '6px', position: 'relative', zIndex: '1' }} // Set position to relative and zIndex to render above
          >
            Logout
          </Button>
    </Box>
  </Box>
  <div style={{ position: 'fixed', bottom: '10px', width: '65%', height: '60vh' }}>
    <Map
        google={props.google}
        style={{ width: '100%', height: '400px', }}
        initialCenter={{
          lat: 37.7749,
          lng: -122.4194
        }}
        zoom={20}
      />
    </div>
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
          width: '60%',
          zIndex: '1'
        }}
      >
      <Typography component="h1" variant="h4" sx={{ margin:'28px',textAlign: 'center', fontWeight: 'bold', color: 'darkgreen'}}>
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
            sx={{ '&:hover': {scale: '1.02'}, marginRight: '100%', marginTop: '14px', marginBottom: '16px',position: 'relative', zIndex: '1' }} // Set position to relative and zIndex to render above
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ '&:hover': {scale: '1.02',backgroundColor: 'darkgreen',}, fontWeight: 'bold', backgroundColor: 'darkgreen', color: '#8bc34a', marginTop: '2px', marginRight: '100%', marginBottom: '6px', position: 'relative', zIndex: '1' }} // Set position to relative and zIndex to render above
          >
            Sign in
          </Button>
          <Link href="#" variant="body2" sx={{ marginTop:'10px', '&:hover': {scale: '1.02'}, color: 'darkgreen', position: 'relative', zIndex: '1' }}>Forgot password?</Link>
        </form>
        <Typography component="h1" variant="h6" sx={{ marginTop:'7px', marginBottom:'15px',textAlign: 'center', fontWeight: 'bold', color: 'darkgreen'}}>
        -- or --
      </Typography>
        <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ '&:hover': {scale: '1.02',backgroundColor: 'darkgreen',}, fontWeight: 'bold', backgroundColor: 'darkgreen', color: '#8bc34a', marginTop: '2px', marginRight: '100%', marginBottom: '6px', position: 'relative', zIndex: '1' }} // Set position to relative and zIndex to render above
          >
            Sign up now
          </Button>
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
        width: '40%'
      }}
      >
      <Typography component="h1" variant="h4" sx={{ marginBottom:'10px',textAlign: 'center', fontWeight: 'bold', color: 'darkgreen'}}>
        Bike Buddy
      </Typography>
      <img src={Logo} alt="bike_buddy_logo.png" style={{scale: '1',marginBottom: '15px', width: '100%', height: 'auto' }} />
      </Box>
    </Box>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBF8q9l9Zv1wqZVUFmXmsV5Ohs0NmfSzto'
})(App);
