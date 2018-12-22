const fs = require('fs');

const input_data = fs
  .readFileSync('./input.txt')
  .toString()
  .split('\n');

const letter_occurence = {
  2: 0,
  3: 0
};

const readInputStream = input => {
  input.forEach(string => {
    calculateLetters(string)
      .then(temp_holder => {
        addToOccurence(temp_holder);
      })
      .catch(() => {
        console.log('error');
      });
  });
};

const calculateLetters = string => {
  return new Promise((resolve, reject) => {
    if (string) {
      let temp_holder = {};
      for (const letter of string) {
        if (letter in temp_holder) {
          temp_holder[letter] = temp_holder[letter] + 1;
        } else {
          temp_holder[letter] = 1;
        }
      }
      resolve(temp_holder);
    } else {
      reject();
    }
  });
};

const addToOccurence = temp_obj => {
  //console.log(Object.keys(temp_obj).find(key => temp_obj[key] === '2'));
  if (Object.keys(temp_obj).find(key => temp_obj[key] === 2)) {
    letter_occurence[2] = letter_occurence[2] + 1;
  }
  if (Object.keys(temp_obj).find(key => temp_obj[key] === 3)) {
    letter_occurence[3] = letter_occurence[3] + 1;
  }
  console.log(letter_occurence);
};

readInputStream(input_data);
