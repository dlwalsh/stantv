import { programsAdapter } from '../adapters/programs-adapter';
import type { RootState } from '../store';

const { selectAll: selectPrograms, selectById: selectProgramById } =
  programsAdapter.getSelectors((state: RootState) => state.programs);

const selectProgramsLoadingState = (state: RootState) => state.programs.loading;

export { selectPrograms, selectProgramById, selectProgramsLoadingState };
