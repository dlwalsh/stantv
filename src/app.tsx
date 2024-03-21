import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { HomePage } from './components/home-page';
import { ProgramPage } from './components/program-page';
import { ProgramsDataOutlet } from './components/programs-data-outlet';
import './app.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProgramsDataOutlet />} errorElement={<div />}>
          <Route index element={<HomePage />} />
          <Route path="programs/:programId" element={<ProgramPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { App };
