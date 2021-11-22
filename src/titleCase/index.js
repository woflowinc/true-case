import wordObjectsBuilder from '../utils/wordObjectsBuilder';

const capitalizeCharAt = ({ string, index }) => {
  const chars = string.split('');
  chars[index] = chars[index].toUpperCase();
  return chars.join('');
};

const formatLanguage = (unformattedLanguage) => {
  const [language, region] = unformattedLanguage.toLowerCase().split('_');
  return { language, region };
};

const titleCase = ({ string, language: unformattedLanguage }) => {
  const { language, region } = formatLanguage(unformattedLanguage);
  const wordObjects = wordObjectsBuilder({ string: string.toLowerCase(), language, region });
  console.log('wordObjects', wordObjects);

  return wordObjects
    .map((wordObject) => {
      if (
        //   there is not char to capitalize
        wordObject.firstValidCharIndex < 0 ||
        // It is not the first or last word of a sentence and is not a whitelisted word
        (!wordObject.activeSentenceBoundary &&
          wordObject.isWhitelisted &&
          !wordObject.firstWordOfSentence)
      )
        return wordObject.rawString;

      return capitalizeCharAt({
        string: wordObject.rawString,
        index: wordObject.firstValidCharIndex,
      });
    })
    .join(' ');
};

export default titleCase;
