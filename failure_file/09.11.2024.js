const { log } = require("console");

let guna="achieve your goal";
console.log(guna.split(' '));
let day=3;

switch(day){
    case 1:
    console.log('sunday');
    break;
    case 2:
    console.log('monday');
    break;
    case 3:
    console.log('tuesday');
    break;
    case 4:
    console.log('wednesday');
    break;
    case 5:
    console.log('thursday');
    break;
    case 6:
    console.log('friday');
    break;
    case 7:
    console.log('saterday');
    break;
    default:
        console.log('no match');
        
    
}
let age =20;
let guna2=age>12 ? 'yes':'No';// ternery operator
console.log(guna2);

let testScore=80;
let score=testScore=90 ? 'a': testScore<90 ? 'b': testScore>90 ? 'first class':'b';
console.log(score);

