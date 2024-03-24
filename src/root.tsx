import { Provider as ReduxProvider } from 'react-redux';
import { createBrowserRouter } from 'react-router-dom';
import { App } from './app';
import { ProgramsDataOutlet } from './components/programs-data-outlet';
import { routesConfig } from './routes-config';
import { store } from './store';
import './app.css';

const router = createBrowserRouter(routesConfig);

const Root = () => (
  <ReduxProvider store={store}>
    <ProgramsDataOutlet>
      <App router={router} />
    </ProgramsDataOutlet>
  </ReduxProvider>
);

export { Root };
