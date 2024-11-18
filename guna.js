let myarray=[1,2,3,4,5,6,7,8,9]
myarray.reverse()
let newarray=myarray.join()
console.log(myarray)
console.log(newarray)

// let robotPosition = { x: 0, y: 0 };

// function moveRobot(direction) {
//     switch (direction) {
//         case 'north':
//             robotPosition.y += 1;
//             break;
//         case 'south':
//             robotPosition.y -= 1;
//             break;
//         case 'east':
//             robotPosition.x += 1;
//             break;
//         case 'west':
//             robotPosition.x -= 1;
//             break;
//         default:
//             console.log("Invalid direction! Please enter North, South, East, or West.");
//             return;
//     }
//     console.log(`Robot's new position: (x: ${robotPosition.x}, y: ${robotPosition.y})`);
// }

// moveRobot('north'); 
// moveRobot('east');  
// moveRobot('south');
// moveRobot('west');  


// function direction(foe){
//     switch(foe){
//         case 1:
//             console.log("North");
//         case 2:
//             console.log("South");
//         case 3:
//             console.log("East");
//         case 4:
//             console.log("West");
//             break;  
//     }
// }
// console.log(direction(2))

let array = ["saravana", "guna", "hari"];
let array1 = [];
let array3 = 0;

for(i=array.length-1; i>=0; i--){
    array3 = array.pop();
 array1.push(array3)
}
console.log(array1)

let hi =[1,2,3,4]
let new2=[];
while(hi.length>0){
    new2.push(hi.pop())
}
console.log(new2)

// let array = [100, 115, 120, 110, 130, 140, 150];

// for(i=0; i<array.length; i++){
//     if(array[i]>=110 && array[i]<=140){
//     console.log(array[i]);
//     }
// }

// let guna=[1,2,3,4,5,6,7,8,19,12];
// let count = 0;
// for(i=0; i<guna.length; i++){
//     if(guna[i]%2==0){
//         count = count + 1;
//     }
// }
// console.log(count);

// function tables(n,r){
//     let out = 0;
//     for(i=r; i<=12; i++){
//         out = i * n;
//         console.log(`${i} * ${n} = ${out}`);
//     }
// }

// tables(5,1);

let name = ["santhosh"];
let str = ""
for(i=name[0].length-1; i>=0; i--){
    str = str + name[0][i] +" ";
    
}
console.log(str);

// let array = [1,2,3,4,5];
// let array1 = [3,4,5,6,7];

// for(a=0; a<array.length; a++){
    
//     for(i=0; i<array1.length; i++){
//         if(array[a]===array1[i]){
//             console.log(array1[i]);
//         }
//     }
// }

// let numbers = [1, 2, 3, 4, 5];

// let doubled = numbers.map(function(number) {
//     return number * 2;
// });

// console.log(doubled);  // [2, 4, 6, 8, 10]

function printEvenNumbers(n) {
    let i = 1;
    while (i <= n) {
        if (i % 2 === 0) {
            console.log(i);
        }
        i++;
    }
    return i;
}
printEvenNumbers(20);

