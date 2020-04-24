import { parsePhoneNumberFromString } from 'libphonenumber-js/max';

export const validPhone = (tel, country) => {
  const res = parsePhoneNumberFromString(tel, country);
  return res.isValid();
};

export const validEmail = email => {
  const rep = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
  return rep.test(email);
};
