import mylogo from './tender_logo-removebg-preview.png';
import './App.css';
import {useEffect, useState} from "react";
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

function App() {
  const [message, setMessage] = useState('');
  const [result, setResult] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();  // Trigger search when "Enter" is pressed
    }
  };
  const handleSearch = () => {
    console.log('Search input:', searchQuery);
    fetch('http://localhost:8080/api.ted.europa.eu/v3/notices/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: "FT~" + searchQuery,
        fields: [
          // Add the necessary fields according to your backend API requirement
          "publication-number",
          "place-of-performance",
          "procedure-type",
          "contract-nature",
          "deadline-receipt-request",
          "notice-title",
          "official-language",
          "notice-type",
          "total-value",
          "total-value-cur",
        ],
        page: 1,
        limit: 10,
        scope: "ACTIVE",
        checkQuerySyntax: false,
        paginationMode: "PAGE_NUMBER",
        onlyLatestVersions: false,
        iterationNextToken: ""
      })
    })
        .then(response => response.json()) // assuming the backend returns a JSON response
        .then(data => {
          console.log('Search result:', data);
          setResult(data);
        })
        .catch(error => console.error('Error fetching data:', error));
  };
  useEffect(() => {
    fetch('http://localhost:8080/api.ted.europa.eu/v3/hello')
        .then(response => response.text())
        .then(data => setMessage(data))
        .catch(error => console.error('Error fetching data:', error));
  }, []);
  return (
      <div className="App">
        <main>
          <img src={mylogo} alt="logo"/>
          <div>
            <TextField
                variant="outlined"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
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
                          <SearchIcon/>
                        </IconButton>
                      </InputAdornment>
                  ),
                }}
            />
          </div>
          <div>
            <br></br>
            <table className="table">
              <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Publication Number</th>
                <th>Official Language</th>
                <th>Deadline Request</th>
              </tr>
              </thead>
              <tbody>
              {result?.notices?.map((notice, index) => (
                  <tr key={index}>
                    <td>{notice["notice-title"]["eng"]}</td>
                    <td>{notice["notice-type"]}</td>
                    <td>{notice["publication-number"]}</td>
                    <td>{notice["official-language"]}</td>
                    <td>{notice["deadline-receipt-request"]}</td>
                    {/* Add more cells as needed */}
                  </tr>
              ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
  );
}

export default App;
