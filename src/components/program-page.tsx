import { useParams } from 'react-router';
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
    return 'Loading...';
  }

  return <pre>{JSON.stringify(program, null, 4)}</pre>;
};

export { ProgramPage };
