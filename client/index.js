import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.jsx';

// uncomment so that webpack can bundle styles
import styles from './scss/styles.scss';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <App />
);
