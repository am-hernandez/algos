function firstDouble(arg) {
  let lastChar;
  let wasNum = false;
  if (typeof arg === "number") {
    arg = String(arg);
    wasNum = true;
  }
  for (let i = 0; i < arg.length; i++) {
    let currentChar = arg[i];
    if (currentChar === lastChar) {
      if (wasNum) {
        return Number(`${lastChar}${currentChar}`);
      } else {
        return `${lastChar}${currentChar}`;
      }
    } else {
      lastChar = currentChar;
    }
  }
  return false;
}

module.exports = firstDouble;
