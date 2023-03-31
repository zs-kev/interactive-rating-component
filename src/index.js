import React from 'react';
import { createRoot } from 'react-dom/client';

import './global-styles.css';
import App from './components/App';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
