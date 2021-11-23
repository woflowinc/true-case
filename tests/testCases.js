export default [
  {
    language: 'en',
    cases: {
      titleCase: [
        {
          input: 'and i love you!',
          output: 'And I Love You!',
        },
        {
          input: 'the challenge of',
          output: 'The Challenge Of',
        },
        {
          input: 'FARTHER IN',
          output: 'Farther In',
        },
        {
          input: 'FARTHER IN! FURTHER IN',
          output: 'Farther In! Further In',
        },
        {
          input: 'and...',
          output: 'And...',
        },
        {
          input: '-30',
          output: '-30',
        },
        {
          input: 'this is a test',
          output: 'This is a Test',
        },
        {
          input: '',
          output: '',
        },
        {
          input: null,
          output: '',
        },
        {
          input: 'this is a McDonalds McChicken sandwich with fries',
          output: 'This is a McDonalds McChicken Sandwich with Fries',
          trueCasing: true,
        },
      ],
      sentenceCase: [
        {
          input: 'THIS IS A TEST',
          output: 'This is a test',
        },
        {
          input: 'he walked in. "hi," he said! she replied, "yes?" "oh, nevermind."',
          output: 'He walked in. "Hi," he said! She replied, "Yes?" "Oh, nevermind."',
        },
        {
          input: 'the 12 oz. drink was cold',
          output: 'The 12 oz. drink was cold',
        },
        {
          input: "We can't stop",
          output: "We can't stop",
        },
        {
          input: '',
          output: '',
        },
        {
          input: null,
          output: '',
        },
        {
          input: 'this is a McDonalds McChicken sandwich with fries',
          output: 'This is a McDonalds McChicken sandwich with fries',
          trueCasing: true,
        },
      ],
    },
  },
  {
    language: 'ja',
    cases: {
      titleCase: [
        {
          input: '(5個/3個)',
          output: '(5個/3個)',
        },
      ],
    },
  },
  {
    language: 'nl',
    cases: {
      titleCase: [
        {
          input: 'eieren met spek',
          output: 'Eieren met Spek',
        },
      ],
    },
  },
  {
    language: 'fr',
    cases: {
      titleCase: [
        {
          input: 'bacon et oeufs',
          output: 'Bacon et Oeufs',
        },
        {
          input: "Petit a petit, l'oiseau fait son nid",
          output: "Petit a Petit, l'oiseau Fait Son Nid",
        },
      ],
    },
  },
  {
    language: 'fr',
    cases: {
      titleCase: [
        {
          input: 'bacon et oeufs',
          output: 'Bacon et Oeufs',
        },
      ],
    },
  },
  {
    language: 'es',
    cases: {
      titleCase: [
        {
          input: 'preparación de huevo',
          output: 'Preparación de Huevo',
        },
      ],
    },
  },
  {
    language: 'es',
    cases: {
      titleCase: [
        {
          input: 'hamburguesas y papas fritas',
          output: 'Hamburguesas y Papas Fritas',
        },
      ],
    },
  },
  {
    language: 'es',
    cases: {
      titleCase: [
        {
          input: 'hamburguesas y papas fritas',
          output: 'Hamburguesas y Papas Fritas',
        },
      ],
    },
  },
];
