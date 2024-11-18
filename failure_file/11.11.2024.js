


// function hash(n){
//     let str='';
//     for(i=n;i>=1;i--){
//         if(i%2!==0){
//             str+=i;
//         }
//         else{
//             str+=' # '
//         }
//     }
//     console.log(str.trim());
    

function three(n){
    let str='';
    for(i=0;i<=n;i+=3){
        if(i%2!==0){
            str+=i;

        }
        else{
            str+=' % ';
        }
    }
    console.log(str);
    
}
three(20);
three(40);
// Odd or Even: Write a program that checks if a number is odd or even.
function oddEven(num){
    if(num%2===0){
        console.log('it is even number');
        
    }
    else{
        console.log('it is odd number');
        
    }
}
oddEven(777);
// Positive or Negative: Create a program to determine if a number is positive, negative, or zero.
function testing(num){
    if(num>0){
        console.log('it is a possitive');
        
    }
    else if(num<0){
        console.log('its a negative');
        
    }
    else{
        console.log('zero');
        
    }
}
testing(9);
// Greater of Two Numbers: Write a program that takes two numbers and prints the greater one.
// function   findGreaterNumber(num1, num2) {
//     if (num1 > num2) {
//         console.log(`The greater number is: ${num1}`);
//     } else if (num2 > num1) {
//         console.log(`The greater number is: ${num2}`);
//     } else {
//         console.log("Both numbers are equal.");
//     }
// }
// findGreaterNumber(10, 20);
function findGreat(num1,num2){
    if(num1>num2){
        console.log(`this is the greater number${num1}`);
        
    }
    else if(num2>num1){
        console.log(`this is the greater number: ${num2}`);
        
    }
    else{
        console.log(`both numbers are equal`);
        
    }
}
findGreat(12,92);


// Leap Year Check: Create a program to check if a given year is a leap year or not.
function isLeap(year){
    if((year%4==0 && year%100!==0) || (year%400===0)){
        console.log(`this ${year} is leap year`);
        
    }
    else{
        console.log(`this is a not leap year`);
        
    }
}
isLeap(2013);
// Voting Eligibility: Check if a person is eligible to vote based on their age (age should be 18 or above).
function Voting(age){
    if(age>=18){
        console.log(`this age ${age}is eligible`);
        
    }
    else{
        console.log(`age restricted`);
        
    }
}
Voting(12);

// Divisible by 5 and 11: Write a program to check if a number is divisible by both 5 and 11.
function write(n){
    if(n%5===0 && n%11===0){
        console.log(`it both divisible`);
        
    }
    else{
        console.log(`it is false this condition`);
        
    }
}
write(77);
// Grade Calculator: Print a grade based on a score: A (90-100), B (80-89), C (70-79), D (60-69), F (below 60).
function gradeCalculater(score){
    if(score>=90 && score<=100){
        console.log('A');
        
    }
    else if(score >=80 && score <90){
        console.log('B');
        
    }
    else if(score >=70 && score <80){
        console.log('C');
        
    }
    else if(score >=60 && score <70){
        console.log('D');
        
    }
    else{
        console.log('F');
        
    }
}
gradeCalculater(34);
gradeCalculater(100);
gradeCalculater(67);


// Character Check: Check if a given character is a vowel or a consonant.
function checkCharacterType(char) {
    if (char >= 'A' && char <= 'Z') {
        char = String.fromCharCode(char.charCodeAt(0) + 32);
    }
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        console.log("The character is a vowel.");
    }
    else if (char >= 'a' && char <= 'z') {
        console.log("The character is a consonant.");
    } 
    else {
        console.log("The character is not a valid alphabet letter.");
    }
}
checkCharacterType('A'); 
checkCharacterType('b'); 
checkCharacterType('1'); 
// Even or Odd Length: Write a program that checks if the length of a string is even or odd.
function check(num){
    if(num.length%2===0){
        console.log('it is a even number');        
    }
    else{
        console.log('it is a odd number');      
    }
}
check('gunah');
// Maximum of Three Numbers: Find the largest of three given numbers.
function large(num){
    let max=0;
    for(i=0;i<=num.length;i++){
        if(max>num[i]){
            max=num[i]
        }
    }
    return max;
}
console.log(large([1,2,3]));

// Number Sign: Check if a given number is positive, negative, or zero.
function sign(num){
    if(num>0){
        console.log('it is a posssitive num');
        
    }
    else if(num<0){
        console.log('it is a negative number');
        
    }
    else{
        console.log('zero');
        
    }
}
sign(45);
// Number Range: Check if a number falls within the range 1-100.


// Simple Calculator: Perform addition, subtraction, multiplication, or division based on user input.
// Number Comparison: Check if two numbers are equal or which one is greater.
// Discount Application: Apply a 10% discount if the purchase amount exceeds $100.
// function apply(amount){
//     discount1=0;
//     total=0;
//     if(amount>100){
//         discount1=amount*0.10

