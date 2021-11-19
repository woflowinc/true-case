const wordObjects = (string) => {
  return string.split(' ').map((word) => {
    return {
      rawString: word,
    };
  });
};

export default wordObjects;
