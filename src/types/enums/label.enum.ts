export const LabelBaseEnum = [
  "iOS",
  "Android",
  "React",
  "React Native",
  "Redux",
  "Nest JS",
  "JavaScript",
  "Express JS",
  "MySQL",
  "Docker",
  "API",
  "Node JS",
  "PHP",
  "Symfony",
  "HTML",
  "CSS",
  "SCSS",
  "Bootstrap",
  "Tailwind CSS",
  "Photoshop",
  "Illustrator",
  "InDesign",
  "After Effects",
  "3DS Max",
  "Figma",
] as const;

export type LabelType = (typeof LabelBaseEnum)[number];

export type LabelWithColor = {
  label: LabelType;
  color: string;
};

export const labels: LabelWithColor[] = [
  { label: "iOS", color: "#aaaaaa" },
  { label: "Android", color: "#a4c639" },
  { label: "React", color: "#61dbfb" },
  { label: "React Native", color: "#61dbfb" },
  { label: "Redux", color: "#764ABC" },
  { label: "Nest JS", color: "#EA2845" },
  { label: "JavaScript", color: "#d4b62f" },
  { label: "Express JS", color: "#aaaaaa" },
  { label: "MySQL", color: "#00678C" },
  { label: "Docker", color: "#2496ed" },
  { label: "API", color: "#aaaaaa" },
  { label: "Node JS", color: "#68A063" },
  { label: "PHP", color: "#8892be" },
  { label: "Symfony", color: "#aaaaaa" },
  { label: "HTML", color: "#e34c26" },
  { label: "CSS", color: "#264de4" },
  { label: "SCSS", color: "#c6538c" },
  { label: "Bootstrap", color: "#7952b3" },
  { label: "Tailwind CSS", color: "#06b6d4" },
  { label: "Photoshop", color: "#56a1d8" },
  { label: "Illustrator", color: "#f89a1c" },
  { label: "InDesign", color: "#ee3a68" },
  { label: "After Effects", color: "#9696ca" },
  { label: "3DS Max", color: "#09a1a1" },
  { label: "Figma", color: "#f24e1e" },
];
