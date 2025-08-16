import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './AboutPage.tsx'; // Make sure this points to your App component
import './index.css';     // Make sure this points to your main CSS file

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);