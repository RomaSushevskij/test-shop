import { useCallback, useRef } from "react";

export const useDebounce = <T>(callback: (...args: T[]) => void, delay: number = 500) => {
  const timer = useRef<ReturnType<typeof setTimeout>>(null);

  return useCallback(
    (...args: T[]) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }

      timer.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [delay, callback],
  );
};
