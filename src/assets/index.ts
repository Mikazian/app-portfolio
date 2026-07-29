import {
  designIcons,
  developmentIcons,
  globalIcons,
  hobbyIcons,
  images,
  languageIcons,
  socialNetworkIcons,
  specialityIcons,
} from '../components/common/icon/svg-icon-set';

export const assets = {
  images,
  icons: {
    ...globalIcons,
    ...socialNetworkIcons,
    ...languageIcons,
    ...developmentIcons,
    ...designIcons,
    ...specialityIcons,
    ...hobbyIcons,
  },
};
