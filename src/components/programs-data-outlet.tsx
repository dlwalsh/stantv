import { useEffect } from 'react';
import { Outlet } from 'react-router';
import { useAppDispatch } from '../hooks/store-hooks';
import { fetchPrograms } from '../actions/fetchPrograms';

const ProgramsDataOutlet = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPrograms());
  }, []);

  return <Outlet />;
};

export { ProgramsDataOutlet };