//     }
//     total=amount-discount1;
//     console.log(total);

// }
// apply(100);
function applyDiscount(purchaseAmount) {
    if (purchaseAmount > 100) {
        const discount = purchaseAmount * 0.10;
        const discountedAmount = purchaseAmount - discount;
        console.log(discountedAmount);
        
    } else {
       console.log(purchaseAmount);
       
    }
}


const purchaseAmount = 150; 
//const finalAmount = applyDiscount(purchaseAmount);
//console.log(`The final amount after discount (if applicable) is: $${finalAmount}`);

// Function to calculate a 47% discount
function calculateDiscount(amount) {
    let discount = amount * 0.47; 
    let discountedAmount = amount - discount; 
    console.log(discountedAmount);
};
calculateDiscount(200);

function dis(amount1){
    let discount=amount1*0.97;
    console.log(discount);
    
}
dis(200);


// Password Strength: Check if a password length is at least 8 characters long.

// Teenager Check: Write a program to check if a person’s age falls in the teenage range (13-19).
// Divisibility Check: Determine if a number is divisible by 2, 3, or both.
// Time of Day: Print "Good Morning," "Good Afternoon," or "Good Evening" based on the given time (in 24-hour format).
// Absolute Value: Find the absolute value of a given number.
// Temperature Check: Print "Cold," "Warm," or "Hot" based on a given temperature value.
// Check Alphabet Case: Determine if a given character is uppercase or lowercase.
// Multiple of 3 or 7: Check if a number is a multiple of either 3 or 7.
// Simple Tax Calculator: Apply a 5% tax if the amount is over $500.
// Weekend Check: Given a day, print if it's a weekday or the weekend.
// Eligible for Marathon: Check if the participant’s age is between 18 and 40 for eligibility.
// Triangle Type: Check if a triangle is equilateral, isosceles, or scalene based on side lengths.
// Letter Grade: Check the letter grade based on the percentage score given by the user.
// Older or Younger: Write a program that takes the age of two people and prints who is older or if they are of the same age.
// Traffic Light: Based on user input (red, yellow, green), print the appropriate action ("Stop", "Ready", "Go").


function calculateTax(amount) {
    if (amount > 500) {
        console.log("Total amount after 5% tax: $" + (amount * 1.05));
    } else {
        console.log("No tax applied. Total amount: $" + amount.toFixed(2));
    }
}
calculateTax(600);

function countVowels(str) {
        let count = 0;
        for (let i = 0; i < str.length; i++) {
            let char = str[i];
            if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
                char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
                count++;
            }
        }
        return count;
    }
    console.log(countVowels('naveen'));

    function generateSeries(n) {
        let series = [];
        for (let i = 1; i <= n; i++) {
            series.push(i * i);
        }
        return series;
    }
    console.log(generateSeries(8));

    // Program to convert the number of days to year, month, week, and days
function convertDaysToYearsMonthsWeeksDays(totalDays) {
    const daysInYear = 365;
    const daysInMonth = 30;
    const daysInWeek = 7;

    const years = Math.floor(totalDays / daysInYear);
    totalDays %= daysInYear;

    const months = Math.floor(totalDays / daysInMonth);
    totalDays %= daysInMonth;

    const weeks = Math.floor(totalDays / daysInWeek);
    const days = totalDays % daysInWeek;

    console.log(`Years: ${years}, Months: ${months}, Weeks: ${weeks}, Days: ${days}`);
}

// Test the function
convertDaysToYearsMonthsWeeksDays(600);


function convert(totalYear){
    let year=365;
    let month=30;
    let weekDays=7;
    const years=Math.floor(totalYear/year);
    totalYear%=year;
    const months=Math.floor(totalYear/month);
    totalYear%=month;
    const weeks=Math.floor(totalYear/weekDays);
    totalYear%=weekDays;

    console.log(`years: ${years} months: ${months} days: ${weeks}`);
}
convert(600);
    
// Program to find the value of y in the equation ax + b = y
function findY(a, b, x) {
    const y = a * x + b;
    console.log(`The value of y is: ${y}`);
}

// Test the function
findY(3, 5, 2); // Expected output: 11

// Program to find the area of a triangle given base and height
function findTriangleArea(B, H) {
    const area = (B * H) / 2;
    console.log(`The area of the triangle is: ${area}`);
}

// Test the function
findTriangleArea(2, 4); // Expected output: 4

// Function to print a character n times
function printCharacter(ch, n) {
    let result = '';
    for (let i = 0; i < n; i++) {
        result += ch;
    }
    console.log(result);
}
printCharacter('* ',7);
    

    