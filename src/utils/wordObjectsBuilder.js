import smallWords from '../configs/smallWords';

const WORD_BOUNDARY_CHARS = ['.', '!', '?'];
const DEFAULT_LANGUAGE = 'en';

const firstValidCharIndex = (string) => {
  const reg = new RegExp(/[\p{L}]/u);
  return string.search(reg);
};

const isWhitelisted = ({ string, language, region }) => {
  const smallWordsList = smallWords[language] || smallWords[DEFAULT_LANGUAGE];
  return smallWordsList.indexOf(string) >= 0;
};

const wordObjectsBuilder = ({ string, language, region }) => {
  var activeSentenceBoundary = true;
  const words = string.split(' ');

  return words.map((word, index) => {
    const firstWordOfSentence = activeSentenceBoundary;
    activeSentenceBoundary =
      WORD_BOUNDARY_CHARS.indexOf(word.slice(-1)) >= 0 || index == words.length - 1;

    return {
      rawString: word,
      isWhitelisted: isWhitelisted({ string: word, language, region }),
      firstValidCharIndex: firstValidCharIndex(word),
      activeSentenceBoundary,
      firstWordOfSentence,
    };
  });
};

export default wordObjectsBuilder;
