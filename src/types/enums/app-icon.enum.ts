export const AppIconSvgPrefix = "svg";

export const AppIconSvgBaseEnum = ["react", "typescript"] as const;

export const AppIconSvgEnum = AppIconSvgBaseEnum.map(
  (icon) => `${AppIconSvgPrefix}-${icon}` as const
);

export type AppIconSvgType = (typeof AppIconSvgEnum)[number];
