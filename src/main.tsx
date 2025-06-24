import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';

import './index.css';
import { App } from './App.tsx';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <BrowserRouter  basename="bip-39-tools-web">
        <App />
      </BrowserRouter>
    </StrictMode>,
  );
} else {
  console.error('Root element not found');
}
