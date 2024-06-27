export const AppIconSvgPrefix = "svg";

export const AppIconSvgBaseEnum = [
  "mail",
  "phone",
  "copy",
  "linkedin",
  "github",
  "instagram",
  "react",
  "typescript",
] as const;

export const AppIconSvgEnum = AppIconSvgBaseEnum.map(
  (icon) => `${AppIconSvgPrefix}-${icon}` as const
);

export type AppIconSvgType = (typeof AppIconSvgEnum)[number];
