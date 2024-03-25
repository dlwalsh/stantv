import { useEffect } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import {
  Outlet,
  createMemoryRouter,
  useLocation,
  useNavigate,
} from 'react-router';
import { fireEvent, render } from '@testing-library/react';
import { App } from '../app';
import { routesConfig } from '../routes-config';
import { store } from '../store';
import './app.css';

global['Request'] = jest.fn().mockImplementation(() => ({
  signal: {
    removeEventListener: () => {},
    addEventListener: () => {},
  },
}));

describe('App', () => {
  it('should go back on Backspaee', async () => {
    const spyLocation = jest.fn();
    const LocationListenComponent = () => {
      const location = useLocation();
      const navigate = useNavigate();

      useEffect(() => {
        navigate('/tv-shows');
      }, [navigate]);

      useEffect(() => {
        spyLocation(location.pathname);
      }, [location]);

      return <Outlet />;
    };

    const router = createMemoryRouter(
      [
        {
          path: '/',
          element: <LocationListenComponent />,
          children: routesConfig,
        },
      ],
      {
        initialEntries: ['/'],
      },
    );

    render(
      <ReduxProvider store={store}>
        <App router={router} />
      </ReduxProvider>,
    );

    fireEvent.keyDown(document, { key: 'Backspace' });

    expect(spyLocation).toHaveBeenNthCalledWith(1, '/');
    expect(spyLocation).toHaveBeenNthCalledWith(2, '/tv-shows');
    expect(spyLocation).toHaveBeenNthCalledWith(3, '/');
  });
});
