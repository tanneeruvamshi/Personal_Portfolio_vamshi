import React from 'react';
import ReactDOM from 'react-dom'; // Import 'react-dom' directly
import './styles/main.css'; // Global stylesheet
import App from './App'; // Import the main App component

// Render the App component to the DOM
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
