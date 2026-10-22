import { parsePhoneNumberWithError, ParseError } from 'libphonenumber-js';

export function validatePhone(value: string): string | undefined {
  if (!value) return 'Обязательное поле';
  
  try {
    const phoneNumber = parsePhoneNumberWithError(value);
    if (!phoneNumber.isValid()) {
      return 'Некорректный номер телефона';
    }
    return undefined;
  } catch (e) {
    if ((e as ParseError).message.includes('INVALID_COUNTRY')) {
      return 'Неверный код страны';
    }
    return 'Некорректный номер телефона';
  }
}
