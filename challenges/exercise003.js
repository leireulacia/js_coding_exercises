function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  var arrayOfSquare = [];

  for (var i = 0; i <= nums.length - 1; i++) {

    arrayOfSquare[i] = Math.pow(nums[i], 2);

  }
  return arrayOfSquare;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  var camelWord = words[0];

  for (var i = 1; i <= words.length - 1; i++) {

    camelWord = camelWord + (words[i].charAt(0).toUpperCase() + words[i].slice(1));

  }
  return camelWord;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  var totalSubject = 0;
  for (var i = 0; i <= people.length - 1; i++) {
    if (people[i].subjects.length != 0) {
      totalSubject = totalSubject + people[i].subjects.length;
    }

  }

  return totalSubject;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  for (var i = 0; i <= menu.length - 1; i++) {

    if ((menu[i].ingredients.indexOf(ingredient)) >= 0) {
      return true;
    }

  }
  return false;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  var arrayDuplicateNums = [];

  for (var i = 0; i <= arr1.length - 1; i++) {

    if (((arr2.includes(arr1[i])) === true) && ((arrayDuplicateNums.indexOf(arr1[i])) < 0)) {
      arrayDuplicateNums.push(arr1[i]);
    }

  }
  return arrayDuplicateNums.sort();
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
