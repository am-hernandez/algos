function caesarCipher(message, key) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let secret = "";
  message = message.toUpperCase();
  for (let i = 0; i < message.length; i++) {
    let char = message[i];
    let pos = alphabet.indexOf(char);
    if (pos > -1) {
      let newPos = pos - key;
      if (newPos < 0) {
        newPos = 25 + ((newPos + 1) % 26);
      }
      let newChar = alphabet[newPos];
      secret += newChar;
    } else {
      secret += char;
    }
  }
  return secret;
}

module.exports = caesarCipher;
