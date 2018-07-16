/*
 * variables and data types
 */

/*
var first = 'tommy';

console.log(first);


var last = 'myers';
var age = 36;
var isOld = true;
var job;

console.log(isOld);
console.log(age);
console.log(job);

job = 'learner of things';
console.log(job);
*/

/*
 * Variable mutation
 */
/*
var firstName = 'tom';
var lastName = 'myers';
var age = 36;

console.log(firstName + ' ' + age);

var job, isMarried, sex;
job = 'platform engineer';
isMarried = false;
sex = 'male';

console.log(firstName + ' is a ' + age + ' year old ' + job + '. married = ' + isMarried + '. sex = ' + sex);

age = 'younger';
alert(firstName + ' is a ' + age + ' ' + job + '. married = ' + isMarried + '. sex = ' + sex);

var doing = prompt('what are you doing?');

console.log(doing);


*/


/*

var now, yearTom, fullAge;
now = 2018;
yearTom = 36;
fullAge = 18;

var isFullAge = now - yearTom >= fullAge;
console.log(isFullAge);

x = y = 2-36;
console.log(x, y);

x += 10;
y *= 4;
console.log(x, y);

// increment
x ++; // rather than x += 1;


*/






/******************************
* CODING CHALLENGE 1
*/
/*

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").
*/

var markHeight, markWeight, markBmi, johnHeight, johnWeight, johnBmi, markHeaviest;

markHeight = 1.3; //m
markWeight = 84; //kg

johnHeight = 1.1; //m
johnWeight = 88; //kg

function calBmi(height, weight){
  console.log('height = ' + height + ' and weight = ' + weight);
  var bmi = weight / (height * height);
  console.log('bmi = ' + bmi);
  return bmi;
}

markBmi = calBmi(markHeight, markWeight);
johnBmi = calBmi(johnHeight, johnWeight);

console.log('marks bim = ' + markBmi + ' and johns bmi = ' + johnBmi);
//markHeaviest = markBmi > johnBmi;
// console.log('is mark heaviest? ' + markHeaviest); // should have used if/else codingheroes

if (markBmi > johnBmi) {
  console.log('mark is heavier than john');
} else {
  console.log('john is heavier than mark');
}


//////////////
// if else statements
/*
var firstName = 'tom';
var status = 'marriedish';

if (status === 'single') {
  console.log(firstName + ' is marriedish');
} else {
  console.log('nah');
}

var isMarried = false;
if (isMarried) {  // alread a bool value so no need to compare
  console.log(firstName + ' is marriedish');
} else {
  console.log('nah');
}
*/
