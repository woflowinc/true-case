import { DEFAULT_LANGUAGE } from '../configs/constants';
import { shouldTitleCaseCapitalize } from '../utils/casingConditions';
import { capitalizedWord } from '../utils/helpers';
import wordObjectsBuilder from '../utils/wordObjectsBuilder';

const titleCase = (
  string,
  { language: unformattedLanguage = DEFAULT_LANGUAGE, trueCasing = false } = {}
) => {
  const wordObjects = wordObjectsBuilder({ string, unformattedLanguage, trueCasing });

  return wordObjects
    .map((wordObject) => {
      return shouldTitleCaseCapitalize(wordObject) ? capitalizedWord(wordObject) : wordObject.value;
    })
    .join(' ');
};

export default titleCase;
