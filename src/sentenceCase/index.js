import { shouldSentenceCaseCapitalize } from '../utils/casingConditions';
import { capitalizedWord } from '../utils/helpers';
import wordObjectsBuilder from '../utils/wordObjectsBuilder';

const sentenceCase = ({ string, language: unformattedLanguage }) => {
  const wordObjects = wordObjectsBuilder({ string, unformattedLanguage });

  return wordObjects
    .map((wordObject) => {
      return shouldSentenceCaseCapitalize(wordObject)
        ? capitalizedWord(wordObject)
        : wordObject.rawString;
    })
    .join(' ');
};

export default sentenceCase;
