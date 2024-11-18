// // Print "Hello, World!" to the console.
// console.log('HEllo world!');

// // Write a program that takes two numbers as input and prints their sum.
// let a=3;
// let b=9
// console.log(a+b);

// // Find the largest of three numbers.
// function num(arr){
//     let array=0;
//     for(i=0;i<=arr.length;i++){
//         if(arr[i]>array){
//             array=arr[i]
//         }
//     }
//     return array;
// }
// console.log(num([1,2,3,4,5,6,7]));

// // Check if a number is even or odd.
// function checkOdd(num){
//     if(num%2===0){
//         console.log('yes');
        
//     }
//     else{
//         console.log('no');
//     }
      
// }
// checkOdd(122)
// // Write a program to check if a number is positive, negative, or zero.
// function program(num){
//     if(num>0){
//         console.log('its possitive');
        
//     }
//     else if(num<0){
//         console.log('Its negattive');
        
//     }
//     else{
//         console.log('zero');
        
//     }
// }
// program(-2);
// program(2);
// program(0);



// // Find the factorial of a number.
// function fac(n){
//     let sum=1;
//     for(let i=1;i<=n;i++){
//         sum*=i;
//     }
//     console.log(sum);
    
// }
// fac(4);
// // Reverse a string.
// function dar(str){
//     let reverse='';
//     for(i=str.length-1;i>=0;i--){
//         reverse+=str[i];
//     }
//     return reverse;
// }
// console.log(dar('hello'));
// // string
// function countVowels(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//         if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
//             char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
//             count++;
//         }
//     }
//     return count;
// }
function vowels(str){
    let count=0;
    for(let i=0;i<=str.length;i++){
        char=str[i];
        if(char==='a'|| char==='e'|| char==='i' || char==='o' || char==='u'||
        char==='A'|| char==='E'|| char==='I' || char==='O' || char==='U'
            
        ){
            count++;

        }
    }
    return count;
}
console.log(vowels('gunaa'));

// let inputString = "Hello Guna super hero";
// console.log("Number of vowels:", countVowels(inputString));

// Count the number of words in a sentence.

// let inputSentence = "Hello, this is a test sentence!";
// let hen=inputSentence.split(" ");
// let count=0;
//  for(i=0;i<hen.length;i++){
//      count=count+1; 
//     }

// console.log(count);
function gap(a,b){
    a=a+b;
    b=a-b;
    a=a-b;
    console.log(a,b);
    
}
gap(5,6)
function reverseNumber(num) {
    let reversed = 0;
    while (num !== 0) {
        reversed = reversed * 10 + (num % 10);
        num = Math.floor(num / 10);
    }
    return reversed;
}
console.log(reverseNumber(12345)); // Output: 54321
function dan(str){
    console.log(str.length)
}
dan('hello')


function middleElement(arr) {
    let middleIndex = Math.floor(arr.length / 2);
    return arr[middleIndex];
}
console.log(middleElement([1, 2, 3, 4, 5])); // Output: 3

function find(arr1){
    let middle=Math.floor(arr1.length/2);
    console.log(arr1[middle]);
    
}
find([2,3,4,5,6,7])

function finds(arr2){
    let raw=Math.floor(arr2.length/2);
    console.log(arr2[raw]);
    
}
finds([1,2,3,4,5,6,7])



// Write a program to find the length of a string.
// he1='hello'
// console.log(he1.length)
// Check if a number is prime.
function isPrime(num){
    if(num<=1){
        return false;
    }
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i===0){
            return false;
            
        }
    }
    return true;
    
}
console.log(isPrime(17));

// Write a program to check if a number is a palindrome.
function isPalindrome(num){
    let first=num.split('').reverse().join('');
    if(first===num){
        return true;
    }
    else{
        return false;
    }
}
console.log(isPalindrome('amma'));

// Swap two numbers without using a third variable.
function swap(a,b){
    return b,a;

}
console.log(swap(5,6));
let a = 5, b = 10;
a = a + b;
b = a - b;
a = a - b;
console.log(`a: ${a}, b: ${b}`);


