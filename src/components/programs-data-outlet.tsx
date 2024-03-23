import { useEffect } from 'react';
import { Outlet } from 'react-router';
import { Error } from './error';
import { useAppDispatch } from '../hooks/store-hooks';
import { fetchPrograms } from '../actions/fetchPrograms';
import { selectProgramsLoadingState } from '../selectors/programs-selectors';
import { useAppSelector } from '../hooks/store-hooks';

const ProgramsDataOutlet = () => {
  const dispatch = useAppDispatch();
  const loadingState = useAppSelector((state) =>
    selectProgramsLoadingState(state),
  );

  useEffect(() => {
    dispatch(fetchPrograms());
  }, [dispatch]);

  if (loadingState === 'error') {
    return <Error />;
  }

  return <Outlet />;
};

export { ProgramsDataOutlet };
