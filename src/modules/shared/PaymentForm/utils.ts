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
