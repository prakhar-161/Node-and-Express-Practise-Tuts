const path = require('path');

// console.log(path.dirname('file-path'));

// console.log(path.extname('file-path'));

// console.log(path.basename('file-path'));
// basename -> returns filename 


//path.parse() method
//path: <string>
//returns: <Object>
//The path.parse() method returns an object whose properties represent significant elements of the path.
//returns dir -> root -> base -> ext -> name

const myPath = path.parse('/Users/prakhar/Desktop/Web-dev/MERN/Node.js/path-module/4.pathModule.js');
console.log(myPath);
console.log(myPath.name);