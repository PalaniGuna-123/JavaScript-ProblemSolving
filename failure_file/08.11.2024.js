function isDivisibleByTwo(num) {
    if (num % 2 === 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}

isDivisibleByTwo(10); 
isDivisibleByTwo(7);  


function averageOfArr(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let average = sum / arr.length;
    console.log(average);
}

averageOfArr([10, 20, 30, 40]); 
averageOfArr([5, 10, 15]);  

function sumOfEvenNums(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i];
        }
    }
    console.log(sum);
}


sumOfEvenNums([1, 2, 3, 4, 5, 6]);     
sumOfEvenNums([7, 11, 18, 21, 22]);  

function printNumberSign(num) {
    if (num > 0) {
        console.log("Positive");
    } else if (num < 0) {
        console.log("Negative");
    } else {
        console.log("Zero");
    }
}


printNumberSign(5);  
printNumberSign(-3);  
printNumberSign(0);   

function sumOfOddNums(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            sum += arr[i];
        }
    }
    console.log(sum);
}

sumOfOddNums([5, 1, 8, 4, 10]); 
sumOfOddNums([3, 7, 2, 9, 11]);



