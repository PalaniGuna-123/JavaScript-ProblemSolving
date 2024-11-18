//Arrays
// 1. Given the array train_departures = [10, 15, 7, 20, 5], where each element represents the departure time of a train in 24-hour format, find the earliest train to depart.
let train_departures = [10, 4, 7, 20, 5,1];

let temp = train_departures[0];
for(i=1;i<train_departures.length;i++){
    if(train_departures[i]<temp)
    {
        temp= train_departures[i];
    }
}
console.log(temp)
    
//2. Given the array seats = [1, 0, 1, 1, 0, 0, 1, 0], where 1 means a seat is booked and 0 means a seat is available, count the total number of available seats.
let seats =[1,0,1,0,1,0,1,0,0,0,1,0];
let book =0;
for(i=0;i<seats.length;i++){
    if(seats[i]===0){
        book=book+1;
    }
    
}
console.log(book)

//3.Given the array soldiers = [120, 300, 250, 180, 150], where each element represents the number of soldiers assigned to different regions, find the region with the highest number of soldiers.
let soldiers=[120,340,234,180,111,104,506];
let army=0;
for(i=0;i<soldiers.length;i++){
    if(soldiers[i]>army){
        army = soldiers[i];
    }
}
console.log(army)
 //4.Given the array populations = [50, 60, 70, 80, 90], where each element represents the population of an Indian state over the last 5 years, calculate the average population.
 let populations=[50,60,70,80,90];
 let total=0;
 for(i=0;i<populations.length;i++){
   total=populations[i]+total;
   average=total/populations.length;
 }

 console.log(average)

 //5. Given the array water_levels = [30, 50, 20, 40, 60], where each element represents the current water level in a tank, find the tank with the lowest water level.
let water_levels =[30,50,20,40,60];
let water=water_levels[0];
for(i=0;i<water_levels.length;i++){
    if(water_levels[i]<water){
        water=water_levels[i];
    }
}
console.log(water)

//6. Given the array days_until_festival = [30, 15, 45, 10, 25], where each element represents the number of days left until an important festival, find the closest upcoming festival.

let days_until_festival=[30,40,50,60,70,80,90,10];
let fest=days_until_festival[0];
for(i=0;i<days_until_festival.length;i++){
    if(days_until_festival[i]<fest){
        fest=days_until_festival[i]
    }
}
console.log(fest)

//7. Given the array landing_times = [15, 18, 20], where each element represents the time a helicopter is scheduled to land, check if any two helicopters are scheduled to land at the same time.

let landing_times=[12,15,12,18,20];
let land=landing_times[0];
for(i=0;i<landing_times.length;i++){
    if(landing_times[i]===land){
        console.log(`index of ${landing_times[i]} is same`)
    }
}

//8. Given the array temperatures = [75, 80, 72, 85, 90], where each element represents the temperature in a specific region of a forest, identify which regions have temperatures above 80 degrees.

let temperature =[75,80,72,85,90,100];
for(i=0;i<temperature.length;i++){
    if (temperature[i]>80){
        console.log(temperature[i])
    }
}

//9. Given the array students_per_route = [45, 55, 30, 60, 40], where each element represents the number of students assigned to different bus routes, calculate the total number of buses required if each bus can hold a maximum of 50 students.

let students_per_route =[45,55,30,60,40];
let bus=50;
let sum=0;
for(i=0;i<students_per_route;i++){
    sum=sum+students_per_route[i];

}

console.log(sum);
//10. You have an array of daily expenses for a week. Write a function that calculates the total expenses for the week.

let expense=[100,100,200,300,400,500,600];
let week=0;
for(i=0;i<expense.length;i++){
    week=week+expense[i];
}
console.log(week)

//11. You are given an array of student grades. Write a function that calculates the average grade.

let grade=[86,78,98,54,34,23,87]
let mark=0;
for(i=0;i<grade.length;i++){
    mark=mark+grade[i];
    average=mark/grade.length;
}
console.log(average)

//12. You have an array of people ages. Write a function that filters out people who are 18 years old or older.
function filter(age){
    let over18=[];
    for(i=0;i<age.length;i++){
        if(age[i]>18){
            over18.push(age[i])
        }
    }
    return over18;
}
let age=[12,23,14,15,16,23,45,67]
console.log(filter(age))

//13. You have an array of integers. Write a function that returns the count of the even numbers in the array.

function even(num){
    count=0;
    for(i=0;i<num.length;i++){
        if(num[i]%2===0){
            count++;
        }
    }
    return count;
}
let num=[1,2,3,4,5,6,7,8,9,10,12,13,14,16,22]
console.log(even(num))



