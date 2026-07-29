import { forwardRef, useState, type ComponentPropsWithoutRef } from 'react';

interface TextAreaFieldProps extends Omit<ComponentPropsWithoutRef<'textarea'>, 'id'> {
  label: string;
  error?: string;
  maxLength?: number;
  additionalClass?: string;
}
/**
 * Composant TextAreaField avec label intégré, compteur de caractères et message d'erreur
 * Supporte React Hook Form via spread de register() : {...register('message')}
 * @param label - Texte du label
 * @param error - Message d'erreur à afficher
 * @param maxLength - Nombre maximum de caractères (défaut: 2000)
 * @param additionalClass - Style Tailwind supplémentaire
 * @param props - Props natives textarea (name, placeholder, onChange, onBlur, ref...)
 */
const TextAreaField = forwardRef<HTMLTextAreaElement, TextAreaFieldProps>(
  (
    {
      label,
      error,
      maxLength = 2000,
      additionalClass,
      className,
      onChange,
      rows = 4,
      ...textareaProps
    },
    ref,
  ) => {
    const [charCount, setCharCount] = useState(0);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCharCount(e.target.value.length);
      onChange?.(e);
    };

    return (
      <div className="flex flex-col gap-1">
        <label htmlFor={textareaProps.name} className="font-title-bold tracking-wider">
          {label}
        </label>

        <div className="relative">
          <textarea
            id={textareaProps.name}
            ref={ref}
            rows={rows}
            maxLength={maxLength}
            onChange={handleChange}
            {...textareaProps}
            className={`w-full bg-underground border border-divider text-text-primary px-4 py-2 rounded-sm placeholder:text-text-secondary font-text-medium text-sm focus:outline-none focus:border-primary transition-colors duration-200 resize-none pb-6 ${additionalClass ?? ''} ${className ?? ''}`}
          />

          <span className="absolute -bottom-4 right-1 text-text-secondary text-xs pointer-events-none">
            {charCount}/{maxLength}
          </span>
        </div>

        {error && <p className="text-primary text-xs">{error}</p>}
      </div>
    );
  },
);

TextAreaField.displayName = 'TextAreaField';

export default TextAreaField;
