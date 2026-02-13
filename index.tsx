import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App';

console.log("[v0] App starting, looking for root element...");
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

console.log("[v0] Root element found, mounting React app...");
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
