import socialNetworks from '../data/social-network.json';
import { AppIconSvgType } from '@app-portfolio/enums';

type IconNameType = AppIconSvgType;

interface SocialNetworksType {
  id: number;
  name: string;
  url: string;
  icon: IconNameType;
}

export const useSocialNetworks = () => {
  const networks: SocialNetworksType[] = socialNetworks.map((network) => ({
    id: network.id,
    name: network.name,
    url: network.url,
    icon: network.icon as IconNameType,
  }));

  return { networks };
};
