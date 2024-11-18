// function welcome (name) {
//     const result= name?name: "No Name";
//     console.log("Welcome "+result);
//     }
//     welcome();
//     welcome (null);
//     welcome ('Joes');
//     user={'name': 'Joes', 'age': 25};
//     console.log(user);
//     console.log(user.name);
//     const greeting=(user)=>{
//     const name=user?user.age: "No Name";
//     return "Hello" +  name;
//     }
//     console.log(greeting (user));

//     // do while problem

//     let table=2;limit=5;i=1;
//     do{
//         console.log(table + 'X'+ i + "=" + (table*i));
//         i++;
//     }
//     while(i<=limit)

//     let arr=[];
//     for(i=0;i<=20;i++){
//         arr.push(i);
//     }
//     console.log(arr)

//     // two dimentionel array

//     let nums=[];
// for (let i=0;i<3;i++) //i=0 0<3 1<3
// {
// nums.push([]); //nums[0] nums [1]
// for (let j=0;j<3;j++)
// {
// nums[i].push(j);//num [1]={0,1,2}
// }
// }
// console.log(nums);
// console.table(nums);

// // for of loop


// let friend =["guna", "ganesh"];
// for(friends of friend){
//     console.log(friends)
// }

// for in loop

// let user = {
//     name: "Tutor Joes",
//     age: 35,
//     city: "Salem",
//     contact: "9043017689",
//     };
//    for (let prop in user)
//      {
//      console.log(prop+": "+user [prop]);
//      }

// let arr_keys =object.keys(user);
// console.table(arr_keys);


// array methods 

//for each method

// const number =[1,2,3,4,5,6,7,8,9,10];
// number.forEach((value)=>{
// console.log(value);
// })

// const userId = 1;  // Example user ID
// // Create a URL with query parameters
// const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
// // Fetch data from the API
// fetch(url)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return response.json(); // Parse JSON data
//   })
//   .then(data => {
//     console.log('Fetched data:', data); // Display the response
//   })
//   .catch(error => {
//     console.error('Fetch error:', error);
//   });

function printPattern(n) {
    let result = [];
    let number = 1;
    for(let i = 0; i < n; i++) {
        if(i % 2 === 0) {
            if(i === 0) {
                result.push('*');
            } else {
                result.push(number);
                number += 2;
            }
        } else {
            result.push('#');
        }
    }
    
    return result.join(' ');
}


console.log(printPattern(5));  

// function fibonacciSeries(n) {
//     let first = 0;
//     let second = 1;
//     let temp;
//     console.log(first);
    

//     for(let i = 1; i < n; i++) {

//         console.log(second);
    
//         temp = first + second;
//         first = second;
//         second = temp;
//     }
// }
// fibonacciSeries(10);

function fibu(n){
    let first=0;
    let second=1;
    let temp;
    for(i=1;i<n;i++){
        console.log(second);
        temp=first+second;
        first=second;
        second=temp;
        
    }
}
fibu(5);
function HASH(n) {
    let str="";
    for(let i=1;i<=n;i++){
        if(i%2==0){
            str+=" # ";
        }
        else{
            str+=i;
        }
    }
    console.log(str);
}
HASH(5);

function name(num){
    let str='';
    for(let i=num.length-1;i>=0;i--){
        str+=' ';
    }
    console.log(str);
    

}
name("Guna")
function printMultiplesOf3(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i * 3);
    }
}

printMultiplesOf3(5);
