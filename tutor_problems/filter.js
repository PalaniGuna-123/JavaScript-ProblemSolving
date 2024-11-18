let words1= ["cat", "dog", "elephant", "fish","giraffie"]
let four = words1.filter(word=>word.length===4);
console.log(four)

//Reduce function

let numbers=[1,2,3,4,5];
let sum = numbers.reduce((accumalater,currentvalue)=>accumalater+currentvalue);
console.log(sum)

//Flattening an array
let nestedArray =[[1,2],[3,4],[5,6]];
let Array =nestedArray.reduce((start,end)=>start.concat(end));
console.log(Array)

let colors =['red', 'blue', 'green', 'red']

// maximum 

let max=[5,10,49,50]
let large = max.reduce(( aacum,current)=>{
    return Math.max(aacum,current)
});
console.log(large)

