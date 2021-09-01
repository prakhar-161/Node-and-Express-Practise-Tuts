//JSON - stands for Javascript Object Notation.JSON is a lightweight format for storing and transporting data.
//JSON is often used when data is sent from a server to a web page.

const data = {
    name : "john",
    age : 21,
    state : "delhi"
};

//Converting object into JSON type data...
const jsonData = JSON.stringify(data);
console.log(jsonData);
console.log(" ");

//Converting JSON data into an object or a string...
const objData = JSON.parse(jsonData);
console.log(objData);