import { capitalizeCharAt, shouldSentenceCaseCapitalize } from '../utils/helpers';
import wordObjectsBuilder from '../utils/wordObjectsBuilder';

const sentenceCase = ({ string, language: unformattedLanguage }) => {
  const wordObjects = wordObjectsBuilder({ string, unformattedLanguage });

  return wordObjects
    .map((wordObject) => {
      if (shouldSentenceCaseCapitalize(wordObject)) {
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
