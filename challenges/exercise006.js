/** This are jest comments. It a good practice to follow to explain what the functions do.
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
const sumMultiples = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if (!Array.isArray(arr)) throw new Error("an Array is requiered");
  let sum = 0;
  arr.forEach(num => {
    if (num % 3 === 0 || num % 5 === 0) {
      sum += num;
    }
  });
  return sum;
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
const isValidDNA = str => {
  if (str === undefined) throw new Error("str is required");
  let result = true;

  for (let i = 0; i <= str.length - 1; i++) {

    if ((str[i] != "A") && (str[i] != "G") && (str[i] != "T") && (str[i] != "C")) {
      result = false;
    }

  }
  return result;
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
const getComplementaryDNA = str => {
  if (str === undefined) throw new Error("str is required");
  if (isValidDNA(str) === false) throw new Error("the string is not a valid DNA");
  let complementDNA = "";

  for (let i = 0; i <= str.length - 1; i++) {

    if ((str[i] === "T")) {
      complementDNA += "A";
    }
    if ((str[i] === "A")) {
      complementDNA += "T";
    }
    if ((str[i] === "G")) {
      complementDNA += "C";
    }
    if ((str[i] === "C")) {
      complementDNA += "G";
    }
  }
  return complementDNA;
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
const isItPrime = n => {
  if (n === undefined) throw new Error("n is required");
  if (n <= 1) throw new Error("The prime number should be higher than 1");
  let result = true;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      result = false;
    }
  }
  return result;
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (fill === undefined) throw new Error("fill is required");
  const newMatrix = new Array(n).fill(fill); // Inizialite an array of n elements and fill all the elements with the "fill" 

  for (let i = 0; i < n; i++) {
    newMatrix[i] = new Array(n).fill(fill);
  }

  return newMatrix;
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");
  let staffAvailable = 0;
  let result = false;

  if (staff.length === 0) {
    result = false;
  } else {

    staff.forEach(arrayStaff => { // Get array of days for each member of staff
      arrayStaff.rota.forEach(daysStaff => { // Get each day of the current member of staff

        if ((daysStaff.toLowerCase().indexOf(day.toLowerCase())) >= 0) { // not be case sensitive
          staffAvailable++;
        }

      });

    });

    if (staffAvailable >= 3) {
      result = true;
    } else {
      result = false;
    }
  }
  return result;
};

module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
};
