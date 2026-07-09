/**
 * Detects whether a string contains the Kangxi Radical Dog character (U+2F5B).
 * @param input - The string to check.
 * @returns true if the input contains the Kangxi Radical Dog character.
 */
export function isKangxiRadicalDogPresent(input: string): boolean {
  return input.includes('\u2F5B');
}