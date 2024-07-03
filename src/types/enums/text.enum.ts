const TextBaseEnum = ["p", "h1", "h2", "h3", "h4", "h5", "h6", "span"] as const;

export type TextType = (typeof TextBaseEnum)[number];
