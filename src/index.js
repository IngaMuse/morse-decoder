const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

const NUMBER_DECODE = {
  ".": "10",
  "-": "11",
  " ": "**********",
};

function decode(expr) {
  let result = [];
  let binaryWords = [];
  chunk(expr, 10).forEach((word) =>
    binaryWords.push(decryptWord(word).join(""))
  );
  binaryWords.forEach((word) => result.push(MORSE_TABLE[word] || " "));

  return result.join("");
}

function decryptWord(decodedWord) {
  let decryptedWords = [];
  if (decodedWord === "**********") {
    return [" "];
  }
  chunk(decodedWord, 2).forEach((item) => {
    if (item !== "00") {
      decryptedWords.push(getKeyByValue(NUMBER_DECODE, item));
    }
  });
  return decryptedWords;
}

function chunk(array, size) {
  const chunked_arr = [];
  let index = 0;
  while (index < array.length) {
    chunked_arr.push(array.slice(index, size + index));
    index += size;
  }
  return chunked_arr;
}

function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}

module.exports = {
  decode,
};
