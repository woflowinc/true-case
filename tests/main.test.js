import { titleCase, sentenceCase } from 'true-case';
import testCases from './testCases';

const functionSelector = (casingType) => {
  switch (casingType) {
    case 'titleCase':
      return titleCase;
    case 'sentenceCase':
      return sentenceCase;

    default:
      break;
  }
};

testCases.forEach((testCase) => {
  Object.entries(testCase.cases).forEach(([casingType, cases]) => {
    cases.forEach((scenario) => {
      test(`When transforming "${scenario.input}" to ${casingType} in ${testCase.language}`, () => {
        expect(
          functionSelector(casingType)({
            string: scenario.input,
            language: testCase.language,
            trueCasing: scenario.trueCasing,
          })
        ).toBe(scenario.output);
      });
    });
  });
});
