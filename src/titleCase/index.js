import { shouldTitleCaseCapitalize } from '../utils/casingConditions';
import { capitalizedWord } from '../utils/helpers';
import wordObjectsBuilder from '../utils/wordObjectsBuilder';

const titleCase = ({ string, language: unformattedLanguage }) => {
  const wordObjects = wordObjectsBuilder({ string, unformattedLanguage });

  return wordObjects
    .map((wordObject) => {
      return shouldTitleCaseCapitalize(wordObject)
        ? capitalizedWord(wordObject)
        : wordObject.rawString;
    })
    .join(' ');
};

export default titleCase;
