import { useEffect, useRef, useState } from 'react';
import TruncateMarkup from 'react-truncate-markup';

interface ArticleProps {
  text: string;
  nbOfLine?: number;
  className?: string;
}

const Article = ({ text, nbOfLine, className }: ArticleProps): React.JSX.Element => {
  const [expanded, setExpanded] = useState(false);
  const [remountKey, setRemountKey] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const baseClassName = `text-sm whitespace-pre-line text-text-secondary ${className ?? ''}`;

  useEffect(() => {
    if (!containerRef.current || !nbOfLine) return;

    const observer = new ResizeObserver(() => {
      setRemountKey((k) => k + 1);
    });

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [nbOfLine]);

  if (!nbOfLine || nbOfLine <= 0) {
    return <article className={baseClassName}>{text}</article>;
  }

  if (expanded) {
    return (
      <article ref={containerRef} className={baseClassName}>
        {text}
        <button
          type="button"
          onClick={() => setExpanded(false)}
          className="ml-1 whitespace-nowrap text-xs font-bold text-primary cursor-pointer"
        >
          ... voir moins
        </button>
      </article>
    );
  }

  return (
    <article ref={containerRef} className={baseClassName}>
      <TruncateMarkup
        key={remountKey}
        lines={nbOfLine}
        tokenize="words"
        ellipsis={
          <span>
            <button
              type="button"
              onClick={() => setExpanded(true)}
              className="whitespace-nowrap text-xs font-bold text-primary cursor-pointer"
            >
              ... voir plus
            </button>
          </span>
        }
      >
        <span>{text}</span>
      </TruncateMarkup>
    </article>
  );
};

export default Article;
