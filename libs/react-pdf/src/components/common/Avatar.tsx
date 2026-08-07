import { Image, View } from '@react-pdf/renderer';
import type { Style } from '@react-pdf/types';

type AvatarProps = {
  src?: string;
  size?: number;
  style?: Style;
};

const Avatar = ({ src, size = 64, style }: AvatarProps) => (
  <View style={{ width: size, height: size, borderRadius: size / 2, overflow: 'hidden', ...style }}>
    {src && <Image src={src} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
  </View>
);

export default Avatar;
