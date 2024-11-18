//right angle triangle 

function rightAngle(n){
    for(let i=1;i<=n;i++){
        let row='';
        for(let j=1;j<=i;j++){
            row+='* '
        }
        console.log(row);
        
    }
    
    
 }
 rightAngle(5);

/*
*
* *
* * *
* * * *
* * * * *
*/

function rightTriangle(n) {
    for(let i = 1; i <= n; i++) {
        let row = '';
        for(let j = 1; j <= i; j++) {
            row += '* ';
        }
        console.log(row);
    }
}
rightTriangle(7)

/*
        *
      * *
    * * *
  * * * *
* * * * *
*/

// function leftTriangle(n) {
//     for(let i = 1; i <= n; i++) {
//         let row = '';
      
//         for(let j = 1; j <= n-i; j++) {
//             row += '  ';
//         }
       
//         for(let k = 1; k <= i; k++) {
//             row += '* ';
//         }
//         console.log(row);
//     }
// }
// leftTriangle(7)

// Iteration of i	j Loop (Spaces)	k Loop (Stars)	row Value	Output
// i = 1	j = 1 to 6	k = 1	" * "	" * "
// i = 2	j = 1 to 5	k = 1 to 2	" * * "	" * * "
// i = 3	j = 1 to 4	k = 1 to 3	" * * * "	" * * * "
// i = 4	j = 1 to 3	k = 1 to 4	" * * * * "	" * * * * "
// i = 5	j = 1 to 2	k = 1 to 5	" * * * * * "	" * * * * * "
// i = 6	j = 1	k = 1 to 6	" * * * * * * "	" * * * * * * "
// i = 7	None	k = 1 to 7	"* * * * * * * "	"* * * * * * * "

function left(n){
    for(i=1;i<=n;i++){
        let row='';
        for(j=1;j<=n-1;j++){
            row+='  ';
            
    
        }
        for(k=1;k<=i;k++){
            row+="* "
        }
        console.log(row);
        
    }
    
}
left(7);