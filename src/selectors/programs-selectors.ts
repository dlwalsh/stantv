import { createSelector } from 'reselect';
import { programsAdapter } from '../adapters/programs-adapter';
import type { RootState } from '../store';
import type { Program } from '../types';

const { selectAll, selectIds, selectById } = programsAdapter.getSelectors(
  (state: RootState) => state.programs,
);

const selectProgramsLoadingState = (state: RootState) => state.programs.loading;

const selectProgramsByType = createSelector(
  selectAll,
  (state, type) => type,
  (programs: Program[], type: Program['type'] | undefined) => {
    if (!type) {
      return programs;
    }

    return programs.filter((program) => program.type === type);
  },
);

export {
  selectAll as selectPrograms,
  selectById as selectProgramById,
  selectIds as selectProgramIds,
  selectProgramsByType,
  selectProgramsLoadingState,
};
