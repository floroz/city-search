export function validateInput(str) {
  /**
   * Only a-z and A-Z characters are allowed
   */
  if (/^[a-zA-Z]+$/.test(str)) {
    return true;
  } else {
    return false;
  }
}
