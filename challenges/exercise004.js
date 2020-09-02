function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  const arrayNums = nums.filter(function (num) {
    return (num < 1); // This statement returns true or false by itself
  });

  return arrayNums;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  const arrayNames = names.filter(function (name) {
    // ToUpperCase to be non case sensitive
    return ((name.charAt(0).toUpperCase()) === (char.toUpperCase()));
  });

  return arrayNames;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  const arrayVerbs = words.filter(function (word) {
    // Check the first 2 characters: TO and the 3rd character must to be an space
    return (((word.charAt(0).toUpperCase()) === "T") && ((word.charAt(1).toUpperCase()) === "O") && ((word.charAt(2).toUpperCase()) === " "));
  });

  return arrayVerbs;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  const arrayFloat = nums.filter(function (num) {
    return (num % 1 === 0);
  });

  return arrayFloat;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  const arrayCities = [];

  users.forEach(function (userData) {
    arrayCities.push(userData.data.city.displayName);
  });

  return arrayCities;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  const arrayNums = nums.map(function (num) {
    // Access to each item, one by one and transform to the square root
    const squareRoot = Math.round(((Math.sqrt(num)) * 100)) / 100;
    return squareRoot;
  });

  return arrayNums;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  const arraySenteces = sentences.filter(function (sent) {
    return ((sent.toUpperCase()).indexOf(str.toUpperCase()) >= 0);
  });

  return arraySenteces;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  const arrayNum = [];
  let currentNum;

  triangles.forEach(function (sideArray) {
    currentNum = sideArray[0];
    sideArray.forEach(function (num) {
      // IndexOf to check if it is already in the array
      if ((num > currentNum) && (sideArray.indexOf(num < 0))) {
        currentNum = num;
      }
    });
    arrayNum.push(currentNum);
  });

  return arrayNum;
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
