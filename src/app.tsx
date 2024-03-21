import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { PageOutline } from './components/page-outline';
import { LandingPage } from './components/landing-page';
import { ProgramPage } from './components/program-page';
import { ProgramsDataOutlet } from './components/programs-data-outlet';
import { Error } from './components/error';
import './app.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageOutline />}>
          <Route element={<ProgramsDataOutlet />}>
            <Route index element={<LandingPage />} />
            <Route
              path="tv-shows"
              element={<LandingPage programType="series" />}
            />
            <Route
              path="movies"
              element={<LandingPage programType="movie" />}
            />
            <Route path="programs/:programId" element={<ProgramPage />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { App };
