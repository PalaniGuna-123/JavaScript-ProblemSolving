let groceries=['milk','jam','fruit','banana'];
groceries.forEach(groceri=>{
    console.log(groceri);
    
})

//Given a value n print the n odd numbers in reverse, for example if n = 4, print 7 5 3 1

// function printOddNumbersReverse(n) {
//     let count = 0;     // Keeps track of how many odd numbers have been printed
//     let number = 2 * n - 1;  // Start from the nth odd number

//     while (count < n) {
//         console.log(number);
//         number -= 2;    // Move to the next odd number in reverse
//         count++;
//     }
// }

// // Example usage:
// printOddNumbersReverse(5); // Output: 7 5 3 1

// function printOdd(n){
//     let number=2*n-1;
//     for(i=0;i<n;i++){
//         console.log(number);
        
//         number+=2;
//     }

// }
// printOdd(4)

//reverse in for loop

// function reverse(n){
//     let number=2*n-1;
//     for(i=0;i<n;i++){
//         console.log(number);
//         number-=2;
        
//     }
// }
// reverse(4)

// function evenNUm(n){
//     let number=2*(n-1);
//     while(n>0){
//         console.log(number);
//         number-=2;
//         n--;
        
//     }
// }
// evenNUm(7)

// sum of odd numbers

function oddNUm(n){
    let sum=0;
    let number=1;
    for(i=0;i<n;i++){
        sum+=number;
        number+=2
    }
    return sum;
}
console.log(oddNUm(5));

function sumEven(n){
    let sum=0;
    let evenNum=0;
    for(i=0;i<n;i++){
        sum+=evenNum;
        evenNum+=2;
    }
    return sum;
}
console.log(sumEven(5));

function fac(n){
    let total=1;
    for(i=1;i<=n;i++){
        total*=i
    }
    return total;
}
console.log(fac(3));

//fibunachii series
function fibu(n){
    let a=0,
    b=1
    ,next;
    for(i=0;i<n;i++){
        console.log(a);
        
        next=a+b;
        a=b;
        b=next;
    }
}
fibu(5)

//Count Vowels in a string

function vowels(str){
    let count=0;
    for(i=0;i<str.length;i++){
        if('aeiouAEIOU'.includes(str[i])){
            count++;
        }
    }
    return count;
}
console.log(vowels('gu'));

//Reverse a string

function reversed(don){
    let str= ' ';
    for(let i=don.length-1;i>=0;i--){
        str+=don[i]
    }
    return str;
}
console.log(reversed("hello"));

function reverse(gon){
    let str='';
    for(let i=gon.length-1;i>=0;i--){
        str+=gon[i];
    }
    return str;
}
console.log(reverse("Guna is a hardworking guy"));

//Cheack Palindrone;

function isPolindrone(str){
    let reversed=str.split(' ').reverse().join(' ');
    return str===reversed;
}
console.log(isPolindrone("AMMA"));


//Sum of digits
// function sumOfDigits(n){
//     let sum=0;
//     while(n>0){
//         sum+=n%10;
//         n=Math.floor(n/10)
//     }
//     return sum;
// }
// console.log(sumOfDigits(1234));

function digit(num){
    let sum=0;
    while(num>0){
        sum+=num%10;
        num=Math.floor(num/10)
    }
    return sum;
}
console.log(digit(111));

//Generate multiplication table
//function printMultiple(n,r){
    // // //     for(i=r;i>=n;i--){
    // // //         console.log(`${n} * ${i} = ${n * i}`)
    // // //     }
    // // // }
    // // // printMultiple(5,6)

function table(n,r){
    for(i=r;i>=n;i--){
        console.log(`${n} * ${i}= ${n*i}`);
        
    }
    
}
table(5,10)

function multiplicationTable(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(i + " x " + n + " = " + (i * n));
    }
}

// Example usage:
multiplicationTable(3);

function countOccurrences(arr, value) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            count++;
        }
    }
    return count;
}

// Example usage:
console.log(countOccurrences([1, 2, 3, 2, 4, 2], 2));  // Output: 3



//1. sum of all elements
let arraynumbers = [5, 10, 15, 20, 25];
let total=0;
for(i=0;i<arraynumbers.length;i++){
    total+=arraynumbers[i]
}
console.log(total);
//2 Declare two variable
var age=30;
var height=5.9;
console.log(`Age is ${age} and Height is ${height}`);
//3. calculate average/and sum
function values(num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += num[i];
    }
    let average = sum / num.length;
    return { sum, average };
}
let num = [3, 6, 9, 12, 15];
let result = values(num);
console.log("sum = " + result.sum);
console.log("average = " + result.average);
//4. prints all numbers greater than 50.
let  greater = [12, 45, 67, 23, 89, 54, 90]
for(i=0;i<greater.length;i++){
    if(greater[i]>50){
        console.log(greater[i])
    }
}
//5.  Write a program that calculates both the area and circumference of a circle.
function calculateCircle(radius) {
    let pi = 3.14;
    let area = pi * radius * radius;
    let circumference = 2 * pi * radius; // Circumference = 2 * π * r
    console.log("Area of the circle: " + area);
    console.log("Circumference of the circle: " + circumference);
}
let radius = 2;
calculateCircle(radius);
//6.
function multiples(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        if (i % 3 === 0) {
            sum += i;
        }
    }
    if (sum > 0) {
        console.log("Sum of multiples of 3 between " + start + " and " + end + " is: " + sum);
    } else {
        console.log("No multiples found.");
    }
}
multiples(1, 2)


let house = {
    doorNo:"24B",
    color: "RED", 
    noOfFloors: 5,
    noOfRooms: 24,
    buildUpArea: 10000, 
    printHouseDetails: function() {
        console.log(`${this.doorNo} ${this.color} ${this.noOfFloors}`);

    }

};

console.log("Door no: " + house.doorNo);
console.log("House color: " + house.color);

house.noOfRooms = 15;
console.log("No of rooms: " + house.noOfRooms);
house.direction = "SOUTH";
console.log(house);
house.printHouseDetails();


function printNUm(n){
    let sum=2*n-1;
    let count=0;
    let str=''
    for(i=0;i<n;i++){
        console.log(sum);
        sum-=2;
        sum=sum+str
        count++;

        
    }
    return sum;
}
printNUm(4)

function sum


// function printOdd(n){
//     let number=2*n-1;
//     for(i=0;i<n;i++){
//         console.log(number);
        
//         number+=2;
//     }

// }
// printOdd(4)

function evenNUm(n){
    let number=2*(n-1);
    while(n>0){
        console.log(number);
        number-=2;
        n--;
        
    }
}
evenNUm(7)

function doing(n){
let str=" ";
for(i=n;i>=1;i--){
 str+=(i*2)+" ";
}
console.log(str);
}
doing(5)//'0,2,4,6,8,10'

function isOdd(n){
    let str='';
    for(i=n;i>=1;i--){
        str+=(i*2-1)+" ";

    }
console.log(str);


}
isOdd(6)

//digit sum
function digit(n){
    let sum=0;
    for(i=0;i<n;i++){
        sum+=n%10;
        n=Math.floor(n/10)
    }
    return sum;

}
console.log(digit(4234));



