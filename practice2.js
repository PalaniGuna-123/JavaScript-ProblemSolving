// 1.  Average of Scores
//Write a program to create an array of 5 exam scores. Calculate and print the average of the scores.
 let scores =[2,3,4,2,2,1];
 let total=0;
 for(i=0;i<scores.length;i++){
     total+=scores[i];
     average=total/scores.length
 }
 console.log(average)

 //2. Finding Maximum Score
//You have an array of test scores for 7 students. Write a program to find and print the highest score using the Math.max() function along with the spread operator.
let testScores = [78, 85, 95, 88, 92, 76, 81];
let highestScore = Math.max(testScores[i]);
console.log("The highest score is: " + highestScore);

//another method

let test=[98,87,87,43,99]
let temp=0;
for(i=0;i<test.length;i++){
    if(test[i]>temp){
        temp=test[i];
    }
}
console.log("the highest num  " +temp)

//3. Number System Conversion
//Write a program that stores an array of 3 decimal numbers. Convert each number to its binary equivalent using the toString(2) method and print the binary values

let decimalNumbers = [5, 12, 20];
decimalNumbers.forEach(function(number) {
    let binaryValue = number.toString(2);
    console.log(`Decimal: ${number}, Binary: ${binaryValue}`);
});

let decimal =[12,13,14,15];
decimal.forEach(function(angry){
    let value= angry.toString(2);
    console.log(`deimal:  ${angry}, binary value ${value}`)
})


//4. Boolean Algebra (AND Operation)
//Write a program that takes two arrays of Boolean values (e.g., [true, false, true] and [false, true, true]). Perform an AND operation on corresponding elements from both arrays and store the result in a new array. Print the resulting array.
let array1=[true,false,false];
let array2=[false,false,true];
let newArray=[];
for(i=0;i<array1.length;i++){
    newArray.push(array1[i]&&array2[i])
}
console.log(newArray)

//5. Percentage Increase in Prices
//Create an array of old prices for 4 items and another array with the new prices. Write a program to calculate and print the percentage increase for each item.
let oldPrice =[20,30,40,50];
let newPrice =[30,40,50,60];

let increase=[];
for(let i=0;i<oldPrice.length;i++){
    let calculate=newPrice[i]-oldPrice[i];
    let percentage=Math.trunc((calculate/oldPrice[i])*100);
    increase[i]=percentage;

  
}
console.log(increase)


//6. Set Theory (Union of Two Sets)
//Write a program that takes two arrays of numbers representing two sets. Create a new array that represents the union of both sets (without duplicates) and print the result.


