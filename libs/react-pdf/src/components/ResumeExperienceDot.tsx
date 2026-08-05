import { Image, View } from '@react-pdf/renderer';
import type { AppImgType } from '@app-portfolio/enums';
import { useResumeTheme } from '../contexts';
import { companyLogos } from '../data/company-logos';

type ResumeExperienceDotProps = {
  logo: AppImgType;
};

const ResumeExperienceDot = ({ logo }: ResumeExperienceDotProps) => {
  const colors = useResumeTheme();
  const logoSource = companyLogos[logo];
  const size = 24;
  const logoSize = 18;

  return (
    <View style={{ flexDirection: 'column', alignItems: 'center' }}>
      <View
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
          borderWidth: 1.5,
          borderColor: colors.secondary,
          backgroundColor: colors.background,
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {logoSource ? (
          <Image
            src={logoSource}
            style={{
              width: logoSize,
              height: logoSize,
              borderRadius: logoSize / 2,
              objectFit: 'cover',
            }}
          />
        ) : null}
      </View>
    </View>
  );
};

export default ResumeExperienceDot;
