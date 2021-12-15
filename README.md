# True Case

`true-case` provides methods for transforming the casing of text

1. Sentence Casing
2. Title Casing
3. True Case

## Usage

### Title Case

Capitalize the first charecter of all words, except for language specfific words to leave lowercase.

```javascript
import { titleCase } from 'true-case';

const string = 'this is a sentence. this is another sentence.';

titleCase(string);
```

Output

```
This is a Sentence. This is Another Sentence.
```

### Sentence Case

Capitalize the first charecter of the first word of each sentence.

```javascript
import { sentenceCase } from 'true-case';

const string = 'this is a sentence. this is another sentence.';

sentenceCase(string);
```

Output

```
This is a sentence. This is another sentence.
```

### True Case

Keep all charecters lowercase except for specified proper nouns.

```javascript
import { trueCase } from 'true-case';

const string = 'This is a McDonalds McChicken sandwich with fries';

sentenceCase(string, { properNouns: ['McDonalds', 'McChicken'] });
```

Output

```
this is a McDonalds McChicken sandwich with fries
```

## API

### Language Support

```javascript
import { titleCase } from 'true-case';

const string = "Petit a petit, l'oiseau fait son nid";

titleCase(string, { language: 'fr' });
```

Output

```
Petit a Petit, l'oiseau Fait Son Nid
```

Supported Languages: `en`, `nl`, `fr`, `es`

### TrueCase Support

`True Casing` is a is text casing format for storing text. To put it simply, everything is lowercase except for proper nouns or anything else that requires a special casing.

Examples:

`i want to get some McDonalds. do you want to come?`

`this package is awesome`

`this looks like 1/2 lb of Mary's chicken`

`Joe, can you come over here?`

When using the `trueCasing` option it will recognize any specials casings within the string and maintain them on the output.

```javascript
import { sentenceCase } from 'true-case';

const string = 'i want to get some McDonalds. do you want to come?';

sentenceCase(string, { trueCasing: true });
```

Output

```
I want to get some McDonalds. Do you want to come?
```

### Supplied Proper Nouns

You can supply a list of proper nouns to maintain specific casing for them

```javascript
import { sentenceCase } from 'true-case';

const string = 'i want to get some McDonalds. do you want to come?';

sentenceCase(string, { properNouns: ['McDonalds'] });
```

Output

```
I want to get some McDonalds. Do you want to come?
```

Supplying proper nouns will override any casing from the input

Example:

```javascript
import { sentenceCase } from 'true-case';

const string = 'i want to get some mcdonalds. do you want to come?';

sentenceCase(string, { properNouns: ['McDonalds'] });
```

Output

```
I want to get some McDonalds. Do you want to come?
```

Notice `mcdonalds` is all lowercased on the input but transforms into the casing given by the `properNouns`

## Installation

```
$ npm install true-case
```

## Publish New Version

```
$ npm bump-n-pub
```

## License

MIT
