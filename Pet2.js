// // Write a function isEvenOrOdd(num) that takes a number as input and returns "Even" if the number is even, and "Odd" if the number is odd.

// // isEvenOrOdd(7); // Output: "Odd"
// // isEvenOrOdd(4); // Output: "Even"

// // Write a function avgArray(arr) that takes an array of numbers and returns the average of all the elements.
// // avgArray([1, 2, 3, 4, 5]); // Output: 3
// // Write a function countPositivesAndNegatives(arr) that takes an array of integers and prints the count of positive and negative numbers.
// // countPositivesAndNegatives([1, -2, 3, -4, 5, -6]); // Output: { positive: 3, negative: 3 }
// // Write a function findLargest(arr) that takes an array of numbers and returns the largest number in the array.
// // findLargest([10, 50, 3, 98, 23]); // Output: 98


// // Write a function countVowels(str) that takes a string and returns the number of vowels (a, e, i, o, u) in the string.
// // countVowels("javascript"); // Output: 3

// // Write a function containsValue(arr, value) that checks if a specific value is present in an array. Return true if found, otherwise false. Do not use inbuilt functions.
// //  	containsValue([1, 2, 3, 4], 3); // Output: true
// // containsValue([1, 2, 3, 4], 5); // Output: false

// // Write a function isArrayEmpty(arr) that returns true if an array is empty, otherwise false.
// // isArrayEmpty([]);          // Output: true
// // isArrayEmpty([1, 2, 3]);   // Output: false

// function isEven(num){
//     if(num%2===0){
//         return "is even"
//     }
//     else{
//         return "is odd"
//     }
// }
// console.log(isEven(10));
// //count positive and negative

// // function countPositivesAndNegatives(arr) {
// //     let counts = { positive: 0, negative: 0 };

// //     arr.forEach(num => {
// //         if (num > 0) {
// //             counts.positive++;
// //         } else if (num < 0) {
// //             counts.negative++;
// //         }
// //     });

// //     console.log(counts);
// // }

// // countPositivesAndNegatives([1, -2, 3, -4, 5, -6]); 

// // function count(arr){
// //     let count={positive:0,negative:0};
// //     for(i=0;i<arr.length;i++){
// //         if(num>0){
// //             count.positive++
// //         }
// //         else if(num<0){
// //             count.negative++;
// //         }
// //     }
// //     return count;
// // }
// // let arr=[1, -2, 3, -4, 5, -6]
// // console.log(count(arr));


// // function countPositivesAndNegatives(arr) {
// //     let positiveCount = 0;
// //     let negativeCount = 0;
// // for (let i=0; i<arr.length; i++){
// //         if (arr[i] > 0) {
// //             positiveCount++;
// //         }
// //         else if (arr[i] < 0){
// //             negativeCount++;
// //         }
// //     }
// // console.log("Positive numbers:", positiveCount);
// // console.log("Negative numbers:", negativeCount);
// // }
// // countPositivesAndNegatives([1, -2, 3, -4, 5, 0]);

// //Write a function countPositivesAndNegatives(arr) that takes an array of integers and prints the count of positive and negative numbers.
// // countPositivesAndNegatives([1, -2, 3, -4, 5, -6,-7,-8]); // Output: { positive: 3, negative: 3 };

// function countPositivesAndNegatives(array){
//     let positiveCount=0;
//     let negativeCount=0;
//     for(i=0;i<array.length;i++){
//         if(array[i]>0){
//             positiveCount++;
//         }
//         else if(array[i]<0){
//             negativeCount++;
//         }
//     }
//     console.log(positiveCount);
//     console.log(negativeCount);
    
    

//     }
//     countPositivesAndNegatives([1, -2, 3, -4, 5, -6,-7,-8])

//     //findLargest([10, 50, 3, 98, 23])

//     let findLargest=[10, 50, 3, 98, 23];
//     let large=0;
//     for(i=0;i<findLargest.length;i++){
//         if(findLargest[i]>large){
//             large=findLargest[i]
//         }
//     }
//     console.log(large);

//     //count vowels

//     // function countVowels(str) {
//     //     let count = 0;
//     //     for (let i = 0; i < str.length; i++) {
//     //         if ('aeiouAEIOU'.includes(str[i])) {
//     //             count++;
//     //         }
//     //     }
//     //     return count;
//     // }
//     // console.log(countVowels("DHANDIYA ATTAM"));

// //    function countVowels(str) {
// //     let count=0;
// //     for(i=0;i<str.length;i++){
// //         if('aeiouAEIOU'.includes(str[i])){
// //             count++;
// //         }
// //     }
// //     return count;
// //    }
// //   console.log(countVowels("guna"));

// function vowels(str){
//     let count=0;
//     for(i=0;i<str.length;i++){
//         if('aeiouAEIOU'.includes(str[i])){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(vowels('henry'));

// //dont use inbuild function;

// // function containsValue(arr, value){
// //     for(let i=0;i<arr.length;i++){
// //        if(arr[i] === value ){
// //       return true;
// //        }
// //    }
// //        return false;
// //    }
// //    console.log(containsValue([1, 2, 3, 4], 3));
// //    console.log(containsValue([1, 2, 3, 4], 5));

  
// //    let input = [1,2,3,4] //[24,12,8,6]

// //    [3,2,1,5,6,4] 
// let input = [1, 2, 3, 4];
// let output = [];

// for (let i = 0; i < input.length; i++) {
//   let product = 1;
//   for (let j = 0; j < input.length; j++) {
//     if (i !== j) {
//       product *= input[j];
//     }
//   }
//   output.push(product);
// }

// console.log(output); // Output: [24, 12, 8, 6]



// function containValue(arr,value){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===value){
//             return true;
//         }
//     }
//     return false;
// }
// console.log(containValue([1,2,3,4,5,6],5));

// //empty array

// // function isArrayEmpty(arr){
// //     for(let i=0;i<arr.length;i++){
// //          if (arr[i] === arr[0]){
// //             return false;
// //         }
// //     }
// //     return true;
// // }
// // console.log(isArrayEmpty([5,6,7]));
// // console.log(isArrayEmpty([]));


// function empty(arr){
//     for(i=0;i<arr.length;i++){
//         if(arr[i]===arr[0]){
//             return false
//         }
//     }
//     return true;
// }
// console.log(empty([]));

let table=2;
let limit=10;
let i=1;
do{
    console.log(i+"X"+table+"="+(i*table));
    i++;
    

}
while(i<=limit);
let nums=[];
for(i=0;i<3;i++){
    nums.push([]);
    for(j=0;j<3;j++){
        nums[i].push(j);
    }
}
console.table(nums);

//for of loop

let array=['guna','pugal','saravana','logesh'];
for(name1 of array){
   console.log(name1);
   
   
}

let object ={
    name: "guna",
    age: 20,
    occupation:"student",
}
for(jects in object){
    console.log(jects+":"+object[jects]);
    

}
//lopping over objects
let user={
    name: "Guna",
    age: 20,
    city: "chennai",
    focus: "tech"
}
for(i=1;i<=10;i++){
    if(i===4){
        continue;
    }
    console.log(i);
    
}


let v=Math.floor(8.99)// after decimal value is neglected automaticaly.
console.log(v);


