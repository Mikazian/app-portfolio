import { useLayoutEffect, useState } from 'react';

const Transition = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useLayoutEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    const readyTimer = setTimeout(() => {
      setIsReady(true);
    }, 1300);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(readyTimer);
    };
  }, []);

  return (
    <>
      <div className="background-lines">
        <div className="content">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="line-col" />
          ))}
        </div>
      </div>

      <div className={`lines ${isLoaded ? 'finish' : ''} ${isReady ? 'ready' : ''}`}>
        <div className="content">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="line-col" />
          ))}
        </div>
      </div>
    </>
  );
};

export default Transition;
