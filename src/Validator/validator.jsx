const validateRules = {
  isRegular: (value) => {
    return !Boolean(value.trim());
  },
  isEmailFormat: (value) => {
    return !/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/.test(
      value
    );
  },
  isPasswordForm: (value) => {
    return !/^[\w_]*$/.test(value);
  },
  isAsPassword: (value, _, password) => {
    return value !== password;
  },
};

export const validator = (values, config) => {
  const error = {};

  for (const name in values) {
    const validationRules = config[name];
    for (const rule in validationRules) {
      const { message, value, ref } = validationRules[rule];
      const validate = validateRules[rule];

      const hasError = validate && validate(values[name], value, values[ref]);
      if (hasError) {
        error[name] = message;
      }
    }
  }
  return error;
};
