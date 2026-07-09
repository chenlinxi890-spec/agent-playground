/**
 * Detects whether a string contains the Kangxi Radical Dotted Tent character (U+2F68).
 * @param input - The string to check.
 * @returns true if the input contains the Kangxi Radical Dotted Tent character.
 */
export function isKangxiRadicalDottedTentPresent(input: string): boolean {
  return input.includes('\u2F68');
}
