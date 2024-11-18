// let altitude = 1000;

// while (altitude > 0) {
//   altitude -= 10;
//   console.log(`Current altitude: ${altitude}ft`);

//   if (altitude <= 0) {
//     console.log("Flight arrived");
//   }
// }
// let str="pranesh";
// console.log(str.split("").map(x=>x.charCodeAt()-96).reduce((a,b)=>a+b));



    // function isPrime(num) {
    //   if (num <= 1) return false;
    //   for (let i = 2; i <= Math.sqrt(num); i++) {
    //     if (num % i === 0) return false;
    //   }
    //   return true;
    // }
    // console.log(isPrime(123))



    // function multiples(num){
    //   if(num%5===0){
    //     console.log("Yes")
    //   }
    //   else  {
    //     console.log("no")
    //   }
    // }
    // multiples(43)

function dumof(a,b){
  sum=0;
  for(i=a;i<=b;i++){
    if(i%2!==0){
      sum+=i
    }
  }
  return sum;
}
console.log(dumof(5,10));

function swap(a,b){
  return [b,a];
}
console.log(swap(5,10));

function fac(n){
  total=0;
  sum=1;
  for(i=1;i<=n;i++){
    
    sum*=i
    total=total+ sum;
  }
  return total;
}
console.log(fac(5));

// function multiple(a,b){
//   let product=a*b;
//   if(product%5===0){
//     return true;
//   }

// }

// function multiples(n){
//   let result='';
//   for(i=n;i>=1;i--){
//     result+=(i*11)+' ';
//   }
//   return result;
// }
// console.log(multiples(5));

// // function printPattern(n) {
// //   for (let i = 1; i <= n; i++) {
// //       let str = ' '.repeat(n - i);  // Create the leading spaces
// //       for (let j = 1; j <= i; j++) {
// //           str += j + ' ';
// //       }
// //       console.log(str.trim());  // Trim to remove the trailing space
// //   }

// //   for (let i = n - 1; i >= 1; i--) {
// //       let str = ' '.repeat(n - i);  // Create the leading spaces
// //       for (let j = 1; j <= i; j++) {
// //           str += j + ' ';
// //       }
// //       console.log(str.trim());  // Trim to remove the trailing space
// //   }
// // }

// // printPattern(3);

// function printPattern(n) {
//   // Function to generate leading spaces
//   function printSpaces(count) {
//       let spaces = '';
//       for (let i = 0; i < count; i++) {
//           spaces += ' ';
//       }
//       return spaces;
//   }

//   // Top half of the pattern
//   for (let i = 1; i <= n; i++) {
//       let str = printSpaces(n - i);  // Create the leading spaces
//       for (let j = 1; j <= i; j++) {
//           str += j + ' ';
//       }
//       console.log(str.trim());  // Trim to remove the trailing space
//   }

//   // Bottom half of the pattern
//   for (let i = n - 1; i >= 1; i--) {
//       let str = printSpaces(n - i);  // Create the leading spaces
//       for (let j = 1; j <= i; j++) {
//           str += j + ' ';
//       }
//       console.log(str.trim());  // Trim to remove the trailing space
//   }
// }

// printPattern(3);

function maximum(num){
  let large=num.maxvalue();
  for(i=0;i<num.length;i++){
    if(num[i]>large){
      large=num[i];
    }
  }
  return large;
}
console.log(maximum([-2,-4,-5]));

let find=[7,2,9,4,3];
let max=Number.MIN_VALUE;
let min=Number.MAX_VALUE;
for(i=0;i<find.length;i++){
    if(find[i]>max){
        max=find[i];         
    }
    if(find[i]<min){
        min=find[i];
    }
}
console.log(`max number is ${max} min number ${min}`);





