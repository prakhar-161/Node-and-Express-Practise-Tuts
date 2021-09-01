const fs = require('fs');

// fs.writeFileSync('./docs/read.txt','Hello Ji!');

//overwrites
// fs.writeFileSync('./docs/read.txt','I am prakhar');

//append data into file
// fs.appendFileSync('./docs/read.txt',' Hello how are u?');

//read data of the file
// const buf_data = fs.readFileSync('./docs/read.txt');
// console.log(buf_data);

//toString() method
// org_data = buf_data.toString();
// console.log(org_data);

const data = fs.readFileSync('./docs/blog1.txt','utf-8');
console.log(data);