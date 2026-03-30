export const isEmpty = (value: number | string | object) => {
  if (value === null) return true;
  if (typeof value === 'undefined') return true;
  if (typeof value === 'string' && value === '') return true;
  if (Array.isArray(value) && value.length < 1) return true;
  if (
    typeof value === 'object' &&
    value.constructor.name === 'Object' &&
    Object.keys(value).length <= 0
  ) {
    return true;
  }
  return false;
};
