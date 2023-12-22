/** Returns the sentence without extra white spaces:
 * - Removes white spaces that are first or least characters.
 * - Replaces 2 or more white spaces between words with a single one.
 * @param {string} sentence - Sentence that will be cleared
 * */
export function removeExtraWhiteSpaces (sentence) {
  /** Search 1 or more white space globally:
   * - `\s`: matches `\s`, `\n` and `\t`
   * - `+`: 1 or more characters
   * - `/g`: won't stop at first match
   */
  const regExp = /\s+/g;

  return sentence.trim().replace(regExp, ' ');
}
