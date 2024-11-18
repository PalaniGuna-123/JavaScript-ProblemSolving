// {
//     "name": "John Doe",
//     "age": 30,
//     "isStudent": false,
//     "skills": ["JavaScript", "HTML", "CSS"],
//     "address": {
//       "city": "New York",
//       "zipcode": "10001"
//     }
//   }

const user = {
    "name": "Test case",
    "age": 30,
    "skills": ["JavaScript", "HTML", "CSS","Java"]
  };
  
  console.log(user.name);  
  console.log(user['age']);  
  console.log(user.skills[2]);  


const jsonString = '{"testCase": "pass","happen" : "Do it work"}';
const parsedData = JSON.parse(jsonString);
console.log(parsedData.name);  

const userObject = { name: "John Doe", age: 30,"skill": "Java-script" };
const jsonStringified = JSON.stringify(userObject);
console.log(jsonStringified); 

const jsonString1 = '{"testCase": "pass","happen" : "Do it work"}';
const parsedData1= JSON.parse(jsonString1);
console.log(parsedData1.testCase);
console.log(parsedData1.happen);     


  