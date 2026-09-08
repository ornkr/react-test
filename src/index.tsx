import { BumperProvider } from '@ornikar/bumper';
import { createRoot } from 'react-dom/client';
import type { config as BumperTamaguiConfig } from '@ornikar/bumper/src/tamagui.config';
import '@ornikar/gt-standard-font/font-face.css';
import App from './App';

type Conf = typeof BumperTamaguiConfig;

declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends Conf {}
}

createRoot(document.getElementById('root')!).render(
  <BumperProvider>
    <App />
  </BumperProvider>,
);
