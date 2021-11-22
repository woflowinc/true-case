import { formatLanguage, capitalizeCharAt } from '../utils/helpers';
import wordObjectsBuilder from '../utils/wordObjectsBuilder';

const sentenceCase = ({ string, language: unformattedLanguage }) => {
  if (!string) return '';

  const { language, region } = formatLanguage(unformattedLanguage);
  const wordObjects = wordObjectsBuilder({ string: string.toLowerCase(), language, region });

  return wordObjects
    .map((wordObject) => {
      if (wordObject.firstWordOfSentence && wordObject.firstValidCharIndex >= 0) {
        return capitalizeCharAt({
          string: wordObject.rawString,
          index: wordObject.firstValidCharIndex,
        });
      }

      return wordObject.rawString;
    })
    .join(' ');
};

export default sentenceCase;
