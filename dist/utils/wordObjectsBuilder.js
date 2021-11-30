"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _helpers = require("./helpers");

var wordObjectsBuilder = function wordObjectsBuilder(_ref) {
  var string = _ref.string,
      unformattedLanguage = _ref.unformattedLanguage,
      trueCasing = _ref.trueCasing,
      properNouns = _ref.properNouns;
  if (!string) return [];

  var _formatLanguage = (0, _helpers.formatLanguage)(unformattedLanguage),
      language = _formatLanguage.language,
      region = _formatLanguage.region;

  var activeSentenceBoundary = true;
  var words = string.split(' ');
  return words.map(function (word, index) {
    // Maintain raw casing if proper noun, otherwise lowercase it
    var value = (0, _helpers.casedValue)({
      word: word,
      trueCasing: trueCasing,
      properNouns: properNouns
    }); // is directly after a word boundary or is the beginning of a quoted string

    var firstWordOfSentence = activeSentenceBoundary || word.slice(0, 1) === '"';
    activeSentenceBoundary = (0, _helpers.isSentenceBoundary)({
      word: word,
      language: language
    }) || index == words.length - 1;
    return {
      value: value,
      isWhitelisted: (0, _helpers.isWhitelistedSmallWord)({
        word: word,
        language: language,
        region: region
      }),
      firstValidCharIndex: (0, _helpers.firstValidCharIndex)(word),
      activeSentenceBoundary: activeSentenceBoundary,
      firstWordOfSentence: firstWordOfSentence
    };
  });
};

var _default = wordObjectsBuilder;
exports["default"] = _default;