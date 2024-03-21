import { createRoot } from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { App } from './app';
import { store } from './store';

const rootElem: HTMLElement = document.getElementById('root')!;

createRoot(rootElem).render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>,
);
