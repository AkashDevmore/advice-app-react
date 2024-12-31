import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

// Get the root element
const rootElement = document.getElementById('root');

// Create the root and render the app
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
