import { Link } from 'react-router-dom';
import { Carousel } from './carousel';
import { ProgramSlide } from './program-slide';
import {
  selectProgramIds,
  selectProgramsLoadingState,
  selectProgramsByType,
} from '../selectors/programs-selectors';
import { useAppSelector } from '../hooks/store-hooks';
import type { Program } from '../types';

type LandingPageProps = {
  programType?: Program['type'];
};

const LandingPage = ({ programType }: LandingPageProps) => {
  const programs: Program[] = useAppSelector((state) =>
    selectProgramsByType(state, programType),
  );
  const loadingState = useAppSelector((state) =>
    selectProgramsLoadingState(state),
  );
  const programIds: Array<number> = useAppSelector((state) =>
    selectProgramIds(state),
  );

  return (
    <Carousel
      autoFocus
      aria-label="Programs"
      displayMax={6}
      itemIds={programIds}
      loading={loadingState === 'pending'}
      renderItem={(id, attrs) => (
        <ProgramSlide key={id} id={id as number} {...attrs} />
      )}
    />
  );
};

export { LandingPage };
