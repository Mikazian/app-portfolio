import { useEffect, useState } from "react";
import { useSocialNetworks } from "../../../hooks";

import Text from "../../common/Text";
import Divider from "../../common/Divider";
import Icon from "../../common/Icon";

/**
 * Composant des réseaux sociaux
 * @returns {JSX.Element}
 */
const SocialNetwork = (): JSX.Element => {
  const [isVertical, setIsVertical] = useState<boolean>(
    window.innerWidth <= 1024 ? false : true
  );

  const { networks } = useSocialNetworks();

  useEffect(() => {
    const handleChangeOrientation = () => {
      if (window.innerWidth <= 1024) {
        setIsVertical(false);
      } else {
        setIsVertical(true);
      }
    };

    window.addEventListener("resize", handleChangeOrientation);

    return () => {
      window.removeEventListener("resize", handleChangeOrientation);
    };
  }, []);

  return (
    <section className="flex flex-row justify-end items-center gap-4 lg:flex-col lg:fixed lg:bottom-0 lg:right-0 lg:mb-5 lg:mr-7 lg:w-[25px] relative z-20">
      <Text className="translate-y-0.5 lg:absolute lg:origin-left lg:rotate-90 lg:top-0 lg:left-0 uppercase text-sm lg:mb-6 lg:translate-x-3 lg:-translate-y-24 text-nowrap">
        Me suivre
      </Text>
      <Divider height="12" width="12" isVertical={isVertical} />
      <ul className="flex flex-row lg:flex-col gap-5">
        {networks.map((network) => (
          <li
            key={network.id}
            className="scale-100 hover:scale-125 transition-all duration-300 ease-in-out"
          >
            <a href={network.url} target="_blank" rel="noopener noreferrer">
              <Icon name={network.icon} color="var(--onbackground)" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SocialNetwork;
