import { Outlet } from 'react-router';
import { Header } from './header';
import './page-outline.css';

const PageOutline = () => {
  return (
    <article className="page-outline">
      <Header />
      <main>
        <Outlet />
      </main>
    </article>
  );
};

export { PageOutline };
