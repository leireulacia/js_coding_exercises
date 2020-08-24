function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  const arrayNums = [];

  nums.forEach(function (num) {
    if (num < 1) {
      arrayNums.push(num);
    }
  });

  return arrayNums;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  const arrayNames = [];

  names.forEach(function (name) {
    // ToUpperCase to be non case sensitive
    if ((name.charAt(0).toUpperCase()) === (char.toUpperCase())) {
      arrayNames.push(name);
    }
  });

  return arrayNames;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  const arrayVerbs = [];

  words.forEach(function (word) {
    // Check the first 2 characters: TO and the 3rd character must to be an space
    if (((word.charAt(0).toUpperCase()) === "T") && ((word.charAt(1).toUpperCase()) === "O") && ((word.charAt(2).toUpperCase()) === " ")) {
      arrayVerbs.push(word);
    }

  });

  return arrayVerbs;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  const arrayFloat = [];

  nums.forEach(function (num) {
    // The num is divide by itself
    if (num % 1 === 0) {
      arrayFloat.push(num);
    }

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

  const arrayNums = [];

  nums.forEach(function (num) {
    // Use Math.sqrt to get the square root and the keep only 2 decimals
    arrayNums.push(Math.round(((Math.sqrt(num)) * 100)) / 100);

  });

  return arrayNums;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  const arraySenteces = [];

  sentences.forEach(function (sent) {

    if ((sent.toUpperCase()).indexOf(str.toUpperCase()) >= 0) {
      arraySenteces.push(sent);
    }

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
