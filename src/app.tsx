import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { PageContainer } from './components/page-container';
import { LandingPage } from './components/landing-page';
import { ProgramPage } from './components/program-page';
import { ProgramsDataOutlet } from './components/programs-data-outlet';
import { Error } from './components/error';
import { store } from './store';
import './app.css';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageContainer />}>
            <Route path="" element={<ProgramsDataOutlet />}>
              <Route index element={<LandingPage />} />
              <Route path="tv-shows">
                <Route index element={<LandingPage programType="series" />} />
                <Route path=":programId" element={<ProgramPage />} />
              </Route>
              <Route path="movies">
                <Route index element={<LandingPage programType="movie" />} />
                <Route path=":programId" element={<ProgramPage />} />
              </Route>
              <Route path="*" element={<Error />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ReduxProvider>
  );
};

export { App };
