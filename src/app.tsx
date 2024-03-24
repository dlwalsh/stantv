import { RouterProvider } from 'react-router';
import type { RouterProviderProps } from 'react-router';
import './app.css';

type AppProps = {
  router: RouterProviderProps['router'];
};

const App = ({ router }: AppProps) => {
  return <RouterProvider router={router} />;
};

export { App };
