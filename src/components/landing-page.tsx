import { Link } from 'react-router-dom';
import {
  selectProgramsLoadingState,
  selectProgramsByType,
} from '../selectors/programs-selectors';
import { useAppSelector } from '../hooks/store-hooks';
import type { Program } from '../types';

type LandingPageProps = {
  programType?: Program['type'];
};

const typeToRouteMap = new Map([
  ['series', 'tv-shows'],
  ['movie', 'movies'],
]);

const LandingPage = ({ programType }: LandingPageProps) => {
  const programs: Program[] = useAppSelector((state) =>
    selectProgramsByType(state, programType),
  );
  const loadingState = useAppSelector((state) =>
    selectProgramsLoadingState(state),
  );

  return (
    <>
      {loadingState === 'pending' ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {programs.map((program) => (
            <li key={program.id}>
              <Link
                to={
                  programType
                    ? `${program.id}`
                    : `${typeToRouteMap.get(program.type)}/${program.id}`
                }
              >
                {program.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export { LandingPage };
