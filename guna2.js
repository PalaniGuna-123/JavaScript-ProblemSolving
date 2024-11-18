function sumNum(n){
    i=1;
    total=0;
    while(i<=n){
        total+=i;
        i++;
    }
    return total;
}
console.log(sumNum(7))

function fac(n){
    i=1;
    sum=1;
    while(i<=n){
        sum*=i;
        i++
    }
    return sum;
}
console.log(fac(4))

function num(n){
    let i=1;
    while(i<n){
        if(i%2===0){
            console.log(i)
        }
        i++;
    }
    return i;
}
console.log(num(10))

function classifynum(n){
    if(n%3==0 && n%5==0){
        return ("Divisible by both 3 and 5")

    }
    else if(n%3===0){
        return ("Divisible by both 3 ")
    }
    else if(n%5===0){
        return ("Divisible by both  5")
    }
    else{
        return ("Not divisible")
    }
}
console.log(classifynum(15))
console.log(classifynum(30))

function Multiple(n,r){
    for(i=r;i>=1;i--){
        console.log(`${n} * ${i} = ${n*i}`)

    }
    return ;
}
console.log(Multiple(5,6))


i=0;
while(i<10){
    i++;
    console.log(`lap ${i} completed`)
}
let lapscompleted=0;
let totallaps=10;

while(totallaps>lapscompleted){
    lapscompleted++;
    console.log(`lap ${lapscompleted} completed`)
}



  let battery=100;


while(battery>20){
    console.log(`battery level ${battery}%`)
    battery=battery-5;
}
console.log("Baterry is low")

let array=[1,2,3,4,5,6,7,8,9];
let str="";
for(i=0;i<array.length;i++){
    
}
console.log(str)



