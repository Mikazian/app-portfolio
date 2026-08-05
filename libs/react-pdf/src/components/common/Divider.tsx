import { View } from '@react-pdf/renderer';
import type { Style } from '@react-pdf/types';
import { useResumeTheme } from '../../contexts';

type DividerProps = {
  isVertical?: boolean;
  style?: Style;
};

/**
 * Composant Divider du CV
 * Équivalent react-pdf du Divider web : trait horizontal ou vertical.
 * @param isVertical - Orientation du Divider (défaut : horizontal)
 * @param style - Style supplémentaire à fusionner
 */
const Divider = ({ isVertical = false, style }: DividerProps) => {
  const colors = useResumeTheme();

  const dividerStyle: Style = isVertical
    ? { borderRightWidth: 1, borderColor: colors.divider, height: '100%' }
    : { borderBottomWidth: 1, borderColor: colors.divider, width: '100%' };

  return <View style={[dividerStyle, ...(style ? [style] : [])]} />;
};

export default Divider;
