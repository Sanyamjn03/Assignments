import React from 'react';
import ReactDOM from 'react-dom/client'; // Ensure this import is correct
import { Provider } from 'react-redux';
import { store } from './store'; // Import the store correctly
import App from './App';
import './styles.css'; // Ensure CSS is imported correctly

// Create the root element using ReactDOM.createRoot (for React 18+)
const root = ReactDOM.createRoot(document.getElementById('root')); // Using createRoot()

// Render the App component wrapped with Provider (for Redux)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
