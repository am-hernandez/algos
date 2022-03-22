function caesarDecipher(secret, key) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let message = "";
  secret = secret.toUpperCase();
  for (let i = 0; i < secret.length; i++) {
    let char = secret[i];
    let pos = alphabet.indexOf(char);
    if (pos > -1) {
      let newPos = pos + key;
      if (newPos >= 26) {
        newPos = newPos % 26;
      }
      let newChar = alphabet[newPos];
      message += newChar;
    } else {
      message += char;
    }
  }
  return message;
}

module.exports = caesarDecipher;
