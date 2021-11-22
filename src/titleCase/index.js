import { capitalizeCharAt, shouldTitleCaseCapitalize } from '../utils/helpers';
import wordObjectsBuilder from '../utils/wordObjectsBuilder';

const titleCase = ({ string, language: unformattedLanguage }) => {
  const wordObjects = wordObjectsBuilder({ string, unformattedLanguage });

  return wordObjects
    .map((wordObject) => {
      if (shouldTitleCaseCapitalize(wordObject))
        return capitalizeCharAt({
          string: wordObject.rawString,
          index: wordObject.firstValidCharIndex,
        });

      return wordObject.rawString;
    })
    .join(' ');
};

export default titleCase;
