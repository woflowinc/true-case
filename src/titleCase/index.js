import { formatLanguage, capitalizeCharAt } from '../utils/helpers';
import wordObjectsBuilder from '../utils/wordObjectsBuilder';

const titleCase = ({ string, language: unformattedLanguage }) => {
  if (!string) return '';

  const { language, region } = formatLanguage(unformattedLanguage);
  const wordObjects = wordObjectsBuilder({ string: string.toLowerCase(), language, region });

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
