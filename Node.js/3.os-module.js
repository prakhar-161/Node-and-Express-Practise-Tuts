const os = require('os');

// os.arch() 
console.log(os.arch());
// The return value is equivalent to process.arch.

// os.freemem()
const freeMemory = os.freemem();
console.log(`In Gigabytes : ${freeMemory/1024/1024/1024}`);
// Returns integer
// Returns the amount of free system memory in bytes as an integer.

// os.totalmem()
const totalMemory = os.totalmem();
console.log(`${totalMemory}`);

console.log(os.hostname());
console.log(os.platform());
console.log(os.type());
console.log(os.tmpdir());