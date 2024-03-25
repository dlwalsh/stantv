import { createAsyncThunk } from '@reduxjs/toolkit';

type FetchProgramsParams = {
  delay?: number;
};

const fetchPrograms = createAsyncThunk(
  'programs/fetch',
  async (params?: FetchProgramsParams) => {
    const response = await fetch('/data.json');

    if (params?.delay !== undefined) {
      await new Promise((resolve) => setTimeout(resolve, params.delay));
    }

    return await response.json();
  },
);

export { fetchPrograms };
