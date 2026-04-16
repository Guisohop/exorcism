//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, num) => {
  let suffix;

  if (num % 100 >= 11 && num % 100 <= 13) {
    suffix = "th";
  } else if (num % 10 === 1) {
    suffix = "st";
  } else if (num % 10 === 2) {
    suffix = "nd";
  } else if (num % 10 === 3) {
    suffix = "rd";
  } else {
    suffix = "th";
  }

  return `${name}, you are the ${num}${suffix} customer we serve today. Thank you!`;
};
