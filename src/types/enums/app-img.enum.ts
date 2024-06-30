export const AppImgPrefix = "img";

export const AppImgBaseEnum = ["logo-white"] as const;

export const AppImgEnum = AppImgBaseEnum.map(
  (image) => `${AppImgPrefix}-${image}` as const
);

export type AppImgType = (typeof AppImgEnum)[number];
