// no char available to capitalize
const _noValidChars = (wordObject) => {
  return wordObject.firstValidCharIndex < 0;
};

// All words (including whitelisted words) are capitalized at the beginning of a sentence
const _firstWordOfSentence = (wordObject) => {
  return wordObject.firstWordOfSentence;
};

// All words (including whitelisted words) are capitalized at the end of a sentence
const _lastWordOfSentence = (wordObject) => {
  return wordObject.activeSentenceBoundary;
};

// Do not capitalize whitelisted words
const _whitelistedWord = (wordObject) => {
  return wordObject.isWhitelisted;
};

const shouldTitleCaseCapitalize = (wordObject) => {
  if (_noValidChars(wordObject)) return false;
  if (_lastWordOfSentence(wordObject)) return true;
  if (_firstWordOfSentence(wordObject)) return true;
  if (_whitelistedWord(wordObject)) return false;

  // All other words should be capitalized
  return true;
};

const shouldSentenceCaseCapitalize = (wordObject) => {
  if (_noValidChars(wordObject)) return false;
  if (_firstWordOfSentence(wordObject)) return true;

  // All other word should be lowercase
  return false;
};

export { shouldSentenceCaseCapitalize, shouldTitleCaseCapitalize };
