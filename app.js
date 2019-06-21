//mennyi ideig tart a script (a console.time és a console.timeEnd ugyan annak kell lennie a stringnek azaz a labelnek akkor az állítja le)
console.time('Hello');
console.log("Hello world in console");
console.log(123);
console.log(true);
var greeting = 'Hello';
console.log(greeting);
console.log(['Valmai','Tömbben']);
console.log({a:1, b:2});
console.table({a:1, b:2});
//console.error("This is an error");
//console.clear();
//console.warn('This is a warning');
console.timeEnd('Hello');