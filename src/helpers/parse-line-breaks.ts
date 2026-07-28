/**
 * Parse une chaîne contenant des retours à la ligne (\n)
 * et retourne un tableau de chaînes non vides.
 * @param text - Le texte à parser
 * @returns {string[]} Les lignes non vides
 */
export const parseLineBreaks = (text: string): string[] => {
  return text.split('\n').filter(Boolean);
};
