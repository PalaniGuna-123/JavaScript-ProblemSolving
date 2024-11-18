// Loops, Conditionals and Functions
// 1. Fix the issues in this code
function calculateArea(){
    let radius=5;
    let area;
    area = Math.PI*radius*radius;
    console.log(area);
}
calculateArea();

function greetUser(){
    let username="John";
    console.log("Hello "+username)
}
greetUser()

// 2. Why is this loop not stopping? How can you modify the code to ensure the loop counts down properly upto 100?
let count =1;
while (count <=100){
    console.log("Counting down :"+ count);
    count = count + 1;
}

// 3. Why always It's cold outside. is printed irrespective of the temperature value. Fix this!
let temperature = 30;
if (temperature ===20) {
 console.log("It's cold outside.");
} else {
 console.log("It's warm outside.");
}

// 4. Fix the issues in the code so that output is printed correctly

function checkNumber(num) {
  if (num <0){
    console.log("Negative");
  }
  else if (num > 0) {
    console.log("Positive");
  } else {
    console.log("Zero");
  }
}
checkNumber(-5);
checkNumber(0);
checkNumber(20);

//5. Write a function sumNumbers that takes a number n as a parameter and returns the sum of all numbers from 1 to n using a while loop.

function TotalNumbers(n){
    total=0;
    let i=1;
    while(i<=n){
        total+=i;
        i++;
    }
    return total;

}
console.log(TotalNumbers(6))

//6. Write a function calculateFactorial that takes a number n as a parameter and returns the factorial of that number using a while loop.

function calculateFactorial(n){
    total=1;
    let i=1;
    while(i<=n){
        total*=i;
        i++;
    }
    return total;
}
console.log(calculateFactorial(5))

//7. Write a function printEvenNumbers that takes a number n as a parameter and prints all even numbers from 1 to n using a while loop.

function printEvenNumbers(n) {
    let i = 1;
    while (i <= n) {
        if (i % 2 === 0) {
            console.log(i);
        }
        i++;
    }
}
printEvenNumbers(11);

//8. Fix the error in this function sumNumbers that takes a number n as a parameter and returns the sum of all numbers from 1 to n. However, there is an error in the while loop that causes the function to return the wrong result.

function sumNumbers(n) {
    let sum = 0;
    let i = 1;  
    while (i <= n) {  
      sum += i;
      i++;
    }
    return sum;
  }
  console.log(sumNumbers(5))
  
//   9. Write a JavaScript function classifyNumber that accepts a number and returns a string based on the following rules:

//   If the number is divisible by 3, return "Divisible by 3".
//   If the number is divisible by 5, return "Divisible by 5".
//   If the number is divisible by both 3 and 5, return "Divisible by both 3 and 5".
//   If the number is neither divisible by 3 nor 5, return "Not divisible by 3 or 5".

function classifyNumber(num){
    let result = "";
    if (num%3===0 && num%5===0){
        result= "Divisible by both 3 and 5";
    }else if(num%3===0){
        result= "Divisible by 3";
    }else if(num%5===0){
        result= "Divisible by 5";
    }else{
        result= "Not divisible by 3 or 5";
    }
    return result;
}
console.log(classifyNumber(3));
console.log(classifyNumber(33));
console.log(classifyNumber(44));
//10. Write a JavaScript function getDayName that takes a number (from 1 to 7) and returns the corresponding day of the week.
function getDayName(dayNumber) {
    switch(dayNumber) {
      case 1:
        return 'Sunday';
      case 2:
        return 'Monday';
      case 3:
        return 'Tuesday';
      case 4:
        return 'Wednesday';
      case 5:
        return 'Thursday';
      case 6:
        return 'Friday';
      case 7:
        return 'Saturday';
      default:
        return 'Invalid day number. Please enter a number between 1 and 7.';
    }
  }
  
  // Example usage
  console.log(getDayName(1));  // returns "Sunday"
  console.log(getDayName(5));  // returns "Thursday"
  console.log(getDayName(8));  // returns "Invalid day number. Please enter a number between 1 and 7."
  

//   11. Write a function printMultiplicationTable that takes a number n, range r and prints the multiplication table for that number in reverse order.
// For example, if n =5 and r = 6
// Expected O/P
// 5 * 6 = 30
// 5 * 5 = 25
// 5 * 4 = 20
// 5 * 3 = 15
// 5 * 2 = 10
// 5 * 1 = 5

function printMultiplicationTable(n, r) {
    for (let i = r; i >= 1; i--) {
        console.log(`${n} * ${i} = ${n * i}`);
    }
}

printMultiplicationTable(5, 6);

//12. Write a program where a robot must complete 10 laps around a circuit. Use a while loop to count the laps and display the lap number each time the robot completes one.

let lapscompleted=0;
let totallaps=10;

while(totallaps>lapscompleted){
    lapscompleted++;
    console.log(`lap ${lapscompleted} completed`)
}

//13. A robot moves forward as long as its battery level is above 20%. Using a while loop, simulate the robot's movement, decreasing the battery level by 5% after each step and displaying the remaining battery level. Once the battery level is below 20%, Display Battery is low.

let battery=100;


while(battery>20){
    console.log(`battery level ${battery}%`)
    battery=battery-5;
}
console.log("Baterry is low")

//14. A robot can move in 4 directions: North, South, East, and West. Use a switch statement to make the robot move in the direction entered by the user and print the robot's new position after each movement.

function direction(foe){
    switch(foe){
        case 1:
            console.log("North");
        case 2:
            console.log("South");
        case 3:
            console.log("East");
        case 4:
            console.log("West");
            break;  
    }
}
console.log(direction(3))

//15 An airplane altitude currently is 1000ft and its altitude reduces each second by 10ft. Write a program which will print “Flight arrived” when the airplane altitude reaches 0ft.

let altitude = 1000;

while (altitude > 0) {
  altitude -= 10;
  console.log(`Current altitude: ${altitude}ft`);

  if (altitude <= 0) {
    console.log("Flight arrived");
  }
}

// 16. Based on the flight’s destination, direct the airplane to a specific runway. Use a switch statement to assign the runway depending on the destination entered by the user.


function getRunway(destination) {
    let runway;
    switch (destination) {
        case 'New York':
            runway = 'Runway 1';
            break;
        case 'Los Angeles':
            runway = 'Runway 2';
            break;
        case 'Chicago':
            runway = 'Runway 3';
            break;
        case 'Houston':
            runway = 'Runway 4';
            break;
        case 'Miami':
            runway = 'Runway 5';
            break;
        default:
            runway = 'No designated runway for this destination.';
    }
    return runway;
}
const destination = 'Chicago';
const assignedRunway = getRunway(destination);
console.log(`Flight to ${destination} is assigned to ${assignedRunway}.`);

// 17. Write a program where an airplane climbs to a specific altitude(say 1000ft) over 10 intervals. Use a for loop to display the altitude after each interval.

const targetAltitude = 1000;
const intervals = 10;
const altitudeIncrease = targetAltitude / intervals;
for (let i = 1; i <= intervals; i++) {
    const currentAltitude = altitudeIncrease * i;
    console.log(`Interval ${i}: ${currentAltitude} ft`);
}













