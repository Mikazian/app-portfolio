export const AppIconSvgPrefix = "svg";

export const AppIconSvgBaseEnum = [
  "mail",
  "phone",
  "copy",
  "sun",
  "moon",
  "degree",
  "arrow",
  "linkedin",
  "github",
  "instagram",
  "react",
  "typescript",
  "animation",
  "api",
  "code",
  "database",
  "ui-ux",
  "responsive",
] as const;

export const AppIconSvgEnum = AppIconSvgBaseEnum.map(
  (icon) => `${AppIconSvgPrefix}-${icon}` as const
);

export type AppIconSvgType = (typeof AppIconSvgEnum)[number];
