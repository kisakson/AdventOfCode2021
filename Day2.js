const input = '', // Copy/paste in from https://adventofcode.com/2021/day/2/input
  inputArray = input.split('\n');

let horizontal = 0,
	depth = 0,
  angle = 0;
  
for (let i = 0; i < inputArray.length; i++) {
  const pair = inputArray[i],
    splitPair = pair.split(' '),
    direction = splitPair[0],
    count = Number.parseInt(splitPair[1]);
    
    if (direction === 'forward') {
      horizontal += count;
      depth += angle * count;
    } else if (direction === 'up') {
      angle -= count;
      // depth -= count; // Part 1
    } else if (direction === 'down') {
      angle += count;
      // depth += count; // Part 1
    }
}

window.console.log(horizontal * depth)
