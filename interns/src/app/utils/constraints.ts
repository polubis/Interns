export const constraints: { [key: string]: RegExp } = {
  text: /^[0-9a-zżźćńółęąśŻŹĆĄŚĘŁÓŃ\s-]+$/i,
  phone: /^(?=.*\d)[\d ]+$/,
  number: /^[0-9]*$/gm,
  skype: /[a-zA-Z][a-zA-Z0-9\.,\-_]{5,31}/
};
