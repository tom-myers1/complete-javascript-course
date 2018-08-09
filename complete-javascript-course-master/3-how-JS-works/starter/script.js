///////////////////////////////////////
// Lecture: Hoisting
/*
//functions
calculateAge(1984);

function calculateAge(year) {
  console.log(2018 - year);
}


var yearsLeft = function(year) {
  console.log(65 - (2018 - year));
}

yearsLeft(1982);

//variables
console.log(age);  // will show undefined as its created but not assigned
var age = 23;

function foo() {
  var age = 36;
  console.log(age);
}

foo();


*/


///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}

*/


// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword

console.log(this);
calcAge(1982);
function calcAge(year) {
  console.log(2018 - year);
  console.log(this);
}
