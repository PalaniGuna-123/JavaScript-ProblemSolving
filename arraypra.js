// // // // // let train =[20,30,40,50,8,30]
// // // // // let temp=train[0];
// // // // // for(i=0;i<train.length;i++){
// // // // //     if(train[i]<temp){
// // // // //         temp=train[i]
// // // // //     }
// // // // // }
// // // // // console.log(temp)

// // // // // let seat = [1,0,1,0,0,0,0,1,0];
// // // // // let book=0;
// // // // // for(i=0;i<seat.length;i++){
// // // // //     if(seat[i]===0){
// // // // //         book++;
// // // // //     }
// // // // // }
// // // // // console.log(book)


// // // // // let fans =[23,244,566,899,7];
// // // // // console.log(Math.max(...fans))

// // // // // for(let i=1; i<=5; i++){
// // // // //    console.log(i.toString().repeat(i));
// // // // // }

// // // // // let calculate =[12,23,34,56,78,9]

// // // // // let n=5;
// // // // // let str = "";
// // // // // let count = 1;
// // // // // for(i=1;i<=n;i++){
// // // // //     for(j=1;j<=i;j++){
// // // // //       str = str + j ;
// // // // //       console.log(str);  
// // // // //     }
// // // // // }
// // // // // let landing_times=[12,15,12,18,20];
// // // // // let land=landing_times[0];
// // // // // for(i=0;i<landing_times.length;i++){
// // // // //     if(landing_times[i]===land){
// // // // //         console.log(`index of ${landing_times[i]} is same`)
// // // // //     }
// // // // // }

// // // // function evenNum(n){
// // // //     let i=1;
// // // //     let total=0;
// // // //     while(i<=n){
// // // //         total+=i;
// // // //         i++;
// // // //     }
// // // //     return total;
// // // // }

// // // // console.log(evenNum(7))


// // // function calculate(n){
// // //     let sum=1;
// // //     let i=1;
// // //     while(i<=n){
// // //         sum*=i;
// // //         i++;

// // //     }
// // //     return sum;
// // // }
// // // console.log(calculate(5))


// // // function factorial(n){
// // //     let i=1;
// // //     let total=1;
// // //     while(i<=n){
// // //         total*=i;
// // //         i++;

// // //     }
// // //     return total;
// // // }
// // // console.log(factorial(3))

// // // function evenNum(n){
// // //     let i=1;
// // //     while(i<=n){
// // //         if(i%2===0){
// // //             console.log(i)
// // //         }
// // //         i++;
// // //     }

// // // }
// // // console.log(evenNum(10))


// // // function sumNum(n){
// // //     let i=1;
// // //     let sum=0;
// // //     while(i<=n){
// // //         sum+=i;
// // //         i++;
// // //     }
// // //     return sum;
// // // }
// // // console.log(sumNum(2))

// // // function printMultiple(n,r){
// // //     for(i=r;i>=n;i--){
// // //         console.log(`${n} * ${i} = ${n * i}`)
// // //     }
// // // }
// // // printMultiple(5,6)
// // ///////////////////////YOUTUBE PROBLEMS///////////////////////////



// // // function gun(n){
// // //     if(n%2===0){
// // //         console.log("even")
// // //     }
// // //     else{
// // //         console.log("odd")
// // //     }
// // // }
// // // gun(-1)

// // // function Small(a,b,c){
// // //     if(a<b && a<c){
// // //         return a;
// // //     }
// // //     else if(b<a && b<c){
// // //         return b;
// // //     }
// // //     else if(c<a && c<b){
// // //         return c;
// // //     }
// // // }
// // // console.log(Small(1,2,-2))

// // function reverse(input){
// //    for(let i=input.length-1;i>=0;i--){
// //     console.log(input[i])
// //    }
// // }
// // console.log(reverse("guna"))



// // let name = ["santhosh"];
// // let str = ""
// // for(i=name[0].length-1; i>=0; i--){
// //     str = str + name[0][i] +" ";
    
// // }
// // console.log(str);

// // let array = ["saravana", "guna", "hari"];
// // let array1 = [];
// // let array3 = 0;

