import { Carousel } from './carousel';
import { ProgramSlide } from './program-slide';
import {
  selectProgramsByType,
  selectProgramsLoadingState,
} from '../selectors/programs-selectors';
import { useAppSelector } from '../hooks/store-hooks';
import type { Program } from '../types';

type LandingPageProps = {
  programType?: Program['type'];
};

const LandingPage = ({ programType }: LandingPageProps) => {
  const loadingState = useAppSelector((state) =>
    selectProgramsLoadingState(state),
  );
  const programs: Program[] = useAppSelector((state) =>
    selectProgramsByType(state, programType),
  );

  return (
    <Carousel
      autoFocus
      aria-label="Programs"
      displayMax={6}
      items={programs}
      loading={loadingState === 'pending'}
      renderItem={(item: Program, attrs) => (
        <ProgramSlide
          key={item.id}
          {...attrs}
          id={item.id}
          image={item.image}
          programType={item.type}
          title={item.title}
        />
      )}
    />
  );
};

export { LandingPage };
