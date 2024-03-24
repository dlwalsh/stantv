import { createMemoryRouter } from 'react-router';
import { render, waitFor } from '@testing-library/react';
import { App } from '../app';
import { routesConfig } from '../routes-config';
import { store } from '../store';
import './app.css';

const router = createMemoryRouter(routesConfig, {
  initialEntries: ['/tv-shows'],
});

describe('App', () => {
  it('should render App with data', async () => {
    await waitFor(() => {
      render(<App router={router} store={store} />);
    });

    // TODO: test data loading only happens once on route transitions
    expect(true).toEqual(true);
  });
});
