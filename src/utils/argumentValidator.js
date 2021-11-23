import smallWords from '../configs/smallWords';

const argumentValidator = ({ unformattedLanguage, trueCasing, properNouns }) => {
  const matchingLanguage = Object.keys(smallWords).find((lang) => {
    return unformattedLanguage.match(new RegExp(`^${lang}_?`, 'i'));
  });

  if (!matchingLanguage) {
    console.warn(`${unformattedLanguage} is not a supported language`);
  }

  if (!(properNouns instanceof Array)) {
    throw `Argument for properNouns is not an Array`;
  }

  const invalidProperNouns = properNouns.filter((properNoun) => {
    return typeof properNoun !== 'string';
  });

  if (invalidProperNouns.length > 0) {
    throw `Invalid proper noun types: ${invalidProperNouns}`;
  }

  if (typeof trueCasing !== 'boolean') {
    throw 'trueCasing should be a boolean';
  }
};

export default argumentValidator;
