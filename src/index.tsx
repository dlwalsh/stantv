import { createRoot } from 'react-dom/client';
import { App } from './app';

const rootElem: HTMLElement = document.getElementById('root')!;

createRoot(rootElem).render(<App />);