// Find the sum of the digits of a number.
function sumOfDigits(num) {
    let sum = 0;
    while (num !== 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    return sum;
  }
  console.log(sumOfDigits(123)); // Output: 6
  
// Print the Fibonacci sequence up to a given number.
function printFibonacci(n) {
    let a = 0, b = 1, temp;
    while (a <= n) {
      console.log(a);
      temp = a + b;
      a = b;
      b = temp;
    }
  }
  printFibonacci(10);
  
// Find the greatest common divisor (GCD) of two numbers.
// function gcd(a,b){
//     while(b!==0){
//         let temp=b;
//         b=a%b;
//         a=temp;
    
//     }
//     return a;
// }
// console.log(gcd(12,6));


  
// Find the least common multiple (LCM) of two numbers.
function gcd(a,b){
    while(b!==0){
        let temp=b;
        b=a%b;
        a=temp;
    }
    return a;
}
console.log(gcd(4,2));


// Write a program that prints all prime numbers up to a given number.
// function pri(num){
//     if(num<=1){
//         return false;
//     }
//     for(i=2;i<=Math.sqrt(num[i]);i++){
//         if(num%i==0){
//             return false;
//         }
//     }
//     return true;
//     function prime(re){
//         for(i=2;i<=re;i++){
//             if(pri(i)){
//                 console.log(i);
                
//             }
//         }
//     }
// }
// prim
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  function printPrimes(upTo) {
    for (let i = 2; i <= upTo; i++) {
      if (isPrime(i)) {
        console.log(i);
      }
    }
  }
  printPrimes(20);
  


// Create a simple calculator (addition, subtraction, multiplication, and division).
function calculator(a, b, operator) {
    switch (operator) {
      case '+': return a + b;
      case '-': return a - b;
      case '*': return a * b;
      case '/': return b !== 0 ? a / b : 'Division by zero';
      default: return 'Invalid operator';
    }
  }
  console.log(calculator(10, 5, '/')); // Output: 15
  
// Write a program to check if a string is a palindrome.
// Create a program that finds the largest number in an array.
function large(num){
    temp=0;
    for(let i=0;i<=num.length;i++){
        if(num[i]>temp){
         temp=num[i];
            
        }
    }
    return temp;
}
console.log(large([1,2,3,4,5,6,7,7,8]));

// Create a program to find the smallest number in an array.
function small(gum){
    let smas=gum[0];
    for(i=0;i<=gum.length;i++){
        if(gum[i]<smas){
            smas=gum[i];
        }
    }
    return smas;
}
console.log(small([1,2,3,3,45,6,7,8]));

// Write a program to reverse an array.
function dir(dov){
    let reverse='';
    for(i=dov.length-1;i>=0;i--){
        reverse+=dov[i]
        if(i>0){
            reverse+=',';
        }
    }
    return reverse;
}
console.log(dir(['guna',"game",'doctor']));

// Write a program to remove duplicates from an array.
function far(jar){
    for(let i=0;i<=jar.length;i++){
        for(let j=0;j<=jar.length;j++){

        }
    }
}
// Merge two arrays into one.
// Sort an array in ascending order.
// Sort an array in descending order.
// Write a program to find the sum of all numbers in an array.
function sumOf(num){

}
// Create a program that prints all odd numbers in an array.
// Create a program that prints all even numbers in an array.
// Find the average of numbers in an array.
// Check if an array contains a specific number.
// Create a program to find the second largest number in an array.
// Create a program that checks if an array is sorted in ascending order.
// Find the missing number in a sequence of consecutive numbers.
// Write a program to find the index of a number in an array.
// Create a program that removes the first element of an array.
// Create a program that removes the last element of an array.
// Write a program to find the most frequent element in an array.
// Write a program to find the sum of all odd numbers between 1 and 100.
// Write a program to print a multiplication table of a given number.
// Write a program to print a pyramid pattern of stars.
// Write a program to check if a year is a leap year.
// Write a program to find the area of a circle.
// Write a program to find the perimeter of a rectangle.
// Write a program to find the area of a triangle.
// Write a program to check if a string contains only letters.
// Write a program that converts Fahrenheit to Celsius.
// Write a program that converts Celsius to Fahrenheit.
// Write a program that finds the smallest divisor of a number greater than 1.
// Write a program to print the first n prime numbers.
// Write a program that counts the number of occurrences of a character in a string.
// Write a program to find the longest word in a sentence.
// Write a program that checks if a string has at least one uppercase letter.
// Create a program that prints a triangle pattern of stars.
// Create a program that calculates the power of a number (base^exponent).
// Write a program that finds the factorial of a number using recursion.
// Write a program to generate random numbers within a specific range.
// Write a program that removes all spaces from a string.
// Write a program that capitalizes the first letter of each word in a string.
// Write a program that reverses the words in a sentence.
// Write a program to remove a specific element from an array.
// Write a program to check if a string contains only numbers.
// Write a program that converts a number to binary.
// Write a program that converts a binary number to decimal.
// Write a program that converts a decimal number to hexadecimal.
// Write a program to find the common elements between two arrays.
// Write a program that checks if an array contains all the numbers from 1 to n.
// Write a program that sums up all numbers from 1 to n.
// Write a program that prints all the numbers from 1 to n, except for multiples of 3 and 5.
// Write a program that checks if a string contains a specific substring.
// Write a program to check if a string has only lowercase letters.
// Write a program to check if two strings are anagrams.
// Write a program to print a multiplication table up to 12.
// Write a program that checks if a number is a perfect square.
// Write a program to convert a string to lowercase.
// Write a program to convert a string to uppercase.
// Write a program to find the missing letter in a string.
// Create a program to find the largest sum of two numbers in an array.
// Write a program that finds the sum of the first n natural numbers.
// Create a program that counts the number of words in a string.
// Create a program that prints the first n Fibonacci numbers.
// Create a program that sorts the letters of a string in alphabetical order.
// Write a program that checks if an array is symmetric.
// Write a program that removes an element from a specific index of an array.
// Write a program that returns the first non-repeated character in a string.
// Create a program that checks if a string is empty or contains only whitespace.
// Write a program that returns the longest substring without repeating characters.
// Write a program that removes the first character of a string.
// Write a program to count the number of elements in an array greater than a given value.
// Write a program to find the greatest common divisor (GCD) of multiple numbers.
// Write a program to find the lowest common multiple (LCM) of multiple numbers.
// Write a program to find the intersection of two arrays.
// Write a program to check if a given number is a Armstrong number.
// Write a program to find the nth Fibonacci number using recursion.
// Write a program that returns the difference between the largest and smallest numbers in an array.
// Write a program that checks if an array is a palindrome.
// Write a program that removes duplicate words from a sentence.
// Create a program that returns the most frequent element in an array.
// Write a program that finds the largest sum of a contiguous subarray within an array.