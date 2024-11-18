// function fibonacci(n) {
//     let fib = [0, 1];
//     for (let i = 2; i < n; i++) {
//         fib[i] = fib[i-1] + fib[i-2];
//     }
//     return fib;
// }
// console.log(fibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

function fibonacci(n){
    let fib=[0,1];
    for(let i=2;i<n;i++){
        fib[i]=fib[i-1] + fib[i-2]
    }
    return fib;
}
console.log(fibonacci(10));

//fibunachii series
function fibu(n){
    let a=0,
    b=1
    ,next;
    for(i=0;i<n;i++){
        console.log(a);
        
        next=a+b;
        a=b;
        b=next;
    }
}
fibu(5)
function fibuna(n){
    let first=0;
    let second=1;
    let next;
    for(i=0;i<n;i++){
        console.log(first);
        next=first+second;
        first=second;
        second=next;
        
    }
}
fibuna(7);


