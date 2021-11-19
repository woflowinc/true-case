export default [
  {
    language: 'en_us',
    cases: {
      titleCase: [
        {
          input: 'this is a test',
          output: 'This is a Test',
        },
      ],
      sentenceCase: [
        {
          input: 'THIS IS A TEST',
          output: 'This is a test',
        },
      ],
    },
  },
  {
    language: 'ja_jp',
    cases: {
      titleCase: [
        {
          input: '(5個/3個)',
          output: '(5個/3個)',
        },
      ],
    },
  },
];
