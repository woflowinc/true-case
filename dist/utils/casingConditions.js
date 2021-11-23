"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shouldTitleCaseCapitalize = exports.shouldSentenceCaseCapitalize = void 0;

// no char available to capitalize
var _noValidChars = function _noValidChars(wordObject) {
  return wordObject.firstValidCharIndex < 0;
}; // All words (including whitelisted words) are capitalized at the beginning of a sentence


var _firstWordOfSentence = function _firstWordOfSentence(wordObject) {
  return wordObject.firstWordOfSentence;
}; // All words (including whitelisted words) are capitalized at the end of a sentence


var _lastWordOfSentence = function _lastWordOfSentence(wordObject) {
  return wordObject.activeSentenceBoundary;
}; // Do not capitalize whitelisted words


var _whitelistedWord = function _whitelistedWord(wordObject) {
  return wordObject.isWhitelisted;
};

var shouldTitleCaseCapitalize = function shouldTitleCaseCapitalize(wordObject) {
  if (_noValidChars(wordObject)) return false;
  if (_lastWordOfSentence(wordObject)) return true;
  if (_firstWordOfSentence(wordObject)) return true;
  if (_whitelistedWord(wordObject)) return false; // All other words should be capitalized

  return true;
};

exports.shouldTitleCaseCapitalize = shouldTitleCaseCapitalize;

var shouldSentenceCaseCapitalize = function shouldSentenceCaseCapitalize(wordObject) {
  if (_noValidChars(wordObject)) return false;
  if (_firstWordOfSentence(wordObject)) return true; // All other word should be lowercase

  return false;
};

exports.shouldSentenceCaseCapitalize = shouldSentenceCaseCapitalize;