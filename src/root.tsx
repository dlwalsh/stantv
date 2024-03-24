import { createBrowserRouter } from 'react-router-dom';
import { App } from './app';
import { routesConfig } from './routes-config';
import { store } from './store';
import './app.css';

const router = createBrowserRouter(routesConfig);

const Root = () => <App router={router} store={store} />;

export { Root };
