//push()
const animals = ['pigs', 'goats', 'sheep'];
const count = animals.push('cows');
 console.log(count);
 // expected output: 4
 console.log(animals);
 // expected output: Array ["pigs", "goats", "sheep", "cows"]

 //arrow function
 const fn1 = function(a, b) {return a+b ;};
 const fn2 = (a, b)=> {return a+b ;};
console.log(fn1(3,5),fn2(3,5));

//single argument arrow function
 arg1 => {/*code here*/}
 //non simple identifier function argument
 (arg1 = 10) => {/*code here*/}
 //no arguments passed into the function
 () => {/*code here*/}
 //multiple line body arrow function
 (arg1, arg2) => {
     console.log(`this is arg1: ${arg1}`);
     console.log(`this is arg2: ${arg2}`);
     console.log(`this is arg3: ${arg3}`);
     /*code more here*/
 }
 //single line body arrow function
 (arg1, arg2) => console.log(`this is arg1: ${arg1}`);
 // with and without return keyword
 ( num1, num2 ) => { return (num1+num2); };
 ( num1, num2 ) => num1+num2;
 
 // arrow function with a singleline body // see no parenthesis in the front no wrapping
 ( numArray ) => numArray.filter( n => n>5 ).map( n => n-1 ).every( n=>n<10 );  
 //  arrow function with a singleline body broken into multiple lines
 ( numArray ) => (
     numArray.filter( n => n>5 )
     .map( n => n-1 )
     .every( n=> n<10 )
     );
     // arrow function with an object literal in the body // returns an object
     (num1, num2) => ({prop1:num1,prop2:num2});

 //excercise4

 // Function 1 basic ES6
const fn0 =  ( a, b ) => {
b++;
a++;
return a + b;
};

// Function 2 single statement function body
const fn9 =  ( a, b )=> a * b;


// Function 3 single input argument 
const fn3 =   a  => {
a = a * a;
return a + a;
};

// Function 4 no input argument
const fn4 =  ()=> {
let a = 10;
a = a * a;
return a + a;
};

// Function 5 object literal
const fn5 =   a => 
({ prop1: a });


console.log( fn0( 5, 10 ) );
console.log( fn9( 5, 10 ) );
console.log( fn3( 5 ) );
console.log( fn4() );
console.log( fn5( 5 ) );

//template literals

const example = "pretty";
console.log(`template literals are ${example} useful`);

//using normal strings
console.log('this is line1 \n this is line 2');//new line \n
//answer //this is line1 
 //this is line 2
 console.log(`this is line1 
 this is line 2`);
 //answer //this is line1 
 //this is line 2
 //should press enter between `this is line1 (press enter here) this is line 2`
//template literal nesting
 function javascript() {
     return 'javascript';
 }
 const output= `we are learning ${`funny${javascript()}`}`;
 console.log(output);
