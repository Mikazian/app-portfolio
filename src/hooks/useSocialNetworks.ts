import socialNetworks from "../data/social-networks.json";
import { AppIconSvgType } from "../types/enums";

type IconNameType = AppIconSvgType;

interface SocialNetworksType {
  id: string;
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
