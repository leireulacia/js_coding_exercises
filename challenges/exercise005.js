const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");

  const numfind = num => num === n; // num should be equal to n
  let index = nums.findIndex(numfind); // First index that satisfies the provided testing function. If it don't find an element, return -1

  if (index === -1 || index === (nums.length - 1)) { // index===nums.length-1 check if it is the last element
    return null;
  } else {
    return nums[index + 1];
  }
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");

  const frequencies = { // Create a frequencies object
    1: 0,
    0: 0
  };

  for (let i = 0; i <= str.length - 1; i++) {

    if (str[i] === "1") {
      frequencies["1"] += 1;
    } else {
      frequencies["0"] += 1;
    }
  }
  return frequencies;
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  // First convert into a String, then reverse the string and convert into a integer again.
  // it could use an arrow function if it would delete the if first stament
  return parseInt(n.toString().split("").reverse().join(""));

};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  let sum = 0;

  arrs.forEach(function (arrayNum) { // Get array of nums
    arrayNum.forEach(num => { // Get the elements in each array
      sum += num;
    });

  });

  return sum;
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  const newArray = [];

  if (arr.length > 1) { //Check if the length of the array is more than 1
    newArray.push(arr[arr.length - 1]); // Add the last element of the array to the first position to the new array

    for (let i = 1; i < arr.length - 1; i++) {
      newArray[i] = arr[i]; // Keep the order of the rest of elements until last position
    }
    newArray.push(arr[0]); // Add the first element of the array to the last position to the new array

    return newArray;

  } else {
    return arr;
  }
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  let findit = false;
  for (let key in haystack) { // loop to know the keys of the object
    if (((haystack[key].toString()).toUpperCase()).indexOf(searchTerm.toUpperCase()) >= 0) { // Take the values of the key and check if the searchTerm is in the value.
      // Use toUpperCase() not to be case sensitive    
      findit = true;
    }

  }
  return findit;
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");

  const frequencies = {};
  const word = str.replace(/[^a-zA-Z ]/g, "").split(" "); // Ignore punctuation and convert the sentence into an array of words

  for (let i = 0; i < word.length; i++) { // Check each word a time

    const wordLowerCase = word[i].toLowerCase(); // Ignore Capitalizations

    if (frequencies[wordLowerCase] === undefined) {
      frequencies[wordLowerCase] = 1;
    } else {
      frequencies[wordLowerCase] += 1;
    }

  }
  return frequencies;
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
