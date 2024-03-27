export function isEmail(value) {
  return value.includes('@');
}

export function isPassword(value) {
  return value.includes('@');
}

export function isNotEmpty(value) {
  return value.trim() !== '';
}

export function hasMinLength(value, minLength) {
  return value.length >= minLength;
}

export function hasMaxLength(value, maxLength) {
  return value.length <= maxLength;
}

export function isEqualsToOtherValue(value, otherValue) {
  return value === otherValue;
}