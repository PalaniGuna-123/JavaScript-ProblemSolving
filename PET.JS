//Example Array**: `[3, 5, 1, 8, 4]`

let array=[3,5,1,8,4];
let maximum=0;
for(i=0;i<array.length;i++){
    if(array[i]>maximum){
        maximum=array[i]
    }
}
console.log(maximum);

//**Example Array**: `[1, 2, 3, 4, 5]`

let Example=[1,2,3,4,5];
let str=[];
for(i=Example.length-1;i>=0;i--){
    str.push(Example[i])
}
console.log(str);

//Question**: Given an array, find both the minimum and maximum elements.
   //- **Example Array**: `[7, 2, 9, 4, 3]`

let find=[7,2,9,4,3];
let max=Number.MIN_VALUE;
let min=Number.MAX_VALUE;
for(i=0;i<find.length;i++){
    if(find[i]>max){
        max=find[i];         
    }
    if(find[i]<min){
        min=find[i];
    }
}
console.log(`max number is ${max} min number ${min}`);

//Question**: Find the sum of all elements in the array.
  // - **Example Array**: `[4, 1, 7, 3]`

let dream=[4,1,7,3];
let total=0;
for(i=0;i<dream.length;i++){
     total+=dream[i]
}
console.log(total);

//*Example Array**: `[1, 2, 3, 2, 4]`
 //  - **Answer**: The array contains duplicates (`2` appears twice).
 let duplicate =[1,2,3,2,4];
 for(i=0;i<duplicate.length;i++){
    for(j=i-1;j<duplicate.length;j++){
        if(duplicate[i]===duplicate[j]){
            console.log(duplicate[i]);

        }
    }  
 }    

 

//  function Duplicates(arr) {
//     let result = new set();
//     for (let i = 0; i < arr.length; i++) {
//       for (let j = 0; j < arr.length; j++) {
//         if (j!==0 && arr[i] === arr[j]) result.add(arr[i]);
//       }
//     }
//     return result;
//   }
//   let arr=[1,2,3,2,4,3];
//   console.log(Duplicates(arr));
  
  //**Remove Duplicates from a Sorted Array**
   //- **Question**: Given a sorted array, remove the duplicates in place and return the new length.
   //- **Example Array**: `[1, 1, 2, 3, 3, 4]`
   //- **Answer**: The array after removing duplicates is `[1, 2, 3, 4]` with new length `4`.

   function Duplicates(arr) {
    let result = new Set(arr);  
    return Array.from(result);  
}
console.log(Duplicates([1,1,2,3,3,4]));

//Merge Two Sorted Arrays**
  // - **Question**: Given two sorted arrays, merge them into a single sorted array.
   //- **Example Arrays**: `[1, 3, 5]` and `[2, 4, 6]`
// **Answer**: Merged sorted array is `[1, 2, 3, 4, 5, 6]`.

let sorted=[1,3,5];
let sort =[2,4,6];
let guna =sorted.concat(sort);
guna.sort()
console.log(guna);







   