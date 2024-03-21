import { createRoot } from 'react-dom/client';
import { Root } from './root';

const rootElem: HTMLElement = document.getElementById('root')!;

createRoot(rootElem).render(<Root />);
