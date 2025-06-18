import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css'; // no border
import App from './App';
import ErrorBoundary from './meme/ErrorBoundary';
import { UserProvider } from './PostersContext';



const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <React.StrictMode>
    <ErrorBoundary>
        <UserProvider>
          <App />
        </UserProvider>
    </ErrorBoundary>
  </React.StrictMode>
);


