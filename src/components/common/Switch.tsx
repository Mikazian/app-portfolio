type SwitchSize = 'small' | 'medium' | 'large';

interface SwitchProps {
  checked: boolean;
  onChange: () => void;
  ariaLabel: string;
  size?: SwitchSize;
  knobIcon?: React.ReactNode;
}

// Toutes les dimensions (piste, bouton, déplacement) sont des multiples de 4px.
const SIZE_CLASSES: Record<SwitchSize, { track: string; knob: string; translate: string }> = {
  small: { track: 'w-8 h-5', knob: 'w-4 h-4', translate: 'translate-x-3' },
  medium: { track: 'w-11 h-6', knob: 'w-5 h-5', translate: 'translate-x-5' },
  large: { track: 'w-14 h-8', knob: 'w-7 h-7', translate: 'translate-x-6' },
} as const;

/**
 * Composant Switch (interrupteur) pour les réglages
 * @param checked - État actif/inactif
 * @param onChange - Action au clic
 * @param ariaLabel - Libellé d'accessibilité
 * @param size - Taille du switch (small | medium | large)
 * @returns {JSX.Element}
 */
const Switch = ({
  checked,
  onChange,
  ariaLabel,
  size = 'medium',
  knobIcon,
}: SwitchProps): React.JSX.Element => {
  const { track, knob, translate } = SIZE_CLASSES[size];

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={ariaLabel}
      onClick={onChange}
      className={`relative rounded-full transition-colors duration-300 cursor-pointer ${track} ${
        checked ? 'bg-primary' : 'bg-text-secondary/40'
      }`}
    >
      <span
        className={`absolute top-0.5 left-0.5 rounded-full bg-background shadow-md transition-transform duration-300 flex items-center justify-center ${knob} ${
          checked ? translate : ''
        }`}
      >
        {knobIcon}
      </span>
    </button>
  );
};

export default Switch;