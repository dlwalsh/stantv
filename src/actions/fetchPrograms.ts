import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchPrograms = createAsyncThunk('programs/fetch', async () => {
  const response = await fetch('/data.json');
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return await response.json();
});

export { fetchPrograms };
