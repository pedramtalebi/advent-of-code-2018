const fs = require('fs');

const calculateFrequency = () => {
  let currentFrequency = 0;
  fs.readFileSync('./input.txt')
    .toString()
    .split('\n')
    .forEach(function(line, index, arr) {
      if (index === arr.length - 1 && line === '') {
        return;
      }
      currentFrequency = currentFrequency + parseInt(line);
    });
  return currentFrequency;
};

console.log(calculateFrequency());
