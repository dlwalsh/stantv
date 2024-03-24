import { PageContainer } from './components/page-container';
import { LandingPage } from './components/landing-page';
import { ProgramPage } from './components/program-page';
import { Error } from './components/error';
import type { RouteObject } from 'react-router';

const routesConfig: RouteObject[] = [
  {
    path: '/',
    element: <PageContainer />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: 'tv-shows',
        children: [
          {
            index: true,
            element: <LandingPage programType="series" />,
          },
          {
            path: ':programId',
            element: <ProgramPage />,
          },
        ],
      },
      {
        path: 'movies',
        children: [
          {
            index: true,
            element: <LandingPage programType="movie" />,
          },
          {
            path: ':programId',
            element: <ProgramPage />,
          },
        ],
      },
      {
        path: '*',
        element: <Error />,
      },
    ],
  },
];

export { routesConfig };
