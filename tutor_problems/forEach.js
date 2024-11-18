const fruits =["apple", "banana", "cherry", "orange"]// console pottal array formetla print aagun

fruits.forEach(fruit=> console.log(fruit));

let num=[1,2,3,4,5,6,7,8,9,10];
let total =0;
num.forEach(number=>{  // particular data vai edukkalaam
    total+=number;
})
console.log(total);

let double=[];
num.forEach(number=>{
    double.push(number*2)
})
console.log(double)

//max number in array
let max=num[0];

num.forEach(number=>{
    if(number>max){
        max=number;
    }

})
console.log(max)

// find average of an array


let air=[1,2,3,4,5];
let sum=0;
air.forEach(hairs=>{
    sum+=hairs
})
console.log(sum/air.length)

// for each method to filter an array;

let array =[1,2,3,4,5,6,7,8];
const even=[];
array.forEach(arr=>{
    if(arr%2===0){
        even.push(arr)
    }
})
console.log(even)

// update elements

let names =['guna','kannan','vasu'];
names.forEach((name,index)=>{
    console.log(name,index)
    names[index]=name.toUpperCase()
})
console.log(names)