import {
  firstValidCharIndex,
  isWhitelistedSmallWord,
  isSentenceBoundary,
  formatLanguage,
} from './helpers';

const wordObjectsBuilder = ({ string, unformattedLanguage }) => {
  if (!string) return [];

  const { language, region } = formatLanguage(unformattedLanguage);
  var activeSentenceBoundary = true;
  const words = string.toLowerCase().split(' ');

  return words.map((word, index) => {
    // is directly after a word boundary or is the beginning of a quoted string
    const firstWordOfSentence = activeSentenceBoundary || word.slice(0, 1) === '"';

    activeSentenceBoundary = isSentenceBoundary(word) || index == words.length - 1;

    return {
      rawString: word,
      isWhitelisted: isWhitelistedSmallWord({ word, language, region }),
      firstValidCharIndex: firstValidCharIndex(word),
      activeSentenceBoundary,
      firstWordOfSentence,
    };
  });
};

export default wordObjectsBuilder;
