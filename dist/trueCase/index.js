"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("../configs/constants");

var _argumentValidator = _interopRequireDefault(require("../utils/argumentValidator"));

var _wordObjectsBuilder = _interopRequireDefault(require("../utils/wordObjectsBuilder"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var trueCase = function trueCase(string) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$language = _ref.language,
      unformattedLanguage = _ref$language === void 0 ? _constants.DEFAULT_LANGUAGE : _ref$language,
      _ref$trueCasing = _ref.trueCasing,
      trueCasing = _ref$trueCasing === void 0 ? false : _ref$trueCasing,
      _ref$properNouns = _ref.properNouns,
      properNouns = _ref$properNouns === void 0 ? [] : _ref$properNouns;

  (0, _argumentValidator["default"])({
    unformattedLanguage: unformattedLanguage,
    trueCasing: trueCasing,
    properNouns: properNouns
  });
  var wordObjects = (0, _wordObjectsBuilder["default"])({
    string: string,
    unformattedLanguage: unformattedLanguage,
    trueCasing: trueCasing,
    properNouns: properNouns
  });
  return wordObjects.map(function (wordObject) {
    return wordObject.value;
  }).join(' ');
};

var _default = trueCase;
exports["default"] = _default;