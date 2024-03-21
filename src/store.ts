import { configureStore } from '@reduxjs/toolkit';
import { programsReducer } from './reducers/programs-reducer';

const store = configureStore({
  reducer: {
    programs: programsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});

type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;

export { store };
export type { AppDispatch, RootState };
