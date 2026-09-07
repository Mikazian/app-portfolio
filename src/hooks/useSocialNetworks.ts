import { socialNetworks } from '@app-portfolio/data';
import { AppIconSvgType } from '@app-portfolio/enums';
import { useLanguage } from '../contexts';

type IconNameType = AppIconSvgType;

interface SocialNetworksType {
  id: number;
  name: string;
  url: string;
  icon: IconNameType;
}

export const useSocialNetworks = () => {
  const { locale } = useLanguage();
  const networks: SocialNetworksType[] = socialNetworks[locale].map((network) => ({
    id: network.id,
    name: network.name,
    url: network.url,
    icon: network.icon as IconNameType,
  }));

  return { networks };
};
