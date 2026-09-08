export const AppIconSvgPrefix = 'svg';

export const AppIconSvg = {
  // Global
  ARROW_LEFT: 'svg-arrow-left',
  ARROW_RIGHT: 'svg-arrow-right',
  CHEVRON_DOWN: 'svg-chevron-down',
  CHEVRON_UP: 'svg-chevron-up',
  COPY: 'svg-copy',
  DEGREE: 'svg-degree',
  GLOBE: 'svg-globe',
  INSTAGRAM: 'svg-instagram',
  LINKEDIN: 'svg-linkedin',
  MAIL: 'svg-mail',
  MAIL_ROUNDED: 'svg-mail-rounded',
  MAP_PIN: 'svg-map-pin',
  MENU: 'svg-menu',
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

  // Centres d'intérêt
  BOOK: 'svg-book',
  DIGITAL_ART: 'svg-digital-art',
  GAMING: 'svg-gaming',

  // Compétences développement
  ANDROID_STUDIO: 'svg-android-studio',
  CSS: 'svg-css',
  DOCKER: 'svg-docker',
  EXPRESSJS: 'svg-expressjs',
  FIREBASE: 'svg-firebase',
  GIT: 'svg-git',
  GITHUB: 'svg-github',
  GOOGLE_CLOUD: 'svg-google-cloud',
  HTML: 'svg-html',
  JAVASCRIPT: 'svg-javascript',
  JEST: 'svg-jest',
  MUI: 'svg-mui',
  MYSQL: 'svg-mysql',
  NESTJS: 'svg-nestjs',
  NODEJS: 'svg-nodejs',
  POSTMAN: 'svg-postman',
  REACT: 'svg-react',
  REDIS: 'svg-redis',
  REDUX: 'svg-redux',
  TAILWIND_CSS: 'svg-tailwindcss',
  TYPESCRIPT: 'svg-typescript',
  TYPEORM: 'svg-typeorm',
  VS_CODE: 'svg-vscode',
  X_CODE: 'svg-xcode',
  ZOD: 'svg-zod',

  // Compétences design
  AFTER_EFFECTS: 'svg-after-effects',
  ANIMATE: 'svg-animate',
  CLIP_STUDIO_PAINT: 'svg-clip-studio-paint',
  FIGMA: 'svg-figma',
  FIGMA_FILLED: 'svg-figma-filled',
  ILLUSTRATOR: 'svg-illustrator',
  INDESIGN: 'svg-indesign',
  PHOTOSHOP: 'svg-photoshop',
  PREMIERE_PRO: 'svg-premiere-pro',
  XD: 'svg-xd',
} as const;

export type AppIconSvgType = (typeof AppIconSvg)[keyof typeof AppIconSvg];
