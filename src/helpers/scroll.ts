export const NAVBAR_SELECTOR = '.navbar';
export const DEFAULT_NAVBAR_OFFSET = 96;
export const NAVBAR_OFFSET_GAP = 16;

export const getNavbarOffset = (): number => {
  const navbar = document.querySelector(NAVBAR_SELECTOR);
  return navbar ? navbar.getBoundingClientRect().height + NAVBAR_OFFSET_GAP : DEFAULT_NAVBAR_OFFSET;
};

export const scrollToElement = (el: HTMLElement): void => {
  const offset = getNavbarOffset();
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: 'smooth' });
};
