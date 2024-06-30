export const AppIconSvgPrefix = "svg";

export const AppIconSvgBaseEnum = [
  // Global
  "mail",
  "phone",
  "copy",
  "sun",
  "moon",
  "degree",
  "arrow-left",
  "arrow-right",
  "linkedin",
  "instagram",

  // Spécialités
  "animation",
  "api",
  "code",
  "database",
  "ui-ux",
  "responsive",

  // Compétences développement
  "react",
  "typescript",
  "redux",
  "nestjs",
  "docker",
  "github",
  "tailwindcss",
  "mysql",
  "expressjs",
  "javascript",
  "html",
  "css",
  "jest",

  // Compétences design
  "photoshop",
  "illustrator",
  "indesign",
  "after-effects",
  "animate",
  "premiere-pro",
  "xd",
  "clip-studio-paint",
  "figma",
] as const;

export const AppIconSvgEnum = AppIconSvgBaseEnum.map(
  (icon) => `${AppIconSvgPrefix}-${icon}` as const
);

export type AppIconSvgType = (typeof AppIconSvgEnum)[number];
