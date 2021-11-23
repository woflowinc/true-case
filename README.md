# True Case

`true-case` provides methods for transforming the casing of text

1. Sentence Casing
2. Title Casing

## Usage

### Title Case

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

```javascript
import { sentenceCase } from 'true-case';

const string = 'this is a sentence. this is another sentence.';

sentenceCase(string);
```

Output

```
This is a sentence. This is another sentence.
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

## Installation

```
$ npm install true-case
```

## License

MIT
