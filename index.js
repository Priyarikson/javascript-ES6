
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
        //tagged template literals
        //tag functions
const person = "Mike";
const age = 28;

function myTag(strings, personExp, ageExp) {
  const str0 = strings[0]; // "That "
  const str1 = strings[1]; // " is a "
  const str2 = strings[2]; // "."

  const ageStr = ageExp > 99 ? "centenarian" : "youngster";

  // We can even return a string built using a template literal
  return `${str0}${personExp}${str1}${ageStr}${str2}`;
}
//important
//lack of ()and whitespace calling tag function....
const output1 = myTag`That ${person} is a ${age}.`;

console.log(output1);
// That Mike is a youngster.

//raw property
function tag(strings) {
  console.log(strings.raw[0]);
}

tag`string text line 1 \n string text line 2`;
// Logs "string text line 1 \n string text line 2" ,
// including the two characters '\' and 'n'
//object properties
const PI = 3.1415;
const INCHES_TO_FEET = 0.083333;
//object
const exportObject = {
  PI,
  INCHES_TO_FEET,
  sum( n1, n2 ) {
    return n1 + n2;
  },
  subtract( n1, n2 ) {
    return n1 - n2;
  }
};
console.log( exportObject );








//array destructuring
const data = [ 1, 2, 3 ];
const [ a, , b, c = 4 ] = data;//skipping the second value of the array.//providing a default value of 4
console.log( a, b, c );

//classes

//declaring a class //uppercase V
class Vehicle {
  //constructor function take in two variables wheels and topSpeed
  constructor( wheels, topSpeed ) {
    //this scope
    this.wheels = wheels;
    this.topSpeed = topSpeed;
  }
}
//instantiate the class with wheels=3 and topSpeed=20 and save into the tricycle variable
const tricycle = new Vehicle( 3, 20 );
console.log( tricycle.wheels, tricycle.topSpeed );
//we instantiated a new instance of a class with the new keyword..
//to craeate a 
  