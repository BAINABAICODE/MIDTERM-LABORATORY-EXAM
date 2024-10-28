import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' for React 18
import './index.css'; // Import global styles
import App from './App'; // Import the main App component
import reportWebVitals from './reportWebVitals'; // Import the reportWebVitals function
import './App.css';

// Create a root DOM element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component wrapped in StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: Measure performance and log results or send to an analytics endpoint
reportWebVitals(console.log); // Log performance metrics to the console
