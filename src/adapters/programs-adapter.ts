import { createEntityAdapter } from '@reduxjs/toolkit';
import type { Program } from '../types';

const programsAdapter = createEntityAdapter<Program, number>({
  selectId: (program: Program) => program.id,
});

export { programsAdapter };
