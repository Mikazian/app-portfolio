import { Font } from '@react-pdf/renderer';
import LaguMedium from '../../../src/assets/fonts/Lagu-Sans-Medium.ttf';
import LaguBold from '../../../src/assets/fonts/Lagu-Sans-Bold.ttf';
import NeuePlakBold from '../../../src/assets/fonts/NeuePlak-NarrowBold.ttf';
import NeuePlakBlack from '../../../src/assets/fonts/NeuePlak-NarrowBlack.ttf';

Font.register({
  family: 'LaguSans',
  fonts: [
    { src: LaguMedium, fontWeight: 400 },
    { src: LaguBold, fontWeight: 700 },
  ],
});

Font.register({
  family: 'NeuePlak',
  fonts: [
    { src: NeuePlakBold, fontWeight: 700 },
    { src: NeuePlakBlack, fontWeight: 900 },
  ],
});

Font.registerHyphenationCallback((word) => [word]);

export type ResumeColors = {
  primary: string;
  secondary: string;
  textPrimary: string;
  textSecondary: string;
  background: string;
  foreground: string;
  divider: string;
  dividerlight: string;
  dark: string;
};

export const resumeColors: ResumeColors = {
  primary: '#ec6559',
  secondary: '#7786af',
  textPrimary: '#ffffff',
  textSecondary: '#cacaca',
  background: '#111116',
  foreground: '#16171f',
  divider: '#202130',
  dividerlight: '#434667',
  dark: '#1a1a2e',
};