// // for(i=array.length-1; i>=0; i--){
// //     array3 = array.pop();
// //  array1.push(array3)
// // }
// // console.log(array1)

// // function TotalNumbers(n){
// //     total=0;
// //     let i=1;
// //     while(i<=n){
// //         total+=i;
// //         i++;
// //     }
// //     return total;

// // }
// // console.log(TotalNumbers(6))

// // let name = ["santhosh"];
// // let str = ""
// // for(i=name[0].length-1; i>=0; i--){
// //     str = str + name[0][i] +" ";
    
// // }
// // console.log(str);


// let family = ["palani", "Gomathi","Guna","Sridhar"];

// let a = family.map((item) =>item.charAt(0).toUpperCase()+item.slice(1));
// console.log(a) 

// // let b = "Hello World" 
// let b = "Hello World";
// let result = b.slice(2, 5) + b.slice(0, 2) + ' ' + b.slice(7, 10) + b.slice(6, 8);
// console.log(result);


// //Write a function that takes two ranges and prints number in reverse between the two ranges

// const age=44;
// const resul = age>=18?"eligible ": "Non eligible";
// console.log(resul)

// function value(start,end){
//     for(i=start-1;i>=end;i--){
//         console.log(i)
//     }
// }
// console.log(10,5)

// function sum2(num){
//     total=0;

//         for(i=0;i<num;i++){
//             if(num%2===0){
//             total+=num[i]
//         }

        
//     }
//     return total;
// }
// console.log(sum2(10))
// console.log(total)

// function sumEvenNumbers(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) { 
//             sum += arr[i];     
//         }
//     }
//     return sum; 
// }
// console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); 
// console.log(sumEvenNumbers([7, 11, 18, 21, 22])); 


// // L2 problems

// function curvedSurfaceArea(r, h) {
//     const pi = 3.14;
//     const csa = 2 * pi * r * h;
//     return csa;
// }

// // Example usage:
// const radius = 3;  // Replace with the radius of the cylinder
// const height = 10; // Replace with the height of the cylinder
// console.log("Curved Surface Area of the cylinder:", curvedSurfaceArea(radius, height));


// function generateReport(dead, injured, safe) {
//     console.log(`1) Dead : ${dead}`);
//     console.log(`2) Injured : ${injured}`);
//     console.log(`3) Safe : ${safe}`);
//     console.log("Please help the people who are suffering!!!");
// }

// // Example usage:
// const dead = 2000;    // Replace with the number of people dead
// const injured = 3000; // Replace with the number of people injured
// const safe = 10000;   // Replace with the number of people safe
// generateReport(dead, injured, safe);


// function generateSeries(n) {
//     for (let i = 1; i <= n; i++) {
//         console.log(i * i);
//     }
// }

// // Example usage:
// const terms = 5;  // Replace with the number of terms to generate
// generateSeries(terms);


// function classifynumb(num){
//     if(num<0){
//         console.log("negative")
//     }
//     else if(num>0){
//         console.log("positive")
//     }
//     else if(num===0){
//         console.log("zero")
//     }
//     return num;
// }
// let num=5
// classifynumb(5)


// function value(num){
//     if(num%2===0){
//         console.log(true)
//     }
//     else{
//         console.log(false)
//     }
// }
// value(7)

// function range(n,r){
//     str=""
//     for(i=n-1;i>=r;i--){
//         str= str+i
//         console.log(i)
        
//     }
// }
// range(10,5)

function guna(n){
    let str=' ';
    for(i=n-1;i>=1;i=-2){
        console.log(i+str)


    }
    return i;
}
guna(4)

function mul(num){
    if(num%7===0){
        return "yes"
    }
    else{
        return "no"
    }
}
console.log(mul(2));


let array=[9,1];

// function reversed(rev){
//     let str=' ';
//     for(i=rev.lemgth-1;i>=0;i--){
//         str+=rev[i]
//     }
//     return str;
// }
// console.log(reversed('hellos'));

function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i]+'';
    } 
  return reversed
  }
  console.log(reverseString('hello').slice());

  
  


