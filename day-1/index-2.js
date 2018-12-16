let fs = require('fs');

let input = fs.readFileSync('./input.txt').toString().split("\n");
let currentFrequency = 0;
let pastFrequency = {
  '0' : 1
};

let calculateFrequency = () => {
  for (const [index, line] of input.entries()) {
    currentFrequency = currentFrequency + parseInt(line)
    if (pastFrequency.hasOwnProperty(currentFrequency)) {
      break;
    } else {
      pastFrequency[currentFrequency] = '1';
    }
    if (index === input.length - 1) {
      calculateFrequency(); 
    }
  }
}

calculateFrequency();