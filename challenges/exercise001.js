function capitalize(word) {
  if (word === undefined) throw new Error("word is required");

  return word.charAt(0).toUpperCase() + word.slice(1);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");

  return firstName.charAt(0) + "." + lastName.charAt(0);
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  //Math.round((x * 100)) / 100 --> to get the number with 2 decimals
  let total = originalPrice + Math.round(((originalPrice * vatRate) / 100) * 100) / 100;

  return total;
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");

  let total = originalPrice - Math.round(((originalPrice * reduction) / 100) * 100) / 100;

  return total;
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  let initPosition;
  let length;

  //even length
  if (str.length % 2 === 0) {
    initPosition = str.length / 2 - 1;
    length = 2;

  } else {
    //odd length
    initPosition = str.length / 2;
    length = 1;
  }

  // substring (initial, position)
  return str.substring(initPosition, initPosition + length);
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");

  return word.split("").reverse().join("");
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  const wordofArray = [];

  for (var i = 0; i <= words.length - 1; i++) {
    wordofArray[i] = reverseWord(words[i]);
  }

  return wordofArray;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  let count = 0;

  for (var i = 0; i <= users.length - 1; i++) {
    if (((users[i].type).toUpperCase()) === "LINUX") {
      count++;
    }
  }

  return count;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  let mean = 0;

  for (let i = 0; i <= scores.length - 1; i++) {
    mean = mean + scores[i];
  }
  mean = mean / scores.length;

  return Math.round((mean * 100)) / 100;
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");

  return n % 3 === 0 && n % 5 === 0 ? "fizzbuzz"
          : n % 3 === 0 ? "fizz"
          : n % 5 === 0 ? "buzz"
          : n;

 /*The statement above replace: 
 
 if (n % 3 === 0 && n % 5 === 0)
    result = "fizzbuzz";
  else if (n % 3 === 0)
    result = "fizz";
  else if (n % 5 === 0)
    result = "buzz";
  else
    result = n;*/

 // return result;
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
