import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './tailwind.css';
import App from '@gocheok/App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
