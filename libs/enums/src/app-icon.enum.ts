export const AppIconSvgPrefix = 'svg';

export const AppIconSvg = {
  // Global
  ARROW_LEFT: 'svg-arrow-left',
  ARROW_RIGHT: 'svg-arrow-right',
  CHEVRON_UP: 'svg-chevron-up',
  COPY: 'svg-copy',
  DEGREE: 'svg-degree',
  INSTAGRAM: 'svg-instagram',
  LINKEDIN: 'svg-linkedin',
  MAIL: 'svg-mail',
  MAIL_ROUNDED: 'svg-mail-rounded',
  MOON: 'svg-moon',
  PHONE: 'svg-phone',
  SUN: 'svg-sun',

  // Langues
  CIRCLE_FLAGS_EN: 'svg-circle-flags-en',
  CIRCLE_FLAGS_FR: 'svg-circle-flags-fr',

  // Spécialités
  ANIMATION: 'svg-animation',
  API: 'svg-api',
  CODE: 'svg-code',
  DATABASE: 'svg-database',
  MOBILE: 'svg-mobile',
  RESPONSIVE: 'svg-responsive',
  UI_UX: 'svg-ui-ux',

  // Compétences développement
  CSS: 'svg-css',
  DOCKER: 'svg-docker',
  EXPRESSJS: 'svg-expressjs',
  FIREBASE: 'svg-firebase',
  GITHUB: 'svg-github',
  HTML: 'svg-html',
  JAVASCRIPT: 'svg-javascript',
  JEST: 'svg-jest',
  MYSQL: 'svg-mysql',
  NESTJS: 'svg-nestjs',
  NODEJS: 'svg-nodejs',
  REACT: 'svg-react',
  REDUX: 'svg-redux',
  TAILWIND_CSS: 'svg-tailwindcss',
  TYPESCRIPT: 'svg-typescript',

  // Compétences design
  AFTER_EFFECTS: 'svg-after-effects',
  ANIMATE: 'svg-animate',
  CLIP_STUDIO_PAINT: 'svg-clip-studio-paint',
  FIGMA: 'svg-figma',
  ILLUSTRATOR: 'svg-illustrator',
  INDESIGN: 'svg-indesign',
  PHOTOSHOP: 'svg-photoshop',
  PREMIERE_PRO: 'svg-premiere-pro',
  XD: 'svg-xd',
} as const;

export type AppIconSvgType = (typeof AppIconSvg)[keyof typeof AppIconSvg];
