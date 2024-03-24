import { useEffect } from 'react';
import { Error } from './error';
import { useAppDispatch } from '../hooks/store-hooks';
import { fetchPrograms } from '../actions/fetchPrograms';
import { selectProgramsLoadingState } from '../selectors/programs-selectors';
import { useAppSelector } from '../hooks/store-hooks';
import type { ReactNode } from 'react';

type ProgramsDataOutletProps = {
  children: ReactNode;
};

const ProgramsDataOutlet = ({ children }: ProgramsDataOutletProps) => {
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

  return children;
};

export { ProgramsDataOutlet };
