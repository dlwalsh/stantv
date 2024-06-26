import { useCallback, useEffect, useMemo, useState } from 'react';
import { decrement, increment } from '../utils/number-utils';
import type { KeyboardEvent } from 'react';

type CarouselHookParams<T> = {
  displayMax: number;
  items: T[];
  onSelect: (item: T) => void;
};

function useCarousel<T>({
  displayMax: displayMaxParam,
  items,
  onSelect,
}: CarouselHookParams<T>) {
  const [{ selectedIndex, displayBegin }, setValues] = useState<{
    selectedIndex: number;
    displayBegin: number;
  }>({ selectedIndex: 0, displayBegin: 0 });

  const selectedItem = items[selectedIndex];
  const total = items.length;
  const displayMax = Math.min(displayMaxParam, total);

  const goBack = useCallback(() => {
    // decrement the selected index
    // only decrement the display index if the selected item is the first displayed
    setValues((vals) => {
      const newIndex = decrement(vals.selectedIndex, total);

      return {
        selectedIndex: newIndex,
        displayBegin:
          vals.displayBegin === vals.selectedIndex
            ? newIndex
            : vals.displayBegin,
      };
    });
  }, [total]);

  const goForward = useCallback(() => {
    // increment the selected index
    // only increment the display index if the selected item is the last useful item displayed
    setValues((vals) => {
      // Minus two offset because last item is half off the screen
      const displayPenultimate = (vals.displayBegin + displayMax - 2) % total;

      return {
        selectedIndex: increment(vals.selectedIndex, total),
        displayBegin:
          displayPenultimate === vals.selectedIndex
            ? increment(vals.displayBegin, total)
            : vals.displayBegin,
      };
    });
  }, [displayMax, total]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLElement>) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        goBack();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        goForward();
      } else if (event.key === 'Enter') {
        event.preventDefault();
        onSelect(selectedItem);
      }
    },
    [goBack, goForward, onSelect, selectedItem],
  );

  const displayItems = useMemo(() => {
    const displayEnd = displayBegin + displayMax;

    if (displayEnd >= total) {
      return [
        ...items.slice(displayBegin),
        ...items.slice(0, displayEnd % total),
      ];
    }

    return items.slice(displayBegin, displayEnd);
  }, [displayBegin, displayMax, items, total]);

  // reset selected index when items change
  useEffect(() => {
    setValues({ selectedIndex: 0, displayBegin: 0 });
  }, [items]);

  return {
    displayItems,
    handleKeyDown,
    selectedItem,
    selectedIndex,
  };
}

export { useCarousel };
