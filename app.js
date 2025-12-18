// Exercise 1 
const foods = [];
console.log('Exercise 1 results:', foods);

// Exercise 2
foods.push ('pizza' , 'cheeseburger')
console.log('Exercise 2 result:', foods);

// Exercise 3
foods.unshift ('taco')
console.log('Exercise 3 result:', foods);

// Exercise 4
const favFood = foods[1]
console.log('Exercise 4 result:', favFood);

// Exercise 5
foods.splice(2,0,'tofu')
console.log('Exercise 5 result:', foods);

// Exercise 6
foods.splice(1,1,'sushi', 'cupcake')
console.log('Exercise 6 result:', foods);

// Exercise 7
const yummy = (foods.slice(1,3))
console.log('Exercise 7 result:', yummy);

// Exercise 8
const soyIdx = foods.indexOf('tofu')
console.log('Exercise 8 result:', soyIdx);

// Exercise 9
const allFoods = foods.join('->')
console.log('Exercise 9 result:', allFoods);

// Exercise 10
const hasSoup = foods.includes('soup')
console.log('Exercise 10 result:', hasSoup);

// Exercise 11
const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
const odds = nums.filter((num) => {
  return num % 2;
});
console.log('Exercise 11 result:', odds);
// Exercise 12
//%3 fizz
//%5 buzz
//%3 || %5 fizzbuzz
const fizz = nums.filter((nums,index) => {
    if (index %3 === 0) return nums
});
const buzz = nums.filter((nums,index) => {
    if (index %5 === 0) return nums
});
const fizzbuzz = nums.filter((nums,index) => {
    if (index %5 === 0 && index %3 === 0) return nums
});

console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);

// Exercise 13
const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];

const numList= numArrays.at(-1);

console.log('Exercise 13 result:', numList);

// Exercise 14
const num = numArrays[2][1]
console.log('Exercise 14 result:', num);


// Exercise 15
let total = 0;
// for (let i = 0; i < numArrays.length; i++) {
// for (let j = 0; j < numArrays.length; j++) {
//         total = total + numArrays[i][j];
//     }
// }

numArrays.forEach((innerArray) => {
innerArray.forEach((number) => {
    total += number;
  });
  
});

console.log('Exercise 15 result:\n', total);
