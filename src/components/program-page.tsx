import { useParams } from 'react-router';
import { ProgramDetail } from './program-detail';
import { ProgramSkeleton } from './program-skeleton';
import { Error } from './error';
import { useAppSelector } from '../hooks/store-hooks';
import {
  selectProgramById,
  selectProgramsLoadingState,
} from '../selectors/programs-selectors';
import type { Program } from '../types';

const ProgramPage = () => {
  const { programId } = useParams() as { programId: string };
  const program: Program = useAppSelector((state) =>
    selectProgramById(state, parseInt(programId, 10)),
  );
  const loadingState = useAppSelector((state) =>
    selectProgramsLoadingState(state),
  );

  if (loadingState === 'pending') {
    return <ProgramSkeleton />;
  }

  if (!program) {
    return <Error />;
  }

  return (
    <ProgramDetail
      description={program.description}
      genre={program.genre}
      image={program.image}
      language={program.language}
      rating={program.rating}
      title={program.title}
      year={program.year}
    />
  );
};

export { ProgramPage };
