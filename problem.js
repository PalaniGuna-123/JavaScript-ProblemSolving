//1. Push Multiple Elements
//create an array of 2 colors. Use push() to add 2 more colors in one line and print the new array.
let array=["blue","red"]
array.push("white");
array.push("voilet");
array.push("orange")
console.log(array)

//2. . Shift Multiple Times
//Create an array of 5 fruits. Use shift() to remove the first two fruits, one by one, and print the array after each removal.

let fruits=["banana","apple","fig","orange","plum"];
fruits.shift();
fruits.shift();
console.log(fruits)

//3. Unshift with Multiple Arguments
//Write a program to create an array of 2 sports. Use unshift() to add 3 more sports to the beginning in a single line and print the array.
let sports=["Batmitten","football"];
sports.unshift("cricket")
sports.unshift("hockey");
sports.unshift("tennies");
sports.reverse()
for(i=0;i<sports.length;i++){
    console.log(sports[i])
}
console.log(sports)

//4.  Find Non-Existing Element with indexOf()
//Write a program to find the index of "Laptop" in an array of 3 devices. Print the result.

let divice=["mobile","Headset","mouse","laptop"]
console.log(divice.indexOf("laptop"))

//5. 5. Split String with Different Delimiter
//Create a string "HTML-CSS-JavaScript". Use split() to break it into an array of 3 elements and print the array.

let str=( "HTML-CSS-JavaScript");
let arra=str.split('-');
console.log(arra)

//6. Reverse Order of Array Using pop()
//Write a program to create an array of 4 numbers. Use pop() to remove the elements one by one and store them in a new array in reverse order. Print the reversed array.
let create=[1,2,3,4];
create.pop();
create.reverse()
console.log(create)

//method 2:
let newArray=[1,2,3,4];
let reverse=[];
while(newArray.length>0){
    reverse.push(newArray.pop())
}
console.log(reverse)

//7. Joining Array Elements Without a Separator
//Create an array of 4 fruits. Use join() without any separator to combine the array elements into a single string and print the result.
let fruit=["apple","banana","fig","jack"];
let fruitnew=fruit.join(' ');
console.log(fruitnew)

//8. Object with Simple Properties
//Write a program to create an object car with properties make, model, and year. Print the model of the car.

let object={
    carname: "Rolls Royce",
    model: 2004,
    year: 2024


}
console.log("model of the car "+ object.model)

//9Array of Objects (Books)
//Create an array of 2 objects, where each object represents a book with properties title and author. Print the title of the first book. give js code


let books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee"
    },
    {
        title: "1984",
        author: "George Orwell"
    }
];

console.log("Title of the first book: " + books[0].author);




//10. Adding New Property to Objects in an Array  

let cars = [
    { brand: "Tata", model: "Nano" },
    { brand: "Honda", model: "Civic" },
    { brand: "Toyota", model: "Corolla" },
    { brand: "Ford", model: "Fiesta" }
  ];
  
  
  for(let i=1;i<cars.length;i++){
    console.log(cars[i]+"year"+i)
  }
  console.log(cars);


  



