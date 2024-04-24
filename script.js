//Problem 1. Write a function createHelloWorld. It should return a new function that always returns "Hello World".
/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World"
    }
};

const f = createHelloWorld();
 f(); 
 console.log(f())
 
/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */