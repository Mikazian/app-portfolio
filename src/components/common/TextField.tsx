import { forwardRef, type ComponentPropsWithoutRef } from 'react';

interface TextFieldProps extends Omit<ComponentPropsWithoutRef<'input'>, 'id'> {
  label: string;
  error?: string;
  additionalClass?: string;
}
/**
 * Composant TextField avec label intégré et message d'erreur
 * Supporte React Hook Form via spread de register() : {...register('name')}
 * @param label - Texte du label
 * @param error - Message d'erreur à afficher
 * @param additionalClass - Style Tailwind supplémentaire
 * @param props - Props natives input (name, type, placeholder, onChange, onBlur, ref...)
 */
const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, error, additionalClass, className, ...inputProps }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        <label htmlFor={inputProps.name} className="text-md font-title-bold tracking-wider">
          {label}
        </label>

        <input
          id={inputProps.name}
          ref={ref}
          {...inputProps}
          className={`h-12 w-full bg-underground border border-divider text-text-primary px-4 py-2 rounded-sm placeholder:text-text-secondary font-text-medium text-sm focus:outline-none focus:border-primary transition-colors duration-200 ${additionalClass ?? ''} ${className ?? ''}`}
        />

        {error && <p className="text-primary text-xs mt-2">{error}</p>}
      </div>
    );
  },
);

TextField.displayName = 'TextField';

export default TextField;
