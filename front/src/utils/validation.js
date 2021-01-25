export const isValidTextField = (value) => !/[0-9]/.test(value);

export const isValidPhoneNumber = (value) =>
  value === "" || /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/g.test(value);

export const isValidEmail = (value) =>
  value === "" || /\S+@\S+\.\S+/.test(value);
