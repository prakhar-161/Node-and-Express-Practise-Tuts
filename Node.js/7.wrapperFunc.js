//Module Wrapper function

//no global scope
//remains as a local scope for every individual file
//This happens behind the scenes
//IIFE

(function (exports, require, module, __filename, __dirname) {
    const name = 'boi';
    console.log(name);
})();
