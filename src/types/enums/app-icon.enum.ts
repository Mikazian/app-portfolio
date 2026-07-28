export const AppIconSvgPrefix = 'svg';

export const AppIconSvgBaseEnum = [
  // Global
  'arrow-left',
  'arrow-right',
  'chevron-up',
  'copy',
  'degree',
  'instagram',
  'linkedin',
  'mail',
  'moon',
  'phone',
  'sun',

  // Langues
  'circle-flags-en',
  'circle-flags-fr',

  // Spécialités
  'animation',
  'api',
  'code',
  'database',
  'mobile',
  'responsive',
  'ui-ux',

  // Compétences développement
  'css',
  'docker',
  'expressjs',
  'firebase',
  'github',
  'html',
  'javascript',
  'jest',
  'mysql',
  'nestjs',
  'nodejs',
  'react',
  'redux',
  'tailwindcss',
  'typescript',

  // Compétences design
  'after-effects',
  'animate',
  'clip-studio-paint',
  'figma',
  'illustrator',
  'indesign',
  'photoshop',
  'premiere-pro',
  'xd',
] as const;

export const AppIconSvgEnum = AppIconSvgBaseEnum.map(
  (icon) => `${AppIconSvgPrefix}-${icon}` as const,
);

export type AppIconSvgType = (typeof AppIconSvgEnum)[number];
