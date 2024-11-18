// function find(a, b, x) {
//     let y = (a * x) + b;
//     return y;
// }

// let a = 3, b = 5, x = 2;
// console.log(find(a, b, x)); 



// function areaOfTriangle(B, H) {
//     let area = (B * H) / 2;
//     return area;
// }


// let B = 2, H = 4;
// console.log(areaOfTriangle(B, H)); 



// function printCharacter(ch, n) {
//     return ch.repeat(n);
// }

// console.log(printCharacter('*', 5)); 


// // const numbers =[1,2,3,4,5,6,7,8,9,10];
// // // (value, index,array)
// // let sqrt =numbers.map((value)=>{
// //     return Math.sqrt(value).toFixed(2);
// // });
// // console.log(sqrt)


// // const table= [
// //     {name:"deadbull",age: 18,city: "America", salery: 105000},
// //     {name:"wolfworine",age: 283,city: "jammu", salery: 12000},
// //     {name:"nicepool",age:30,city: "namakkal", salery: 234},
// //     {name:"ladypool",age: 12,city: "france", salery: 23000},
// //     {name: "babypool", age: 1,city: "Newyork", salery:23}
// // ];
// // console.table(table)
// // let eligible=table.map((user)=>({
// //     name:user.name,
// //     age:user.age,
// //     city:user.city,
// //     salery: user.salery,
// //     status:user.age>=18? "Eligible": "Not eligible"

// // }))
// // console.log(eligible)


// const numbers = [1,2,3,4,5];
// const double =numbers.map(number=>number*2);
// console.log(double)
// //originelArray.map(current_value,index,OriginelArray);


// const words = ["hello", "world"];
// const capital =words.map(word=>word.toUpperCase())
// console.log(capital)

// const fruits =["apple","banana"];//unevenaaga irundha work aagadhu
// const colors =["red","yellow"];
// const color =fruits.map((fruit,index)=>fruit+'_' + colors[index]);
// console.log(color)

//filtering condition

const num=[1,2,3,4,5,22];
const evenNum = num.map(nums=>nums%2===0);
console.log(evenNum);

let duplicate =[1,2,3,2,4];
 for(i=0;i<duplicate.length;i++){
    for(j=i+1;j<duplicate.length;j++){
        if(duplicate[i]===duplicate[j]){
            console.log(duplicate[i]);

        }
    }  
 }    

 