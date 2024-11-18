// function findFirstOccurrence(arr, value) {
//     let notFound=-1;
//   for(let i=0;i<=arr.length ; i++){
      
//     if(arr[i]===value){
//         notFound=i;
   
//       break;
//    }
   
//   }
//   console.log(notFound);
  
//   }
//   findFirstOccurrence([2,3,4,6],2);

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
// findFirstOccurrence([1,2,3,4,5,2],2);

function containsValue(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return true;
        }
    }
    return false;
}

// Testing containsValue function
console.log(containsValue([1, 2, 3, 4,3], 3)); // Output: true
console.log(containsValue([1, 2, 3, 4], 5)); // Output: false

// Function to check if an array is empty
function isArrayEmpty(arr) {
    if (arr.length === 0) {
        return true;
    }
    return false;
}

// Testing isArrayEmpty function
console.log(isArrayEmpty([]));          // Output: true
console.log(isArrayEmpty([1, 2, 3]));   // Output: false
