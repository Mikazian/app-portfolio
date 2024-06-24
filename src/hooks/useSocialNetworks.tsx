import socialNetworks from "../data/social-networks.json";
import { AppIconSvgType } from "../types/enums/app-icon.enum";

import Icon from "../components/common/Icon";

type IconNameType = AppIconSvgType;

interface SocialNetworksType {
  id: string;
  name: string;
  url: string;
  icon: IconNameType;
}

const useSocialNetworks = () => {
  const networks: SocialNetworksType[] = socialNetworks.map((network) => ({
    id: network.id,
    name: network.name,
    url: network.url,
    icon: network.icon as IconNameType,
  }));

  const socialNetworksList = networks.map((item) => (
    <li
      key={item.id}
      className="scale-100 hover:scale-125 transition-all duration-300 ease-in-out"
    >
      <a href={item.url} target="_blank" rel="noopener noreferrer">
        <Icon name={item.icon} />
      </a>
    </li>
  ));

  return { networks, socialNetworksList };
};

export default useSocialNetworks;
