import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';
import { Header } from './header';
import './page-container.css';

const PageContainer = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const keyDownListener = (event: KeyboardEvent) => {
      if (event.key === 'Backspace') {
        navigate(-1);
      }
    };

    document.addEventListener('keydown', keyDownListener);

    return () => {
      document.removeEventListener('keydown', keyDownListener);
    };
  }, []);

  return (
    <article className="page-container">
      <Header />
      <main className="page-container__main">
        <Outlet />
      </main>
    </article>
  );
};

export { PageContainer };
