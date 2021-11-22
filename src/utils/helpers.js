import smallWords from '../configs/smallWords';

const WORD_BOUNDARY_CHARS = ['.', '!', '?'];
const DEFAULT_LANGUAGE = 'en';
const WHITELISTED_HARD_STOP_WORDS = ['oz.'];

const firstValidCharIndex = (word) => {
  const reg = new RegExp(/[\p{L}]/u);
  return word.search(reg);
};

const isWhitelistedSmallWord = ({ word, language, region }) => {
  const smallWordsList = smallWords[language] || smallWords[DEFAULT_LANGUAGE];
  return smallWordsList.indexOf(word) >= 0;
};

const isSentenceBoundary = (word) => {
  if (WORD_BOUNDARY_CHARS.indexOf(word.slice(-1)) < 0) return false;
  return WHITELISTED_HARD_STOP_WORDS.indexOf(word) < 0;
};

const formatLanguage = (unformattedLanguage) => {
  const [language, region] = unformattedLanguage.toLowerCase().split('_');
  return { language, region };
};

const shouldTitleCaseCapitalize = (wordObject) => {
  // no char available to capitalize
  if (wordObject.firstValidCharIndex < 0) return false;

  // All words (including whitelisted words) are capitalized at the end of a sentence
  if (wordObject.activeSentenceBoundary) return true;

  // Capitalize beginning of each sentence
  if (wordObject.firstWordOfSentence) return true;

  // Do not capitalize whitelisted words
  if (wordObject.isWhitelisted) return false;

  // All other words should be capitalized
  return true;
};

const shouldSentenceCaseCapitalize = (wordObject) => {
  // no char available to capitalize
  if (wordObject.firstValidCharIndex < 0) return false;

  // Capitalize beginning of each sentence
  if (wordObject.firstWordOfSentence) return true;

  // All other word should be lowercase
  return false;
};

const capitalizeCharAt = ({ string, index }) => {
  const chars = string.split('');
  chars[index] = chars[index].toUpperCase();
  return chars.join('');
};

export {
  firstValidCharIndex,
  isWhitelistedSmallWord,
  isSentenceBoundary,
  formatLanguage,
  capitalizeCharAt,
  shouldTitleCaseCapitalize,
  shouldSentenceCaseCapitalize,
};
