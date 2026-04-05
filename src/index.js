import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//We removed reportWebVitals import because the file does not exist in this project
// import reportWebVitals from './reportWebVitals';


// Create the root element where the React app will be rendered
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//  We also removed this line because the function is not available
// reportWebVitals();