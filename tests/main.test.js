import { titleCase, sentenceCase } from 'true-case';
import testCases from './testCases';

const INPUT = 'this is a test';
const SENTENCE_OUTPUT = 'This is a test';
const TITLE_OUTPUT = 'This is a Test';

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
          functionSelector(casingType)(scenario.input, {
            language: testCase.language,
            trueCasing: scenario.trueCasing,
          })
        ).toBe(scenario.output);
      });
    });
  });
});

test(`When not including any options`, () => {
  expect(titleCase(INPUT)).toBe(TITLE_OUTPUT);
});

test(`When not including any options`, () => {
  expect(sentenceCase(INPUT)).toBe(SENTENCE_OUTPUT);
});

test(`When only including language option`, () => {
  expect(titleCase(INPUT, { language: 'en' })).toBe(TITLE_OUTPUT);
});

test(`When only including truecase option`, () => {
  expect(titleCase(INPUT, { trueCasing: true })).toBe(TITLE_OUTPUT);
});

test(`When using an unsupported language`, () => {
  expect(titleCase(INPUT, { language: '--' })).toBe(TITLE_OUTPUT);
});
