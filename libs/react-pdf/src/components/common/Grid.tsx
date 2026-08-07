import { createContext, useContext, type ReactNode } from 'react';
import { View } from '@react-pdf/renderer';
import type { Style } from '@react-pdf/types';

const COLUMNS = 12;
const BREAKPOINTS_ORDER = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

type Breakpoint = (typeof BREAKPOINTS_ORDER)[number];
type GridSizeValue = number | 'grow' | 'auto';
type GridSize = GridSizeValue | Partial<Record<Breakpoint, GridSizeValue>>;

const GridSpacingContext = createContext(0);

type GridProps = {
  container?: boolean;
  size?: GridSize;
  spacing?: number;
  style?: Style;
  children?: ReactNode;
};

const resolveSize = (size?: GridSize): GridSizeValue | undefined => {
  if (size === undefined) return undefined;
  if (typeof size === 'number' || size === 'grow' || size === 'auto') return size;

  for (let i = BREAKPOINTS_ORDER.length - 1; i >= 0; i--) {
    const value = size[BREAKPOINTS_ORDER[i]];
    if (value !== undefined) return value;
  }
  return undefined;
};

const getSizeStyle = (size?: GridSizeValue): Style => {
  if (size === 'grow') {
    return { flexGrow: 1, flexBasis: 0, maxWidth: '100%' };
  }

  if (size === 'auto') {
    return { flexGrow: 0, flexShrink: 0, width: 'auto' };
  }

  if (typeof size === 'number') {
    return { width: `${(100 * size) / COLUMNS}%` };
  }

  return {};
};

const Grid = ({ container, size, spacing = 0, style, children }: GridProps) => {
  const inheritedSpacing = useContext(GridSpacingContext);

  if (container) {
    return (
      <GridSpacingContext.Provider value={spacing}>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: -spacing,
            marginLeft: -spacing,
            ...style,
          }}
        >
          {children}
        </View>
      </GridSpacingContext.Provider>
    );
  }

  const resolvedSize = resolveSize(size);

  return (
    <View
      style={{
        ...getSizeStyle(resolvedSize),
        paddingTop: inheritedSpacing,
        paddingLeft: inheritedSpacing,
        ...style,
      }}
    >
      {children}
    </View>
  );
};

export default Grid;
