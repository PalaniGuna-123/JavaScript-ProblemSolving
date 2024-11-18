function range(start,end){
    for(let i=start;i<=end;i++){
        if(i%6===0){
            console.log(i);
            
        }
    }
}
range(1,50)

// const numbers = [30, 27, 24];
// const multiplier = 11;

// function multiply(a, b) {
//     let result = 0;
//     for (let i = 0; i < b; i++) {
//         result += a;
//     }
//     return result;
// }

function calculateGrade(score) {
    if (score >= 90) {
        console.log("Grade: A");
    } else if (score <= 80) {
        console.log("Grade: B");
    } else if (score <= 70) {
        console.log("Grade: C");
    } else if (score >= 60) {
        console.log("Grade: D");
    } else {
        console.log("Grade: F");
    }
}
calculateGrade(70)

function isMultipleOfEleven(N) {
    if (N / 11 === 0) { 
        console.log("yes");
    } else {
        console.log("no");
    }
}

// Example usage
let N = 49;
isMultipleOfEleven(N);

