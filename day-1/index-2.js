const fs = require("fs");

const input = fs
  .readFileSync("./input.txt")
  .toString()
  .split("\n");
let currentFrequency = 0;
const pastFrequency = {
  "0": 1
};

const calculateFrequency = () => {
  for (const [index, line] of input.entries()) {
    currentFrequency = currentFrequency + parseInt(line);
    if (pastFrequency.hasOwnProperty(currentFrequency)) {
      console.log(currentFrequency);
      break;
    } else {
      pastFrequency[currentFrequency] = "1";
    }
    if (index === input.length - 1) {
      calculateFrequency();
    }
  }
};

calculateFrequency();
