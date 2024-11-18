//print 5 to 30 in  divisible by 5
function range(a,b){
    str='';
    for(i=a;i<=b;i++){
        if(i%5===0){
            // str+=i+','.slice(0,-2);
            if(str===''){
                str+=i;
            }
            else{
                str+=','+i;
            }
            
        }
    }
    return str;
}
console.log(range(5,90));

//write the function for area of rectangle return are;

console.log('guguna@gmail.com');
console.log('guguna@gmail.com'.slice(0,'guguna@gmail.com'.indexOf('@')));

function properCase(name){
    return name.charAt(0).toUpperCase()+name.slice(1).toLowerCase();
}
console.log(properCase('guna'));


let myArray=['guna','hen','dark','night','zoro','mark','foolboy','guna','have to die'];
myArray.splice(1,1,'sethu pooda guna');
myArray.splice(0,0,'sethu pooda guna');
console.log(myArray);
