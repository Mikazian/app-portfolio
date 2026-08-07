import { assets } from '../../assets';
import { AppImgType } from '@app-portfolio/enums';

interface ImageProps {
  src: AppImgType;
  alt?: string;
  className?: string;
}

/**
 * Composant Image
 * @param src - Nom de l'image
 * @param alt - Texte alternatif de l'image
 * @param className - Style Tailwind CSS
 * @returns {JSX.Element}
 */
const Image = ({ src, alt, className }: ImageProps): React.JSX.Element => {
  const source = assets.images[src];

  return <img src={source} className={className} alt={alt} />;
};

export default Image;
