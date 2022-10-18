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

// 1. Create a function that takes an array of numbers and returns the max number in the array.

function arrayMaxNumber(array) {
    return Math.max.apply(null, array);
}
arrayMaxNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// //This method is called the Javascript function which allows you to find the maximum number in an array.

//2. Create a function that takes an array of numbers and returns the min number in the array.

function arrayMinNumber(array) {
    return Math.min.apply(null, array);
}
arrayMinNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// //This method is called the Javascript function which allows you to find the maximum number in an array.
//3. Create a function that takes an array of numbers and returns the sum of all the numbers in the array.
let sumOfNumbers = 0;
function sumOfArray(array) {
    array.map(function (item) {
        sumOfNumbers += item;
    });
    return sumOfNumbers;
}
sumOfArray([1, 4, 0, 9, -3]);

// 4. Create a function that takes an array of numbers and returns the average of all the numbers in the array.

function aveOfNumbers(array) {
    let sum = 0;
    array.forEach(function (items) {
        sum += items;
    });

    return sum / 2;
}

aveOfNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
//5. Create a function that takes an array of numbers and returns the sum of all the even numbers in the array.

function sumEven(array) {
    let evenSum = 0;
    array.forEach(function (items) {
        if (items % 2 === 0) {
            evenSum += items;
        }
    });
    console.log(evenSum);
    return evenSum;
}
sumEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// 6. Create a function that takes an array of numbers and returns the sum of all the odd numbers in the array.

function sumOfOddNumbers(array) {
    let sum = 0;

    array.forEach(function (item) {
        if (item % 2 === 1) {
            sum += item;
        }
    });

    console.log(sum);
    return sum;
}

sumOfOddNumbers([1, 4, 0, 9, -3]);
// 7. Create a function that takes an array of numbers and returns the sum of all the numbers divisible by 5 in the array.

function sumOfNumbersDivisibleByFive(array) {
    let sum = 0;

    array.forEach(function (item) {
        if (item % 5 === 0) {
            sum += item;
        }
    });

    return sum;
}

sumOfNumbersDivisibleByFive([1, 4, 50, 9, -3]);

function numbers_divisible_by_five(array) {
    array.map(function (items) {
        if (items % 5 === 0) {
            return items;
        }
    });
}
numbers_divisible_by_five([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 25, 56, 55, 65, 77]);

// 8. Create a function that takes an array of strings and returns the longest string in the array.
const fruits = ["apple", "orange", "banana", "pawpawpaw", "cherry"];

// for (const fruit of fruits) {
//     if (fruit > longestFruit) {
//         longestFruit = fruit

//     }
//  }
// fruits.filter(function (value) {
//     if (value > longestFruit) {
//         longestFruit=value
//     }
// })
// console.log(longestFruit);
//

// function longestFruit(value) {
//     let longestFruitStr = " ";
//     if (value > longestFruitStr) {
//         longestFruitStr = value
//     }
//     return longestFruitStr
// }
// let fruitLongest = fruits.filter(longestFruit)
// console.log(fruitLongest);

function longestFruitFnc(array) {
    let longestFruit = " ";
    array.filter(function (value) {
        if (value > longestFruit) {
            longestFruit = value;
        }
        return longestFruit;
    });
}
longestFruitFnc(["apple", "orange", "banana", "pawpawpaw", "cherry"]);

// 9. Create a function that takes an array of strings and returns the shortest string in the array.
// let boys = ["John", "Phillip", "Sam", "Peter"];
// let min = St.min.apply(
//     Math,
//     boys.map(function (str) {
//         console.log(str.length);
//         return str.length;
//     })
// );

function shortestStringFnc(array) {
    let shortest = " ";
    array.forEach(function (value) {
        if (value < shortest) {
            shortest = value;
        }
        console.log("shortest", shortest);
        return shortest;
    });
}
shortestStringFnc(["apple", "orange", "banana", "pawpawpaw", "cherry"]);
//console.log(min);

// 10. Create a function that takes an array of numbers and filters out all the odd numbers in the array.
// const num5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let oddNumbers = num5.filter(oddOfNum5)
// function oddOfNum5(odd) {
//     if (odd % 2 === 1) {
//         return odd;
//     }
// }
// console.log(oddNumbers);

function oddOfNumbers(array) {
    array.filter(function (values) {
        if (values % 2 === 1) {
            return values;
        }
    });
}
oddOfNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// const oddNumbers = num5.filter(function (numbers) {
//     if (numbers % 2 === 1) {
//         return numbers;
//     }
// })
// console.log(oddNumbers);

// 11. Create a function that takes an array of numbers and filters out all the even numbers in the array.
const num6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNumbers = num6.filter(function (even) {
//     if (even % 2 === 0) {
//         return even;
//     }
// })
// console.log(evenNumbers);
// let evenOfNum6 = num6.filter(evenNumbers)
// function evenNumbers(even) {
//     if (even % 2 === 0) {
//         return even;
//     }

// }
// console.log(evenOfNum6);

function evenNumbers(array) {
    array.map(function (even) {
        if (even % 2 === 0) {
            return even;
        }
    });
}
evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// 12. Create a function that takes an array of strings and returns the array with all the strings capitalized.
const stringsColor = ["violet", "blue", "red", "black"];

// function toCapitalise(arr) {
//     return arr.toUpperCase();

// }
// let capitalizedColor = stringsColor.map(toCapitalise)
// console.log(capitalizedColor);

// toCapitalise(arr)
function toCapitalise(array) {
    array.map(function (items) {
        items.toUpperCase();
    });
}
toCapitalise(["violet", "blue", "red", "black"]);
