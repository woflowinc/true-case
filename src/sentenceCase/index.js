import { shouldSentenceCaseCapitalize } from '../utils/casingConditions';
import { capitalizedWord } from '../utils/helpers';
import wordObjectsBuilder from '../utils/wordObjectsBuilder';

const sentenceCase = ({ string, language: unformattedLanguage, trueCasing }) => {
  const wordObjects = wordObjectsBuilder({ string, unformattedLanguage, trueCasing });

  return wordObjects
    .map((wordObject) => {
      return shouldSentenceCaseCapitalize(wordObject)
        ? capitalizedWord(wordObject)
        : wordObject.value;
    })
    .join(' ');
};

export default sentenceCase;
