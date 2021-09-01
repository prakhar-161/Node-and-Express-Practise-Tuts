// Importing the core module for interaction with file system - 'fs module'.
const fs = require('fs');

// Reading files -------------------------------------------------------------------------------------------
// asynchronous
fs.readFile('./docs/blog1.txt', (err,data) => {
    if(err){
        console.log(err)
    }
    console.log(data.toString());
});
console.log('finished');



// Writing files -------------------------------------------------------------------------------------------
// fs.writeFile('./docs/blog1.txt', 'hello, universe',() => {
//     console.log('file1 was written');
// });

// fs.writeFile('./docs/blog2.txt', 'this file writter by the writeFile() method', () => {
//     console.log('file2 was written');
// });



// Directories -------------------------------------------------------------------------------------------
// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets', (err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log('folder created');
//     });
// }
// else{
//     fs.rmdir('./assets', (err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log('folder deleted');
//     });
//}



// Deleting files -------------------------------------------------------------------------------------------
// Firstly, we make sure that the file exists before we delete it.
// if(fs.existsSync('./docs/deleteMe.txt')){
//     fs.unlink('./docs/deleteMe.txt', (err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log('file deleted');
//     });
// }