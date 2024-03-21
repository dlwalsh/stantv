import { createSlice } from '@reduxjs/toolkit';
import { programsAdapter } from '../adapters/programs-adapter';
import { fetchPrograms } from '../actions/fetchPrograms';

const { reducer } = createSlice({
  name: 'programs',
  initialState: programsAdapter.getInitialState({
    currentRequestId: undefined,
    loading: 'idle',
    error: undefined,
  } as {
    currentRequestId: string | undefined;
    loading: 'idle' | 'pending' | 'error';
    error: string | undefined;
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPrograms.pending, (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending';
        state.currentRequestId = action.meta.requestId;
      }
    });

    builder.addCase(fetchPrograms.fulfilled, (state, action) => {
      if (state.currentRequestId === action.meta.requestId) {
        state.loading = 'idle';
        state.currentRequestId = undefined;
        programsAdapter.setAll(state, action.payload);
      }
    });

    builder.addCase(fetchPrograms.rejected, (state, action) => {
      if (state.currentRequestId === action.meta.requestId) {
        state.loading = 'error';
        state.currentRequestId = undefined;
        state.error = action.error?.message;
      }
    });
  },
});

export { reducer as programsReducer };
