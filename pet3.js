function isEvenOrOdd(num){
    if(num%2===0){
        return true;
    }
    else{
        return false;
    }

}
console.log(isEvenOrOdd(10));

function average(arr){
    let sum=0;
    for(i=0;i<arr.length;i++){
        sum+=arr[i];
       
    }
    return sum/arr.length
 
}
console.log(average([1,2,3,4,5]));

function countPositiveNeg(arr){
    let positiveCount=0;
    let negativeCount=0;
    for(i=0;i<arr.length;i++){
        if(positiveCount>arr[i]){
            positiveCount++;
        }
        else if(negativeCount<arr[i]){
            negativeCount++;
        }
    }
    console.log('positive'+positiveCount);
    console.log('negative'+negativeCount);
    
    
}
countPositiveNeg([-9,-7,-5,-4,-3,9,4])

function countAverage(num){
    let positiveCount=0;
    let negativeCount=0;
    for(i=0;i<num.length;i++){
        if(positiveCount>num[i]){
            positiveCount++;

        }
        else if(negativeCount<num[i]){
            negativeCount++;
        }
    }
    console.log(positiveCount);
    console.log(negativeCount);
    
    
}
countAverage([-9,8,2])

function countVowel(str){
    let count=0;
    for(i=0;i<str.length;i++){
        if('aeiouAEIOU'.includes(str[i])){
           count++;
        }
    }
    return count;
}
console.log(countVowel('guna saravanan'));

// function contains(arr,value){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===value){
//             return true;
//         }
//     }
//     return false;
// }

// console.log(contains([1,2,3,4,5,5,6],4));
//array and value

function containValue(arr,value){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===value){
            return true;
        }
    }
    return false;
}
console.log(containValue([1,2,3,4,5,6],3));
//

function containsValue(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return true;
        }
    }
    return false;
}

// Example usage:
console.log(containsValue([1, 2, 3, 4], 3)); // Output: true
console.log(containsValue([1, 2, 3, 4,5,6], 5)); // Output: false

function isArrayEmpty(arr){
    for(i=0;i<arr.length;i++){
        if(arr[i]===arr[0]){
            return false;

        }
    }
    return true;
}
console.log(isArrayEmpty([2,4]));


