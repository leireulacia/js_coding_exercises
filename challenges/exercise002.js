function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");

  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");

  return ((person.city).toUpperCase()) === "MANCHESTER";
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");

  return Math.ceil(people / 40);
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  let count = 0;

  for (let i = 0; i <= arr.length - 1; i++) {
   if ((arr[i].toUpperCase()) === "SHEEP") {
      count++;
    }
  }

  return count;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");

  return ((((person.address.postCode).charAt(0)).toUpperCase()) === 'M' && ((person.address.city).toUpperCase()) === "MANCHESTER");
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
