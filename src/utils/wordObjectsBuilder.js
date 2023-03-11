import {
  firstValidCharIndex,
  isWhitelistedSmallWord,
  isSentenceBoundary,
  formatLanguage,
  casedValue,
} from './helpers';

const wordObjectsBuilder = ({ string, unformattedLanguage, trueCasing, properNouns }) => {
  if (!string) return [];

  const { language, region } = formatLanguage(unformattedLanguage);
  var activeSentenceBoundary = true;
  const words = string.split(/(?=[\n])| /);

  return words.map((word, index) => {
    // Maintain raw casing if proper noun, otherwise lowercase it
    const value = casedValue({ word, trueCasing, properNouns });

    // is directly after a word boundary or is the beginning of a quoted string
    const firstWordOfSentence = activeSentenceBoundary || word.slice(0, 1) === '"';

    activeSentenceBoundary = isSentenceBoundary({ word, language }) || index == words.length - 1;

    return {
      value,
      isWhitelisted: isWhitelistedSmallWord({ word, language, region }),
      firstValidCharIndex: firstValidCharIndex(word),
      activeSentenceBoundary,
      firstWordOfSentence,
    };
  });
};

export default wordObjectsBuilder;
