import { createRoot } from 'react-dom/client';
import { Root } from './root';
import './app.css';

const rootElem: HTMLElement = document.getElementById('root')!;

createRoot(rootElem).render(<Root />);
