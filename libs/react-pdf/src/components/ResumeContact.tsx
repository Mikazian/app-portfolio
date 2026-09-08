import { View } from '@react-pdf/renderer';
import { ResumeMode } from '@app-portfolio/enums';
import { formatAddress, formatUrl } from '@app-portfolio/helpers';
import { getResumeData } from '../data/resume';
import { pdfT } from '../i18n';
import type { Locale } from '@app-portfolio/enums';
import ContactItem from './common/ContactItem';
import ResumeSection from './ResumeSection';

type ResumeContactProps = {
  mode?: ResumeMode;
  locale: Locale;
};

const ResumeContact = ({ mode = ResumeMode.INTERACTIVE, locale }: ResumeContactProps) => {
  const { profile, socialNetworks } = getResumeData(locale);
  const portfolio = socialNetworks.find((social) => social.name === 'Portfolio');
  const github = socialNetworks.find((social) => social.name === 'GitHub');
  const linkedin = socialNetworks.find((social) => social.name === 'LinkedIn');

  return (
    <ResumeSection title={pdfT(locale, 'section.contact')} lineLength="short">
      <View style={{ flexDirection: 'column', gap: 12 }}>
        <ContactItem icon="svg-map-pin" value={formatAddress(profile.address)} />
        <ContactItem icon="svg-mail" value={profile.email} />
        <ContactItem icon="svg-phone" value={profile.phone} />
        {portfolio ? (
          <ContactItem
            icon="svg-globe"
            value={mode === ResumeMode.PRINT ? formatUrl(portfolio.url) : portfolio.name}
            url={portfolio.url}
          />
        ) : null}
        {github ? (
          <ContactItem
            icon="svg-github"
            value={mode === ResumeMode.PRINT ? formatUrl(github.url) : github.name}
            url={github.url}
          />
        ) : null}
        {linkedin ? (
          <ContactItem
            icon="svg-linkedin"
            value={mode === ResumeMode.PRINT ? formatUrl(linkedin.url) : linkedin.name}
            url={linkedin.url}
          />
        ) : null}
      </View>
    </ResumeSection>
  );
};

export default ResumeContact;
