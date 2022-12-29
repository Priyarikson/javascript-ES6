scope
scope is the region of a computer program where a variable or function is valid.
function scope=> when a function is declared a new scope block is created inside the body of that function.
block scope
parent scope=>global scope
parent scope is the block of code which the function is defined in .
function scope hoisting
<script>
        example = 5;
        console.log(example);output is 5 
        var example; //its only declaring here but got output brfore..
</script>
block scope
a pair of curly braces can be placed anywhere in the code to define a new scope block 
if statements,loops,functions and any other curly brace pairs will have their own block space  .
