import { StrictMode } from 'react';
import { RouterProvider } from 'react-router';
import { Provider as ReduxProvider } from 'react-redux';
import type { RouterProviderProps } from 'react-router';
import type { Store } from 'redux';
import './app.css';

type AppProps = {
  router: RouterProviderProps['router'];
  store: Store;
};

const App = ({ router, store }: AppProps) => {
  return (
    <StrictMode>
      <ReduxProvider store={store}>
        <RouterProvider router={router} />
      </ReduxProvider>
    </StrictMode>
  );
};

export { App };
