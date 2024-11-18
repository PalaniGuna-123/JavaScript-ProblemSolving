function multiplicationTable(number) {
    for (let i = 12; i >= 1; i--) {
        console.log(` ${i} X ${number}  = ${number * i}`);
    }
}
multiplicationTable(5);
// function findFirstOccurrence(arr, value) {
//     let index = -1;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === value) {
//             index =  i;
//             break;
//         }
//     }
//     console.log(index);
// }
// findFirstOccurrence([1,2,3,4,5,2],2);
// function findFirstOccurrence(arr, value) {
//     let notFound=-1;
//   for(let i=0;i<=arr.length ; i++){
      
//     if(arr[i]===value){
//         notFound=i;
//         break;
//     }
// }
// console.log(notFound);
// }
// findFirstOccurrence([1,2,3,4,5,2],2);



function orrcurence(arr,value){
    let index=-1;
    for(let i=0;i<arr.length;i++){
        if(arr[i]==value){
            index = i;
            break;
        }
    }
    console.log(index);
}
orrcurence(([5, 2, 7, 8, 2], 2));