// function isPrime(num) {
//     if (num <= 1) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }
// // Example usage:
// console.log(isPrime(1)); // Output: true (17 is a prime number)
// console.log(isPrime(2)); // Output: false (15 is not a prime number)


// // function isPrime(num){
// //     if(num<=1){
// //         return false;
// //     }
// //     for(let i=2;i<=Math.sqrt(num);i++){
// //         if(num%i===0){
// //             return false;
// //         }
// //     }
// //     return true;
// // }

// // console.log(isPrime(17))


// function isPrime(num){
//     if(num<=1){
//         return false;
//     }
//     for(let i=2;i<=Math.sqrt(num);i++){
//         if(num%i===0){
//             return false
//         }
//     }
//     return true;
// }
// console.log(isPrime(17));
// console.log();

// // star pattern

// function pattern(n){
//     for(let i=0;i<=n;i++){
//         sum ='';
//         for(let j=0;j<=n-i-1;j++){
//             sum+=' ';
//         }
//         for(let k=0;k<=2*i+1;k++){
//             sum+='*';
//         }
//         console.log(sum);
        
//     }
//     return sum;
// }
// pattern(6)


// //reverse

// function reverseString(str) {
//     return str.split('').reverse().join('');
// }

// // Example usage:
// console.log(reverseString("hello")); // Output: "olleh"
// console.log(reverseString("JavaScript")); // Output: "tpircSavaJ"


// function printCharacter(ch, n) {
//     let result = ''; // Initialize an empty string
//     for (let i = 0; i < n; i++) {
//         result += ch; // Append the character to the string
//     }
//     console.log(result); // Print the final string
// }

// Example usage:

//printCharacter('*', 5); // Output: *****

function printCharacter1(ch,n){
    let result='';
    for(let i=0;i<n;i++){
        result+=ch;
    }
    console.log(result);
}
printCharacter1('*',5)

// let sum = 0;
//   while (N > 0) {
//     sum += N % 10;
//     N = Math.floor(N / 10);
//   }
//   console.log(sum);

  function sumOfDigit(N){
    let total=0;
    while(N>0){
        total+=N%10;
        N=Math.floor(N/10);
    }
    return total;
  }
  console.log(sumOfDigit(1234));
 
  function oddNUm(n){
    let str='';
    for(i=0;i<=n;i++){
        if(i%2!==0){
            str+=i+',';
            // if (i < n - 1) {
            //     str += ','; // Add comma only if not the last odd number
            // }

        }
    }
    
    return str.slice(0,-2);

  }
  console.log(oddNUm(10));
  


  function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function findPrimesInRange(start, end) {
    let primes = [];
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

// Example usage:
console.log(findPrimesInRange(10, 20)); // Output: [11, 13, 17, 19]
console.log(findPrimesInRange(1, 15));  // Output: [2, 3, 5, 7, 11, 13]


function oddNum(n){
    str='';
    for(let i=1;i<=n;i++){
        if(str===''){
            str+=i;            
        }
        else{
            str+=','+i;
        }     
    }
    return str;
}
console.log(oddNum(10));

// function oddNumber(n){
//     str='';
//     for(let i=1;i<=n;i++){
//         if(i%2!==0){
//             str+=i+','.slice(0,-1);
//         }
//     }
//     return str;
// }
// console.log(oddNumber(10));


// Prints * * * * if char is * and n is 4
function printCharNtime(char, n) {
    let outputStr = "";
    // Loops over i to n
    for(let i = 1; i <= n; i++) {
        //if i === 1 append * in the outputstring
        if(i === 1) {
            outputStr += "*"
        }

        // * * * *
        // else append SPACE*
        else {
            outputStr += " *"
        }
    }
    console.log(outputStr);
}
hallowSquare(8);






