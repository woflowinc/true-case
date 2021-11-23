"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("../configs/constants");

var _casingConditions = require("../utils/casingConditions");

var _helpers = require("../utils/helpers");

var _wordObjectsBuilder = _interopRequireDefault(require("../utils/wordObjectsBuilder"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sentenceCase = function sentenceCase(string) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$language = _ref.language,
      unformattedLanguage = _ref$language === void 0 ? _constants.DEFAULT_LANGUAGE : _ref$language,
      _ref$trueCasing = _ref.trueCasing,
      trueCasing = _ref$trueCasing === void 0 ? false : _ref$trueCasing,
      _ref$properNouns = _ref.properNouns,
      properNouns = _ref$properNouns === void 0 ? [] : _ref$properNouns;

  var wordObjects = (0, _wordObjectsBuilder["default"])({
    string: string,
    unformattedLanguage: unformattedLanguage,
    trueCasing: trueCasing,
    properNouns: properNouns
  });
  return wordObjects.map(function (wordObject) {
    return (0, _casingConditions.shouldSentenceCaseCapitalize)(wordObject) ? (0, _helpers.capitalizedWord)(wordObject) : wordObject.value;
  }).join(' ');
};

var _default = sentenceCase;
exports["default"] = _default;