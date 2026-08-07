import { Link, View } from '@react-pdf/renderer';
import type { Style } from '@react-pdf/types';
import type { AppIconSvgType } from '@app-portfolio/enums';
import { resumeColors } from '../../styles';
import Image from './Image';
import Text from './Text';

type ContactItemProps = {
  icon?: AppIconSvgType;
  value: string;
  url?: string;
  style?: Style;
};

const ContactItem = ({ icon, value, url, style }: ContactItemProps) => {
  const colors = resumeColors;

  return (
    <View
      style={[{ flexDirection: 'row', alignItems: 'center', gap: 8 }, ...(style ? [style] : [])]}
    >
      {icon ? <Image name={icon} size={12} /> : null}

      <View style={{ flex: 1, flexDirection: 'column', gap: 4, minWidth: 0 }}>
        {url ? (
          <Link
            src={url}
            style={{
              fontFamily: 'LaguSans',
              fontSize: 8,
              color: colors.textPrimary,
              fontWeight: 400,
              lineHeight: 0.8,
              textDecoration: 'none',
            }}
          >
            {value}
          </Link>
        ) : (
          <Text variant="p" color={colors.textPrimary} fontWeight={400} style={{ lineHeight: 1 }}>
            {value}
          </Text>
        )}
      </View>
    </View>
  );
};

export default ContactItem;
