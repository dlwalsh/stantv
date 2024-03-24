import { useEffect, useRef } from 'react';
import { useCarousel } from '../hooks/use-carousel';
import type { ReactNode } from 'react';
import './carousel.css';

type CarouselProps<T> = {
  'aria-label': string;
  autoFocus?: boolean;
  displayMax: number;
  itemKey: (item: T) => string | number;
  items: T[];
  loading?: boolean;
  onSelect: (item: T) => void;
  renderItem: (item: T) => ReactNode;
};

const Carousel = <T,>({
  'aria-label': ariaLabel,
  autoFocus = false,
  displayMax,
  itemKey,
  items,
  loading = false,
  onSelect,
  renderItem,
}: CarouselProps<T>) => {
  const carouselRef = useRef<HTMLUListElement>(null);
  const { displayItems, handleKeyDown, selectedItem } = useCarousel({
    displayMax,
    items,
    onSelect,
  });

  useEffect(() => {
    if (autoFocus) {
      carouselRef.current?.focus();
    }
  }, [autoFocus]);

  return (
    <div className="carousel">
      <ul
        ref={carouselRef}
        aria-label={ariaLabel}
        aria-roledescription="carousel"
        aria-busy={loading}
        className="carousel__list"
        onKeyDown={handleKeyDown}
        role="listbox"
        tabIndex={0}
      >
        {loading
          ? Array(displayMax)
              .fill(undefined)
              .map((x, index) => (
                <li
                  key={index}
                  aria-disabled="true"
                  className="carousel__item carousel__item--skeleton"
                  role="option"
                />
              ))
          : displayItems.map((item) => (
              <li
                key={itemKey(item)}
                aria-selected={item === selectedItem}
                className="carousel__item"
                role="option"
              >
                {renderItem(item)}
              </li>
            ))}
      </ul>
    </div>
  );
};

export { Carousel };
