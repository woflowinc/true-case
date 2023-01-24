import abbreviations from "../configs/abbreviations";
import { DEFAULT_LANGUAGE } from "../configs/constants";
import smallWords from "../configs/smallWords";
import wordBoundaryChars from "../configs/wordBoundaryChars";

const firstValidCharIndex = (word) => {
  const reg = new RegExp(/[\p{L}]/u);
  return word.search(reg);
};

const isWhitelistedSmallWord = ({ word, language, region }) => {
  const smallWordsList = smallWords[language] || smallWords[DEFAULT_LANGUAGE];
  const regexList = smallWordsList.map(
    (smallWord) => new RegExp(`^${smallWord}$`, "i")
  );
  return regexList.some((rx) => rx.test(word));
};

const isSentenceBoundary = ({ word, language }) => {
  // Does word end with a boundary char? (Sentence ending character)
  if (wordBoundaryChars.indexOf(word.slice(-1)) < 0) return false;

  // Is the boundary word actually just an abbreviation?
  // Ex: "12 oz. steak" - "oz." is not the end of the sentence
  const abbreviationsList =
    abbreviations[language] || abbreviations[DEFAULT_LANGUAGE];
  return abbreviationsList.indexOf(word) < 0;
};

const formatLanguage = (unformattedLanguage = DEFAULT_LANGUAGE) => {
  // supports case insensitive language formats such as: "en_us" and "en-us"
  const [language, region] = unformattedLanguage.toLowerCase().split(/[_-]/);
  return { language, region };
};

const capitalizedWord = (wordObject) => {
  const chars = wordObject.value.split("");
  const index = wordObject.firstValidCharIndex;
  chars[index] = chars[index].toUpperCase();
  return chars.join("");
};

const _properNounMatch = ({ word, properNouns }) => {
  const regexList = properNouns.map((properNoun) => {
    return {
      value: properNoun,
      reg: new RegExp(`^${properNoun.toLowerCase()}$`, "i"),
    };
  });

  return regexList.find((properNounData) => properNounData.reg.test(word));
};

const casedValue = ({ word, trueCasing, properNouns }) => {
  // return early if word matches supplied proper noun
  const properNounMatch = _properNounMatch({ word, properNouns });
  if (properNounMatch) {
    return properNounMatch.value;
  }

  // when trueCasing flagged, we consider any word proper noun when upper cased chars present
  if (trueCasing && word.toLowerCase() !== word) return word;

  // all other words are defaulted to lowercase
  return word.toLowerCase();
};

export {
  firstValidCharIndex,
  isWhitelistedSmallWord,
  isSentenceBoundary,
  formatLanguage,
  capitalizedWord,
  casedValue,
};
