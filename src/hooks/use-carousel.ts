import { useCallback, useEffect, useMemo, useState } from 'react';
import { decrement, increment } from '../utils/number-utils';
import type { KeyboardEvent } from 'react';

type CarouselHookParams = {
  displayMax: number;
  itemIds: Array<number | string>;
};

function useCarousel({
  displayMax: displayMaxParam,
  itemIds,
}: CarouselHookParams) {
  const [{ selectedIndex, displayBegin }, setValues] = useState<{
    selectedIndex: number;
    displayBegin: number;
  }>({ selectedIndex: 0, displayBegin: 0 });

  const selectedId = itemIds[selectedIndex];
  const total = itemIds.length;
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
  }, [itemIds, total]);

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
      }
    },
    [goBack, goForward],
  );

  const displayIds = useMemo(() => {
    const displayEnd = displayBegin + displayMax;

    if (displayEnd >= total) {
      return [
        ...itemIds.slice(displayBegin),
        ...itemIds.slice(0, displayEnd % total),
      ];
    }

    return itemIds.slice(displayBegin, displayEnd);
  }, [displayBegin, displayMax, itemIds, total]);

  // reset selected index when items change
  useEffect(() => {
    setValues({ selectedIndex: 0, displayBegin: 0 });
  }, [itemIds]);

  return {
    displayIds,
    handleKeyDown,
    selectedId,
    selectedIndex,
  };
}

export { useCarousel };
