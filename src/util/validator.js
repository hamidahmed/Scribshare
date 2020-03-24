const VALIDATOR_TYPE_NONEMPTY = "NONEMPTY";
const VALIDATOR_TYPE_MINLENGTH = "MINLENGTH";
const VALIDATOR_TYPE_MAXLENGTH = "MAXLENGTH";
const VALIDATOR_TYPE_MINGROUPUSERS = "MINGROUPUSERS";
const VALIDATOR_TYPE_MAXGROUPUSERS = "MAXGROUPUSERS";
const VALIDATOR_TYPE_EMAIL = "EMAIL";
const VALIDATOR_TYPE_PASSWORD = "PASSWORD";
const VALIDATOR_TYPE_FILE = "FILE";

export const VALIDATOR_NONEMPTY = () => ({ type: VALIDATOR_TYPE_NONEMPTY });
export const VALIDATOR_FILE = () => ({ type: VALIDATOR_TYPE_FILE });
export const VALIDATOR_MINLENGTH = val => ({
  type: VALIDATOR_TYPE_MINLENGTH,
  val: val
});
export const VALIDATOR_MAXLENGTH = val => ({
  type: VALIDATOR_TYPE_MAXLENGTH,
  val: val
});
export const VALIDATOR_MINGROUPUSERS = val => ({
  type: VALIDATOR_TYPE_MINGROUPUSERS,
  val: val
});
export const VALIDATOR_MAXGROUPUSERS = val => ({
  type: VALIDATOR_TYPE_MAXGROUPUSERS,
  val: val
});
export const VALIDATOR_EMAIL = () => ({ type: VALIDATOR_TYPE_EMAIL });

export const validate = (value, validators) => {
  let isValid = true;
  for (const validator of validators) {
    if (validator.type === VALIDATOR_TYPE_NONEMPTY) {
      isValid = isValid && value.trim().length > 0;
    }
    if (validator.type === VALIDATOR_TYPE_MINLENGTH) {
      isValid = isValid && value.trim().length >= validator.val;
    }
    if (validator.type === VALIDATOR_TYPE_MAXLENGTH) {
      isValid = isValid && value.trim().length <= validator.val;
    }
    if (validator.type === VALIDATOR_TYPE_MINGROUPUSERS) {
      isValid = isValid && +value >= validator.val;
    }
    if (validator.type === VALIDATOR_TYPE_MAXGROUPUSERS) {
      isValid = isValid && +value <= validator.val;
    }
    if (validator.type === VALIDATOR_TYPE_EMAIL) {
      isValid = isValid && /^\S+@\S+\.\S+$/.test(value);
    }
  }
  return isValid;
};
