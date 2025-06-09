export const formatCardNumber = (value: string) => {
  return value
    .replace(/\D/g, '')
    .substring(0, 16)
    .replace(/(.{4})/g, '$1 ')
    .trim();
};

export const formatExpiry = (value: string) => {
  const raw = value.replace(/\D/g, '').substring(0, 4);
  const formatted =
    raw.length >= 3 ? `${raw.substring(0, 2)}/${raw.substring(2)}` : raw;

  return formatted;
};

export const formatCvc = (value: string) => {
  return value.replace(/\D/g, '').substring(0, 4);
};

export const validateCvc = (value: string) => {
  return value.length === 3;
};

export const validateLuhn = (num: string): boolean => {
  const cleanNum = num.replace(/\D/g, '');

  if (cleanNum.length < 13 || cleanNum.length > 19) {
    return false;
  }

  let sum = 0;
  let double = false;

  for (let i = cleanNum.length - 1; i >= 0; i--) {
    let digit = parseInt(cleanNum.charAt(i), 10);

    if (double) {
      digit *= 2;
      if (digit > 9) {
        digit = (digit % 10) + Math.floor(digit / 10);
      }
    }

    sum += digit;
    double = !double;
  }

  return sum % 10 === 0;
};

export const validateDate = (date: string): boolean => {
  const parts = date.match(/^(\d{2})\/(\d{2,4})$/);

  if (!parts) {
    return false;
  }

  const month = parseInt(parts[1], 10);
  let year = parseInt(parts[2], 10);

  if (year < 100) {
    const currentYear = new Date().getFullYear();
    const currentCentury = Math.floor(currentYear / 100) * 100;

    year = currentCentury + year;

    if (year < currentYear - 100) {
      year += 100;
    }
  }

  if (month < 1 || month > 12) {
    return false;
  }

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentFullYear = currentDate.getFullYear();

  if (year < currentFullYear) {
    return false;
  }

  if (year === currentFullYear && month < currentMonth) {
    return false;
  }

  return true;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function resetStringData<T extends Record<string, any>>(
  obj: T,
  newVal: string,
): T {
  const newObj = Object.fromEntries(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Object.entries(obj).map(([key, _]) => [key, newVal]),
  ) as T;

  return newObj;
}
