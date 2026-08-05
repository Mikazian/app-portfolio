export const AppImgPrefix = 'img';

export const AppImg = {
  LOGO_WHITE: 'img-logo-white',
  LOGO_BLACK: 'img-logo-black',
  PRIMA: 'img-prima',
  WILD: 'img-wild',
  ARSONVAL: 'img-arsonval',
  LISAA: 'img-lisaa',
  PIAZY: 'img-piazy',
  MA_STATION: 'img-ma-station',
  INOVIN: 'img-inovin',
  JEANNETTE: 'img-jeannette',
  GROOT: 'img-groot',
  TINDEV: 'img-tindev',
  GAMEPULSE: 'img-gamepulse',
} as const;

export type AppImgType = (typeof AppImg)[keyof typeof AppImg];
