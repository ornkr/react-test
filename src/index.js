import { BumperProvider } from '@ornikar/bumper';
import { createRoot } from 'react-dom/client';
import './index.css';
import AppWeb from './App.web';
import AppNative from './App.native';

// For React technical test, uncomment this next line
// const App = AppWeb;

// For React-native technical test, uncomment this next line
const App = AppNative;

createRoot(document.getElementById('root')).render(
  <BumperProvider>
    <App />
  </BumperProvider>,
);
