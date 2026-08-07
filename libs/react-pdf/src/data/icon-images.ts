import type { AppIconSvgType } from '@app-portfolio/enums';
// Les icônes sont des PNG car @react-pdf/renderer ne décode pas les fichiers SVG.
import AndroidStudioIcon from '../assets/images/android-studio.png';
import BookIcon from '../assets/images/book.png';
import CodeIcon from '../assets/images/code.png';
import CssIcon from '../assets/images/css.png';
import DegreeIcon from '../assets/images/degree.png';
import DigitalArtIcon from '../assets/images/digital-art.png';
import DockerIcon from '../assets/images/docker.png';
import FigmaIcon from '../assets/images/figma.png';
import FirebaseIcon from '../assets/images/firebase.png';
import GamingIcon from '../assets/images/gaming.png';
import GithubIcon from '../assets/images/github.png';
import GitIcon from '../assets/images/git.png';
import GlobeIcon from '../assets/images/globe.png';
import GoogleCloudIcon from '../assets/images/google-cloud.png';
import HtmlIcon from '../assets/images/html.png';
import IllustratorIcon from '../assets/images/illustrator.png';
import IndesignIcon from '../assets/images/indesign.png';
import JavascriptIcon from '../assets/images/javascript.png';
import LinkedinIcon from '../assets/images/linkedin.png';
import MailIcon from '../assets/images/mail.png';
import MapPinIcon from '../assets/images/map-pin.png';
import MysqlIcon from '../assets/images/mysql.png';
import MuiIcon from '../assets/images/mui.png';
import NestjsIcon from '../assets/images/nestjs.png';
import NodejsIcon from '../assets/images/nodejs.png';
import PhoneIcon from '../assets/images/phone.png';
import PhotoshopIcon from '../assets/images/photoshop.png';
import PostmanIcon from '../assets/images/postman.png';
import ReactIcon from '../assets/images/react.png';
import RedisIcon from '../assets/images/redis.png';
import TailwindcssIcon from '../assets/images/tailwindcss.png';
import TypeormIcon from '../assets/images/typeorm.png';
import TypescriptIcon from '../assets/images/typescript.png';
import VscodeIcon from '../assets/images/vscode.png';
import XcodeIcon from '../assets/images/xcode.png';
import ZodIcon from '../assets/images/zod.png';

/**
 * Correspondance entre les icônes (AppIconSvgType) et leurs assets PNG.
 * Les icônes mono sont teintées de la couleur avec laquelle elles sont
 * rendues dans le CV (colors.primary) ; les logos multi-couleurs conservent
 * leurs couleurs de marque. Les icônes absentes de la map ne sont pas rendues.
 */
export const iconImages: Partial<Record<AppIconSvgType, string>> = {
  'svg-android-studio': AndroidStudioIcon,
  'svg-book': BookIcon,
  'svg-code': CodeIcon,
  'svg-css': CssIcon,
  'svg-degree': DegreeIcon,
  'svg-digital-art': DigitalArtIcon,
  'svg-docker': DockerIcon,
  'svg-figma': FigmaIcon,
  'svg-firebase': FirebaseIcon,
  'svg-gaming': GamingIcon,
  'svg-git': GitIcon,
  'svg-github': GithubIcon,
  'svg-globe': GlobeIcon,
  'svg-google-cloud': GoogleCloudIcon,
  'svg-html': HtmlIcon,
  'svg-illustrator': IllustratorIcon,
  'svg-indesign': IndesignIcon,
  'svg-javascript': JavascriptIcon,
  'svg-linkedin': LinkedinIcon,
  'svg-mail': MailIcon,
  'svg-map-pin': MapPinIcon,
  'svg-mysql': MysqlIcon,
  'svg-mui': MuiIcon,
  'svg-nestjs': NestjsIcon,
  'svg-nodejs': NodejsIcon,
  'svg-phone': PhoneIcon,
  'svg-photoshop': PhotoshopIcon,
  'svg-postman': PostmanIcon,
  'svg-react': ReactIcon,
  'svg-redis': RedisIcon,
  'svg-tailwindcss': TailwindcssIcon,
  'svg-typeorm': TypeormIcon,
  'svg-typescript': TypescriptIcon,
  'svg-vscode': VscodeIcon,
  'svg-xcode': XcodeIcon,
  'svg-zod': ZodIcon,
};
