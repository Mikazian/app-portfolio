import type { ProfileType } from '@app-portfolio/shared';

export const formatAddress = (address: ProfileType['address']): string =>
  `${address.address}, ${address.postalCode} ${address.city}`;
