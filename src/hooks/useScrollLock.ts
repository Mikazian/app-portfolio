import { useEffect } from 'react';

const useScrollLock = (active: boolean): void => {
  useEffect(() => {
    if (!active) return;

    const originalOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';

    return () => {
      document.documentElement.style.overflow = originalOverflow;
    };
  }, [active]);
};

export { useScrollLock };
