//Basic + Control Flow



//1. Even or Odd Number
// let a = 4;
// if(a%2 === 0){
//     console.log("Even");
// }else{
//     console.log("Odd");
// }



//2. Largest of Three Numbers
// let a = 10, b = 25, c = 15;
// if (a >= b && a >= c) {
//   console.log("Largest number is " + a);
// } else if (b >= a && b >= c) {
//   console.log("Largest number is " + b);
// } else {
//   console.log("Largest number is " + c);
// }



//3.Grade calculator
// let marks = 82;
// if (marks >= 90) {
//   console.log("Grade: A");
// } else if (marks >= 75) {
//   console.log("Grade: B");
// } else if (marks >= 50) {
//   console.log("Grade: C");
// } else {
//   console.log("Fail");
// }



//4. FizzBuzz Problem
// for (let i = 1; i <= 50; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }



//5. Palindrome String
// let str = "amam"; 
// let flag = true;
// for (let i = 0; i < str.length / 2; i++) {
//   if (str[i] !== str[str.length - 1 - i]) {
//     flag = false;
//     break;
//   }
// }

// if (flag) {
//   console.log(str + " is a palindrome");
// } else {
//   console.log(str + " is not a palindrome");
// }




//Arrays



//6. Sum of array
// let arr = [2, 4, 6, 8, 10];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log("Sum of array elements:", sum);



//7. Max element in array
// let numbers = [2, 4, 6, 8, 10];
// let max = numbers[0]; 

// for (let i = 1; i <= numbers.length; i++) {
//   if (numbers[i] > max) {
//     max = numbers[i]; 
//   }
// }
// console.log("Maximum element in array:", max);



//8. Reverse an Array
// let arr = [1,2,3,4,5];
// let reversed = [];
// for(let i = arr.length -1;i >= 0;i--){
//     reversed.push(arr[i]);
// }
// console.log(reversed);



//9.Remove Duplicates
// let arr = [1,2,2,3,4,4,5];
// let non=[];
// for(let i = 0;i<arr.length;i++){
//     if(non.includes(arr[i])){
//         continue;
//     }else{
//         non.push(arr[i]);
//     }
// }
// console.log(non);



//10. Second largest number
// let arr = [10, 20, 4, 45, 99];
// let largest = -Infinity;
// let secondLargest = -Infinity;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//         secondLargest = largest;
//         largest = arr[i];
//     } else if (arr[i] > secondLargest && arr[i] != largest) {
//         secondLargest = arr[i];
//     }
// }
// console.log(secondLargest);



//Functions+Arrays+Loops



//11. Factorial of a number
// function fact(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     return n * fact(n - 1);
//   }
// }
// console.log(fact(4)); 



//12. Count vowels in a string
// function countVowels(str) {
//     let count = 0;
//     const vowels = "aeiouAEIOU";
//     for (let char of str) {
//         if (vowels.includes(char)) count++;
//     }
//     return count;
// }
// console.log(countVowels("Hello World")); 




//13. Check Prime Number
// function isPrime(n) {
//     if (n <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) return false;
//     }
//     return true;
// }
// console.log(isPrime(17));



//14. Array Rotation
//Array rotation
// function rotateArray(arr, k) {
//     k = k % arr.length;
//     return arr.slice(k).concat(arr.slice(0, k));
// }
// console.log(rotateArray([1, 2, 3, 4, 5], 2));



//15. Frequency Counter
// function countFrequency(arr){
//     let count = {};
//     arr.forEach(item => count[item] = (count[item] || 0) +1);
//     return count;
// };
// let arr = [1,2,2,3]
// console.log(countFrequency(arr));