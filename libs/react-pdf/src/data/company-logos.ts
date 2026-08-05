import type { AppImgType } from '@app-portfolio/enums';
// Les assets sont en PNG car @react-pdf ne décode pas le webp.
import ArsonvalLogo from '../../../../src/assets/images/company/arsonval-32x32.png';
import LisaaLogo from '../../../../src/assets/images/company/lisaa-32x32.png';
import PiazyLogo from '../../../../src/assets/images/company/piazy-32x32.png';
import PrimaLogo from '../../../../src/assets/images/company/prima-32x32.png';
import WildLogo from '../../../../src/assets/images/company/wild-32x32.png';

/**
 * Correspondance entre les logos d'entreprise (AppImgType) et leurs assets.
 * Les logos inconnus sont absents de la map (source undefined → dot sans image).
 */
export const companyLogos: Partial<Record<AppImgType, string>> = {
  'img-arsonval': ArsonvalLogo,
  'img-lisaa': LisaaLogo,
  'img-piazy': PiazyLogo,
  'img-prima': PrimaLogo,
  'img-wild': WildLogo,
};
