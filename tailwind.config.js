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
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        underground: "var(--underground)",
        onbackground: "var(--onbackground)",
        divider: "var(--divider)",
        dividerlight: "var(--dividerlight)",
        light: "var(--light)",
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
