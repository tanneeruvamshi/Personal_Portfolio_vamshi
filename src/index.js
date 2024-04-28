import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.css'; // Global stylesheet
import App from './App'; // Import the main App component

// Create a root container to manage the React tree from this container node
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component to the DOM
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
