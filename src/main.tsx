import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

createRoot(document.getElementById('root')!).render(<App />);

if (import.meta.hot) import.meta.hot.on('vite:beforeUpdate', () => window.location.reload());
