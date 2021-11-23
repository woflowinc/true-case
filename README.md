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

sentenceCase(string, { language: 'fr' });
```

Output

```
Petit a Petit, l'oiseau Fait Son Nid
```

Supported Languages: `en`, `nl`, `fr`, `es`

### TrueCase Support

`True Casing` is a casing format that keeps everything lowercase except for proper nouns or anything else that requires a special casing. Ex: "California", "Marys's, McDonalds".

Storing text in True Casing will allow you to programmatically transform that text into any casing necessary.

```javascript
import { titleCase } from 'true-case';

const string = 'this is a sentence. this is another sentence.';

sentenceCase({ string });
```

## Installation

```
$ npm install true-case
```

## License

MIT
