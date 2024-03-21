import { createSelector } from 'reselect';
import { programsAdapter } from '../adapters/programs-adapter';
import type { RootState } from '../store';
import type { Program } from '../types';

const { selectAll: selectPrograms, selectById: selectProgramById } =
  programsAdapter.getSelectors((state: RootState) => state.programs);

const selectProgramsLoadingState = (state: RootState) => state.programs.loading;

const selectProgramsByType = createSelector(
  selectPrograms,
  (state, type) => type,
  (programs: Program[], type: Program['type'] | undefined) => {
    if (!type) {
      return programs;
    }

    return programs.filter((program) => program.type === type);
  },
);

export {
  selectPrograms,
  selectProgramById,
  selectProgramsLoadingState,
  selectProgramsByType,
};
