function findMaxOfThree(a, b, c) {
    let max = a; 

    if (b > max) {
        max = b;
    }

    if (c > max) {
        max = c; 
    }

    return max;
}

console.log(findMaxOfThree(5, 10, 17)); 
// function findFirstOccurrence(arr, value) {
//     let notFound=-1;
//   for(let i=0;i<=arr.length ; i++){
      
//     if(arr[i]===value){
//       console.log(i);
//       break;
//    }
//   }
//   return notFound;
//   }
//   findFirstOccurrence([1,9,2,3,4,2],2)

// function findFirstOccurrence(arr, value) {
//     let index = -1;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === value) {
//             index =  i;
//             break;
//         }
//     }
//     console.log(index);
// }
// findFirstOccurrence([1,2,3,4,5,6,2],9);
// function sumOfDigit(N){
//     let total=0;
//     while(N>0){
//         total+=N%10;
//         N=Math.floor(N/10);
//     }
//     return total;
//   }
 
  function printEvenNumbersWithStar(n) {
    // Enter your code here
    let output = "";
    for(let i = 1; i <= n; i++) {
        if (i%2 == 0) {
            output += "* ";
        }
        else {
            output += ( 2 * i ) + " ";
        }
    }
    console.log(output);
}
printEvenNumbersWithStar(6);
function range(a,b){
    str='';
    for(i=a;i<=b;i++){
        if(i%5===0){
            if(str===''){
                str+=i;
            }
            else{
                str+=','+i;
            }
            
        }
    }
    return str;
}

console.log(range(5,90));

function table(n,r){
    for(i=r;i>=n;i--){
        console.log(`${n} * ${i}= ${n*i}`);   
    }  
}
table(5,10);
let inputSentence = "Hello, this is a test sentence!";
let hen=inputSentence.split(" ");
let count=0;
 for(i=0;i<hen.length;i++){
     count=count+1; 
    }

console.log(count);






 


