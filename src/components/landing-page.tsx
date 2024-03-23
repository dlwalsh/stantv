import { useNavigate } from 'react-router';
import { Carousel } from './carousel';
import { ProgramSlide } from './program-slide';
import {
  selectProgramsByType,
  selectProgramsLoadingState,
} from '../selectors/programs-selectors';
import { useAppSelector } from '../hooks/store-hooks';
import { programLink } from '../utils/program-utils';
import type { Program } from '../types';

type LandingPageProps = {
  programType?: Program['type'];
};

const LandingPage = ({ programType }: LandingPageProps) => {
  const navigate = useNavigate();
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
      itemKey={(item: Program) => item.id}
      items={programs}
      loading={loadingState === 'pending'}
      onSelect={(item: Program) => {
        navigate(programLink(item));
      }}
      renderItem={(item: Program) => (
        <ProgramSlide
          href={programLink(item)}
          image={item.image}
          title={item.title}
        />
      )}
    />
  );
};

export { LandingPage };
