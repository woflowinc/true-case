import abbreviations from '../configs/abbreviations';
import { DEFAULT_LANGUAGE } from '../configs/constants';
import smallWords from '../configs/smallWords';
import wordBoundaryChars from '../configs/wordBoundaryChars';

const firstValidCharIndex = (word) => {
  const reg = new RegExp(/[\p{L}]/u);
  return word.search(reg);
};

const isWhitelistedSmallWord = ({ word, language, region }) => {
  const smallWordsList = smallWords[language] || smallWords[DEFAULT_LANGUAGE];
  return smallWordsList.indexOf(word) >= 0;
};

const isSentenceBoundary = ({ word, language }) => {
  // Does word end with a boundary char? (Sentence ending character)
  if (wordBoundaryChars.indexOf(word.slice(-1)) < 0) return false;

  // Is the boundary word actually just an abbreviation?
  // Ex: "12 oz. steak" - "oz." is not the end of the sentence
  const abbreviationsList = abbreviations[language] || abbreviations[DEFAULT_LANGUAGE];
  return abbreviationsList.indexOf(word) < 0;
};

const formatLanguage = (unformattedLanguage) => {
  const [language, region] = unformattedLanguage.toLowerCase().split('_');
  return { language, region };
};

const capitalizedWord = (wordObject) => {
  const chars = wordObject.value.split('');
  const index = wordObject.firstValidCharIndex;
  chars[index] = chars[index].toUpperCase();
  return chars.join('');
};

const isProperNoun = ({ word, trueCasing }) => {
  return trueCasing && word.toLowerCase() !== word;
};

export {
  firstValidCharIndex,
  isWhitelistedSmallWord,
  isSentenceBoundary,
  formatLanguage,
  capitalizedWord,
  isProperNoun,
};
