const formatLanguage = (unformattedLanguage) => {
  const [language, region] = unformattedLanguage.toLowerCase().split('_');
  return { language, region };
};

const capitalizeCharAt = ({ string, index }) => {
  const chars = string.split('');
  chars[index] = chars[index].toUpperCase();
  return chars.join('');
};

export { formatLanguage, capitalizeCharAt };
