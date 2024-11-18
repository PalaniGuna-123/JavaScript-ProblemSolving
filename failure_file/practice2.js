function isProductDivisibleBy11(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        product *= arr[i];
    }
    if (product % 11 === 0) {
        console.log("yes");
    } else {
        console.log("no");
    }
}

isProductDivisibleBy11([1, 2, 11]); 
isProductDivisibleBy11([1, 2, 3]); 

function printPattern(n) {
    let result = "";
    for (let i = 1; i <= n; i += 2) {
        result += i;
        if (i + 2 <= n) {
            result += " # ";
        }
    }
    console.log(result);
}


printPattern(10); 

function isMUltipleTwele(array){
    let product=1;
    for(i=0;i<array.length;i++){
        product*=array[i];
    }
    if(product%12===0){
        console.log("yes");
        
    }
    else{
        console.log("no");
    }
}
isMUltipleTwele([6,6])

function calculateGymFee(attendanceDays) {
    let totalFee = 0;

    for (let i = 1; i <= attendanceDays; i++) {
        if (i <= 10) {
            totalFee += 5;
        } else if (i <= 20) {
            totalFee += 3;
        } else {
            totalFee += 2;
        }
    }

    console.log("Total Fee: " + totalFee);
}

calculateGymFee(25); 




