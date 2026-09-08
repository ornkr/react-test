import { BumperProvider } from '@ornikar/bumper';
import { createRoot } from 'react-dom/client';
import '@ornikar/gt-standard-font/font-face.css';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <BumperProvider>
    <App />
  </BumperProvider>,
);
