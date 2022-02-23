function toPigLatin(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let pigArr = str.split(" ");
  return pigArr
    .map((word) => {
      word = word.toLowerCase();
      if (alphabet.includes(word[word.length - 1]) === false) {
        return word.slice(1, -1) + word[0] + "ay" + word[word.length - 1];
      }
      return word.slice(1) + word[0] + "ay";
    })
    .join(" ");
}

module.exports = toPigLatin;
