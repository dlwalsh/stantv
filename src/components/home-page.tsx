import { Link } from 'react-router-dom';
import {
  selectPrograms,
  selectProgramsLoadingState,
} from '../selectors/programs-selectors';
import { useAppSelector } from '../hooks/store-hooks';
import type { Program } from '../types';

const HomePage = () => {
  const programs: Program[] = useAppSelector((state) => selectPrograms(state));
  const loadingState = useAppSelector((state) =>
    selectProgramsLoadingState(state),
  );

  return (
    <>
      <img alt="Stan logo" src="/logo.svg" height={48} width={160} />
      {loadingState === 'pending' ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {programs.map((program) => (
            <li key={program.id}>
              <Link to={`programs/${program.id}`}>{program.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export { HomePage };
