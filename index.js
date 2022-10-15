//ASSIGNMENTS
// 1. Create a function that takes an array of numbers and returns the max number in the array.
// 2. Create a function that takes an array of numbers and returns the min number in the array.
// 3. Create a function that takes an array of numbers and returns the sum of all the numbers in the array.
// 4. Create a function that takes an array of numbers and returns the average of all the numbers in the array.
// 5. Create a function that takes an array of numbers and returns the sum of all the even numbers in the array.
// 6. Create a function that takes an array of numbers and returns the sum of all the odd numbers in the array.
// 7. Create a function that takes an array of numbers and returns the sum of all the numbers divisible by 5 in the array.
// 8. Create a function that takes an array of strings and returns the longest string in the array.
// 9. Create a function that takes an array of strings and returns the shortest string in the array.
// 10. Create a function that takes an array of numbers and filters out all the odd numbers in the array.
// 11. Create a function that takes an array of numbers and filters out all the even numbers in the array.
// 12. Create a function that takes an array of strings and returns the array with all the strings capitalized.

//No. 1
// 1. Create a function that takes an array of numbers and returns the max number in the array.
console.log(Math.max.apply(null, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// //This method is called the Javascript function which allows you to find the maximum number in an array.

//2. Create a function that takes an array of numbers and returns the min number in the array.
console.log(Math.min.apply(null, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// //This method is called the Javascript function which allows you to find the maximum number in an array.
//3. Create a function that takes an array of numbers and returns the sum of all the numbers in the array.
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sum = 0
number.map(function(num){
    sum += num;
})
console.log(sum);

// 4. Create a function that takes an array of numbers and returns the average of all the numbers in the array.
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11]
let total = 0
nums.map(function(num) {
    total += num;
})
console.log(total);
console.log(total / 2);

//5. Create a function that takes an array of numbers and returns the sum of all the even numbers in the array.
const num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
totals = 0
const sumOfEven = num2.map(function(num) {
    
    if (num % 2 === 0) {
        totals += num;
        return totals;
    };
})
console.log(totals);

// 6. Create a function that takes an array of numbers and returns the sum of all the odd numbers in the array.
const num3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
totalOdd = 0
const sumOfOdd = num3.map(function(item) {
    
    if (item % 2 === 1){
        totalOdd += item;
        return totalOdd;
    } 
})
console.log(totalOdd);

// 7. Create a function that takes an array of numbers and returns the sum of all the numbers divisible by 5 in the array.
const num4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
totalOfNumbersDivisibleByFive = 0
const sumOfNumbersDivisibleByFive = num4.map(function(item) {
    
    if (item % 5 === 0){
        totalOfNumbersDivisibleByFive += item;
        return totalOdd;
    } 
})
console.log(totalOfNumbersDivisibleByFive);

// 8. Create a function that takes an array of strings and returns the longest string in the array.
const fruits = ['apple', 'orange', 'banana', 'pawpawpaw', 'cherry'];
let longestFruit = " ";

for (const fruit of fruits) {
    if (fruit > longestFruit) {
        longestFruit = fruit
        
    }
}
console.log(longestFruit);

// 9. Create a function that takes an array of strings and returns the shortest string in the array.

// 10. Create a function that takes an array of numbers and filters out all the odd numbers in the array.
const num5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddNumbers = num5.filter(function (numbers) {
    if (numbers % 2 === 1) {
        return numbers;
    }
})
console.log(oddNumbers);

// 11. Create a function that takes an array of numbers and filters out all the even numbers in the array.
const num6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = num6.filter(function (even) {
    if (even % 2 === 0) {
        return even;
    }
})
console.log(evenNumbers);

// 12. Create a function that takes an array of strings and returns the array with all the strings capitalized.
const stringsColor = ['violet', 'blue', 'red', 'black']

const capitalizeColor = stringsColor.map(function (str) {
    return str.toUpperCase()
})
console.log(capitalizeColor);
