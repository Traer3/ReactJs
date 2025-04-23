import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css'; // no border
import App from './App';
import ErrorBoundary from './meme/ErrorBoundary';


const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);


