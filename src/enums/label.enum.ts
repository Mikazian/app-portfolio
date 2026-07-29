export enum AppLabel {
  IOS = 'iOS',
  ANDROID = 'Android',
  REACT = 'React',
  REACT_NATIVE = 'React Native',
  REDUX = 'Redux',
  NEST_JS = 'Nest JS',
  JAVASCRIPT = 'JavaScript',
  EXPRESS_JS = 'Express JS',
  MYSQL = 'MySQL',
  DOCKER = 'Docker',
  API = 'API',
  NODE_JS = 'Node JS',
  PHP = 'PHP',
  SYMFONY = 'Symfony',
  HTML = 'HTML',
  CSS = 'CSS',
  SCSS = 'SCSS',
  BOOTSTRAP = 'Bootstrap',
  TAILWIND_CSS = 'Tailwind CSS',
  PHOTOSHOP = 'Photoshop',
  ILLUSTRATOR = 'Illustrator',
  INDESIGN = 'InDesign',
  AFTER_EFFECTS = 'After Effects',
  THREE_DS_MAX = '3DS Max',
  FIGMA = 'Figma',
}

export type LabelType = AppLabel;

export type LabelWithColor = {
  label: LabelType;
  color: string;
};

export const labels: LabelWithColor[] = [
  { label: AppLabel.IOS, color: '#aaaaaa' },
  { label: AppLabel.ANDROID, color: '#a4c639' },
  { label: AppLabel.REACT, color: '#61dbfb' },
  { label: AppLabel.REACT_NATIVE, color: '#61dbfb' },
  { label: AppLabel.REDUX, color: '#764ABC' },
  { label: AppLabel.NEST_JS, color: '#EA2845' },
  { label: AppLabel.JAVASCRIPT, color: '#d4b62f' },
  { label: AppLabel.EXPRESS_JS, color: '#aaaaaa' },
  { label: AppLabel.MYSQL, color: '#00678C' },
  { label: AppLabel.DOCKER, color: '#2496ed' },
  { label: AppLabel.API, color: '#aaaaaa' },
  { label: AppLabel.NODE_JS, color: '#68A063' },
  { label: AppLabel.PHP, color: '#8892be' },
  { label: AppLabel.SYMFONY, color: '#aaaaaa' },
  { label: AppLabel.HTML, color: '#e34c26' },
  { label: AppLabel.CSS, color: '#264de4' },
  { label: AppLabel.SCSS, color: '#c6538c' },
  { label: AppLabel.BOOTSTRAP, color: '#7952b3' },
  { label: AppLabel.TAILWIND_CSS, color: '#06b6d4' },
  { label: AppLabel.PHOTOSHOP, color: '#56a1d8' },
  { label: AppLabel.ILLUSTRATOR, color: '#f89a1c' },
  { label: AppLabel.INDESIGN, color: '#ee3a68' },
  { label: AppLabel.AFTER_EFFECTS, color: '#9696ca' },
  { label: AppLabel.THREE_DS_MAX, color: '#09a1a1' },
  { label: AppLabel.FIGMA, color: '#f24e1e' },
];
