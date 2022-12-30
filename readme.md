scope
scope is the region of a computer program where a variable or function is valid.
function scope=> when a function is declared a new scope block is created inside the body of that function.
variables defined with var
block scope
parent scope=>global scope
parent scope is the block of code which the function is defined in .
function scope hoisting
instantiation??? i dont understand

hoisting means that the interpreter moves the instantiation of an entity to the top of the scope it was declared in regardless of where in the scope block it is defined....

<script>
        example = 5;
        console.log(example);output is 5 
        var example; //its only declaring here but got output brfore..
</script>
block scope
a pair of curly braces can be placed anywhere in the code to define a new scope block .{}
variables defined with let and const
if statements,loops,functions and any other curly brace pairs will have their own block space  .
this includes floating curly brace pairs not associated with a keyword.(if,for,etc)
temporal dead zone......accessing a variable declared with let before the assignment will throw a runtime error.
declaring variables
var ECMAScript 6 let , const
var
variable scope function scope
variable hoisting
variable reassignment
let
variable scope block scope{}
variable reassignment
const
variable scope block scope{}
<script>
       //declared and initialized 
       const example = {prop1:'test'}
       //variable reassigned
       example = 5; //can not do this //index.html:14 Uncaught TypeError: Assignment to constant variable.
    //at index.html:14:16
       console.log(example)
       //object property updated
       example.prop1 = 5; // this is okay works bcoz subproperty was modified
       console.log(example)
    </script>
       try...catch
       The code in the try block is executed first, and if it throws an exception, the code in the catch block will be executed. 
       
       A catch-block contains statements that specify what to do if an exception is thrown in the try-block. If any statement within the try-block (or in a function called from within the try-block) throws an exception, control is immediately shifted to the catch-block. If no exception is thrown in the try-block, the catch-block is skipped.
<script>
       
       console.log('hoisted before assignment:',hoisted);
       var hoisted = 'this got hoisted';
       console.log('hoisted after assignment:',hoisted);
       try{
        console.log(notHoisted1);
       }catch(err){
        console.log('notHoisted1 with error:',err.message);
       }
       let notHoisted1 = 5;
       console.log('notHoisted1 after assignment:',notHoisted1);
       try{
        console.log(notHoisted2);
       }catch(err){
        console.log('notHoisted2 with error:',err.message);
       }
       const notHoisted2 = [1,2,3];
       try{
        notHoisted2 = 'new value';
       }catch(err){//error parameter
        console.log('notHoisted2 was not able to be changed');
       }
       notHoisted2.push(5);//The push() method appends values to an array.//return The new length property of the object upon which the method was called.




       console.log('notHoisted2 updated. Now is:',notHoisted2);

    </script>
    const notHoisted2 =>kerword variable
    const notHoisted2 = [1,2,3]; //assigning value

const
the array content or object properties can be changed.the contents of an array can be modified with functions push(),pop(),map()and object properties can be added, removed or updated

The pop() method removes the last element from an array and returns that value to the caller. If you call pop() on an empty array, it returns undefined.
Arrow functions or Fat arrow functions =>
anonymous.
not named and not bound to an identifier.an arrow function is created dynamically and is not given a name like normal functions, can be assigned to a variable for reuse.




