import theme from "./src/style/index.ts";

/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    {
      pattern: /^h-/,
    },
    {
      pattern: /^w-/,
    },
    {
      pattern: /^bg-/,
    },
  ],
  theme: {
    extend: {
      colors: {
        primary: theme.colors.primary,
        secondary: theme.colors.secondary,
        background: theme.colors.background,
        foreground: theme.colors.foreground,
        underground: theme.colors.underground,
        onbackground: theme.colors.onbackground,
        border: theme.colors.border,
        borderlight: theme.colors.borderlight,
        light: theme.colors.light,
      },
      fontSize: {
        xss: "0.65rem",
      },
      transitionProperty: {
        height: "height",
      },
    },
    fontFamily: {
      "title-black": ["NeuePlak-NarrowBlack"],
      "title-bold": ["NeuePlak-NarrowBold"],
      "text-bold": ["LaguSans-Bold"],
      "text-medium": ["LaguSans-Medium"],
    },
  },
  plugins: [],
};
