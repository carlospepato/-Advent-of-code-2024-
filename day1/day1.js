import fs from 'fs';

function readData() {
  const data = fs.readFileSync('./day1/day1.txt', 'utf8');
  return data.split('\n');
}

function createLists(data) {
  const arrayLeft = [];
  const arrayRight = [];

  data.forEach(line => {
    let [left, right] = line.split('   ');
    arrayLeft.push(parseInt(left))
    arrayRight.push(parseInt(right))
  });

  arrayLeft.sort((a, b) => a - b);
  arrayRight.sort((a, b) => a - b);

  return [arrayLeft, arrayRight];

}

function main(arrayLeft,arrayRight){
  let resultPartOne = 0;
  let resultPartTwo = 0;

  arrayLeft.forEach((element, index) => {
  resultPartOne += Math.abs(element - arrayRight[index]);

  resultPartTwo += element * arrayRight.filter(item => item === element).length;
  });
  return [resultPartOne, resultPartTwo];
}

const dayOne = () => {
  const data = readData();
  const [arrayLeft, arrayRight] = createLists(data);
  const [resultPartOne, resultPartTwo] = main(arrayLeft, arrayRight);
  console.log(`Part one: ${resultPartOne}`);
  console.log(`Part two: ${resultPartTwo}`);
}

dayOne();