import React from 'react';
import Watchlist from './Watchlist';
// import './App.css';

function App() {
  const config = [
    { companyName: 'TCS',stockType:"BSE", stockValue: '1500.32' },
    { companyName: 'Infosys', stockType:"NSE", stockValue: '1600.22' },
    { companyName: 'Tech Mahindra', stockType:"BSE", stockValue: '1200.28' },
    { companyName: 'HCL', stockType:"BSE", stockValue: '798.32' },
    { companyName: 'Accenture', stockType:"NSE", stockValue: '232.43' },
    { companyName: 'Bharat Petroleum', stockType:"BSE", stockValue: '390.67' },
    { companyName: 'Axis Bank', stockType:"BSE", stockValue: '253.24' },
    { companyName: 'ICICI Bank', stockType:"BSE" , stockValue: '100.29' },
  ];

  return (
    <div className="App">
        <Watchlist stocks={config} /> {/* Pass the config as props */}
      
    </div>
  );
}

export default App;
