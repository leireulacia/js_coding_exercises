function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  var arrayNums = [];
  for (var i = 0; i <= nums.length - 1; i++) {

    if (nums[i] < 1) {
      arrayNums.push(nums[i]);
    }

  }

  return arrayNums;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  var arrayNames = [];

  for (var i = 0; i <= names.length - 1; i++) {

    if ((names[i].charAt(0).toUpperCase()) === (char.toUpperCase())) {
      arrayNames.push(names[i]);
    }

  }

  return arrayNames;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  var arrayVerbs = [];

  for (var i = 0; i <= words.length - 1; i++) {

    if (((words[i].charAt(0).toUpperCase()) === "T") && ((words[i].charAt(1).toUpperCase()) === "O") && ((words[i].charAt(2).toUpperCase()) === " ")) {
      arrayVerbs.push(words[i]);
    }

  }

  return arrayVerbs;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  var arrayFloat = [];

  for (var i = 0; i <= nums.length - 1; i++) {

    if (nums[i] % 1 === 0) {
      arrayFloat.push(nums[i]);
    }

  }
  return arrayFloat;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  var arrayCities = [];

  for (var i = 0; i <= users.length - 1; i++) {

    arrayCities.push(users[i].data.city.displayName);

  }
  return arrayCities;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");

  var arrayNums = [];
  for (var i = 0; i <= nums.length - 1; i++) {

    arrayNums.push(Math.round(((Math.sqrt(nums[i])) * 100)) / 100);
  }
  return arrayNums;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  var arraySenteces = [];
  for (var i = 0; i <= sentences.length - 1; i++) {

    if ((sentences[i].toUpperCase()).indexOf(str.toUpperCase()) >= 0) {
      arraySenteces.push(sentences[i]);
    }

  }
  return arraySenteces;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  var arrayNum = [];
  var currentNum;

  for (var i = 0; i <= triangles.length - 1; i++) {
    currentNum = triangles[i][0];
    for (var j = 0; j <= triangles[i].length - 1; j++) {

      if ((triangles[i][j] > currentNum) && (triangles.indexOf(triangles[i][j]) < 0)) {
        currentNum = triangles[i][j];
      }

    }
    arrayNum.push(currentNum);
  }
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
