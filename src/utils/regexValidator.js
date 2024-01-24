const validation = (pattern, field) => {
  return pattern.test(field);
};

const returnValue = (isValid, message) => {
  if (!isValid) {
    return {
      isValid,
      message,
    };
  }

  return { isValid: true, message: "" };
};

export const isEmailValid = (email) => {
  const isValid = validation(
    /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/g,
    email
  );

  return returnValue(isValid, message);
};

export const isUsernameValid = (username) => {
  const isValid = validation(
    /^(?=.{3,20}$)(?![_.-])(?!.*[_.-]{2})[a-zA-Z0-9_-]+([^._-])$/g,
    username
  );

  message = `username must be 4-32 characters long, username must not have _,- or . at the beginning, username must not have __ or . or . or .. or .- or _- inside,username must not have _,- or . at the end`;

  return returnValue(isValid, message);
};

export const isPasswordValid = (password) => {
  const isValid = validation(
    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/g,
    password
  );

  const message = `password must contain 1 number (0-9),password must contain 1 uppercase letters, password must contain 1 lowercase letters, password must contain 1 non-alpha numeric number, password is 8-16 characters with no space`;

  return returnValue(isValid, message);
};
