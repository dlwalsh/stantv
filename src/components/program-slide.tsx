import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../hooks/store-hooks';
import { selectProgramById } from '../selectors/programs-selectors';
import type { KeyboardEvent } from 'react';
import type { Program } from '../types';
import './program-slide.css';

type ProgramSlideProps = {
  'aria-selected'?: boolean;
  className?: string;
  image: string;
  id: number;
  onKeyDown?: (event: KeyboardEvent<HTMLElement>) => void;
  programType: 'movie' | 'series';
  tabIndex?: number;
  title: string;
};

const typeToRoute = new Map([
  ['movie', 'movies'],
  ['series', 'tv-shows'],
]);

const ProgramSlide = forwardRef<HTMLAnchorElement, ProgramSlideProps>(
  (
    {
      'aria-selected': ariaSelected,
      className,
      id,
      image,
      onKeyDown,
      programType,
      tabIndex,
      title,
    },
    ref,
  ) => {
    return (
      <Link
        ref={ref}
        to={`/${typeToRoute.get(programType)}/${id}`}
        aria-selected={ariaSelected}
        className={className}
        onKeyDown={onKeyDown}
        tabIndex={tabIndex}
      >
        <img
          className="program-slide__image"
          src={image}
          alt={`${title} cover image`}
        />
      </Link>
    );
  },
);

export { ProgramSlide };
