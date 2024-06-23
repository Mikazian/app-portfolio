import { useLayoutEffect, useState } from "react";

/**
 * Component Transition qui se déclenche lors du chargement de la page
 */
const Transition = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useLayoutEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    setTimeout(() => {
      setIsReady(true);
    }, 1300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`lines ${isLoaded ? "finish" : undefined} ${isReady ? "ready" : undefined}`}
    >
      <div className="content">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="line-col" />
        ))}
      </div>
    </div>
  );
};

export default Transition;
