import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../hooks/store-hooks';
import { selectProgramById } from '../selectors/programs-selectors';
import type { KeyboardEvent } from 'react';
import type { Program } from '../types';
import './program-slide.css';

type ProgramSlideProps = {
  'aria-selected': boolean;
  className: string;
  id: number;
  onKeyDown?: (event: KeyboardEvent<HTMLElement>) => void;
  tabIndex: number;
};

const typeToRoute = new Map([
  ['series', 'tv-shows'],
  ['movie', 'movies'],
]);

const ProgramSlide = forwardRef<HTMLAnchorElement, ProgramSlideProps>(
  (
    { 'aria-selected': ariaSelected, className, id, onKeyDown, tabIndex },
    ref,
  ) => {
    const program: Program = useAppSelector((state) =>
      selectProgramById(state, id),
    );

    return (
      <Link
        ref={ref}
        to={`/${typeToRoute.get(program.type)}/${id}`}
        aria-selected={ariaSelected}
        className={className}
        onKeyDown={onKeyDown}
        tabIndex={tabIndex}
      >
        <img
          className="program-slide__image"
          src={program.image}
          alt={`${program.title} cover image`}
        />
      </Link>
    );
  },
);

export { ProgramSlide };
