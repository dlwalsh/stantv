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

type CarouselProps<T> = {
  'aria-label': string;
  autoFocus?: boolean;
  displayMax: number;
  items: T[];
  loading: boolean;
  renderItem: (item: T, attrs: CarouselItemProps) => ReactNode;
};

const Carousel = <T,>({
  'aria-label': ariaLabel,
  autoFocus = false,
  displayMax,
  items,
  loading,
  renderItem,
}: CarouselProps<T>) => {
  const mountedRef = useRef<boolean>(false);
  const selectedItemRef = useRef<HTMLAnchorElement>(null);
  const { displayItems, handleKeyDown, selectedItem } = useCarousel({
    displayMax,
    items,
  });

  // only focus on mount if autoFocus is true
  // otherwise, focus every time selectedId changes
  useEffect(() => {
    if (!loading && (autoFocus || mountedRef.current)) {
      selectedItemRef.current?.focus();
      mountedRef.current = true;
    }
  }, [autoFocus, loading, selectedItem]);

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
        : displayItems.map((item) =>
            renderItem(item, {
              'aria-selected': item === selectedItem,
              className: 'carousel__item',
              onKeyDown: item === selectedItem ? handleKeyDown : undefined,
              ref: item === selectedItem ? selectedItemRef : undefined,
              tabIndex: item === selectedItem ? 0 : -1,
            }),
          )}
    </section>
  );
};

export { Carousel };
