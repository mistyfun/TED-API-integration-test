import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

function App() {
  const [message, setMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const handleInputChange = (event) =>{
    setSearchQuery(event.target.value);
  };
  const handleSearch = () =>{
    console.log('Search input:',searchQuery);

  };
  useEffect(() => {
    fetch('http://localhost:8080/api.ted.europa.eu/v3/hello')
        .then(response => response.text())
        .then(data => setMessage(data))
        .catch(error => console.error('Error fetching data:',error));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          message: {message}
        </p>
        <div>
          <TextField
              variant="outlined"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleInputChange}
              sx={{
                  backgroundColor: '#f0f0f0', // Background color of the search bar
                  borderRadius: '4px', // Optional: set border radius
                  '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                          borderColor: 'transparent', // Remove default border color
                      },
                      '&:hover fieldset': {
                          borderColor: 'transparent', // Remove border on hover
                      },
                      '&.Mui-focused fieldset': {
                          borderColor: 'transparent', // Remove border when focused
                      },
                  },
              }}
              InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleSearch}>
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                ),
              }}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
