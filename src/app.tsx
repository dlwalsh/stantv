import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { PageOutline } from './components/page-outline';
import { HomePage } from './components/home-page';
import { ProgramPage } from './components/program-page';
import { ProgramsDataOutlet } from './components/programs-data-outlet';
import './app.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageOutline />}>
          <Route element={<ProgramsDataOutlet />} errorElement={<div />}>
            <Route index element={<HomePage />} />
            <Route path="programs/:programId" element={<ProgramPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { App };
