"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _smallWords = _interopRequireDefault(require("../configs/smallWords"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var argumentValidator = function argumentValidator(_ref) {
  var unformattedLanguage = _ref.unformattedLanguage,
      trueCasing = _ref.trueCasing,
      properNouns = _ref.properNouns;
  var matchingLanguage = Object.keys(_smallWords["default"]).find(function (lang) {
    return unformattedLanguage.match(new RegExp("^".concat(lang, "_?"), 'i'));
  });

  if (!matchingLanguage) {
    console.warn("".concat(unformattedLanguage, " is not a supported language"));
  }

  if (!(properNouns instanceof Array)) {
    throw "Argument for properNouns is not an Array";
  }

  var invalidProperNouns = properNouns.filter(function (properNoun) {
    return !properNoun instanceof String;
  });

  if (invalidProperNouns.length > 0) {
    throw "Invalid proper noun types: ".concat(invalidProperNouns);
  }

  if (!(typeof trueCasing == 'boolean')) {
    throw 'trueCasing should be a boolean';
  }
};

var _default = argumentValidator;
exports["default"] = _default;