import wordObjects from '../utils/wordObjects';

const titleCase = (string) => {
  const words = wordObjects(string);
  console.log(words);
  return `${string} + this is titleCase-`;
};

export default titleCase;
