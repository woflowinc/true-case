import { DEFAULT_LANGUAGE } from '../configs/constants';
import argumentValidator from '../utils/argumentValidator';
import wordObjectsBuilder from '../utils/wordObjectsBuilder';

const trueCase = (
  string,
  { language: unformattedLanguage = DEFAULT_LANGUAGE, trueCasing = false, properNouns = [] } = {}
) => {
  argumentValidator({ unformattedLanguage, trueCasing, properNouns });

  const wordObjects = wordObjectsBuilder({ string, unformattedLanguage, trueCasing, properNouns });

  return wordObjects.map((wordObject) => wordObject.value).join(' ');
};

export default trueCase;
