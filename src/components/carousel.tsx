import { useEffect, useRef } from 'react';
import { useCarousel } from '../hooks/use-carousel';
import type { KeyboardEvent, ReactNode, RefObject } from 'react';
import './carousel.css';

type CarouselItemProps = {
  'aria-selected': boolean;
  className: string;
  onKeyDown?: (event: KeyboardEvent<HTMLElement>) => void;
  ref?: RefObject<HTMLAnchorElement>;
  tabIndex: number;
};

type CarouselProps = {
  'aria-label': string;
  autoFocus?: boolean;
  displayMax: number;
  itemIds: Array<number | string>;
  loading: boolean;
  renderItem: (id: number | string, attrs: CarouselItemProps) => ReactNode;
};

const Carousel = ({
  'aria-label': ariaLabel,
  autoFocus = false,
  displayMax,
  itemIds,
  loading,
  renderItem,
}: CarouselProps) => {
  const mountedRef = useRef<boolean>(false);
  const selectedItemRef = useRef<HTMLAnchorElement>(null);
  const { displayIds, handleKeyDown, selectedId } = useCarousel({
    displayMax,
    itemIds,
  });

  // only focus on mount if autoFocus is true
  // otherwise, focus every time selectedId changes
  useEffect(() => {
    if (!loading && (autoFocus || mountedRef.current)) {
      selectedItemRef.current?.focus();
      mountedRef.current = true;
    }
  }, [autoFocus, loading, selectedId]);

  return (
    <section
      aria-label={ariaLabel}
      aria-roledescription="carousel"
      className="carousel"
    >
      {loading
        ? Array(displayMax)
            .fill(undefined)
            .map((x, index) => (
              <div
                key={index}
                className="carousel__item carousel__item--skeleton"
              />
            ))
        : displayIds.map((id) =>
            renderItem(id, {
              'aria-selected': id === selectedId,
              className: 'carousel__item',
              onKeyDown: id === selectedId ? handleKeyDown : undefined,
              ref: id === selectedId ? selectedItemRef : undefined,
              tabIndex: id === selectedId ? 0 : -1,
            }),
          )}
    </section>
  );
};

export { Carousel };
