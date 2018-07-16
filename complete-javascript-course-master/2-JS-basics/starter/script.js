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
/*
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
*/

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

////////////////////
// boolean logic
/*
var name = 'tom';
var age = 36;

if (age < 18) {
  console.log('underage');
} else if (age > 18 &&  age < 73){
  console.log('between 18 and 73');
} else {
  console.log('you old');
}
*/
/*
/////////////////
// ternary and switch

// ternary
var name = 'tom';
var age = 36;

age >= 18 ? console.log(name + ' can have a beer!')
: console.log(name + ' gets no booze');

var drink = age >= 18 ? 'beer':'not beer';
console.log(drink);

// switch

var job = 'platform engineer';
switch (job) {
  case 'teacher':
  case 'instructor':
  case 'lesson giver':
   console.log(name + ' is a teacher');
  case 'driver':
    console.log(name + ' is a driver');
  case 'retired':
    console.log(name + ' is retired');
    break;
  default:
    console.log(name + ' is on the dole');
}

switch (true) {
  case age < 13:
    console.log('young');
  case age >= 14:
    console.log('older');
    break;
    default:
    console.log('no age');
}


//truthy and falsy
//falsy =  undefinded, null, 0, empty string '' and NaN

var height2;
if (height2){
  console.log('currently undefinded - falsy');
}else{
  console.log('has been defined');
}

// equality operators
// === vs ==
// === strict, must be same data type and value
// == not strict can be different data types eg 23 == '23'  (number == string)
*/


//coding CHALLENGE 2


var mikeTeamScore1, mikeTeamScore2, mikeTeamScore3, mikeTeamAve, johnTeamScore1, johnTeamScore2, johnTeamScore3, johnTeamAve;

mikeTeamScore1 = 10;
mikeTeamScore2 = 10;
mikeTeamScore3 = 10;

johnTeamScore1 = 2;
johnTeamScore2 = 2;
johnTeamScore3 = 2;

function calcAve(score1, score2, score3) {
  var ave = (score1 + score2 + score3) / 3;
  return ave;

}

mikeTeamAve = calcAve(mikeTeamScore1, mikeTeamScore2, mikeTeamScore3);
johnTeamAve = calcAve(johnTeamScore1, johnTeamScore2, johnTeamScore3);

console.log('mikes ave: ' + mikeTeamAve + ' and johns ave: ' + johnTeamAve);


if (mikeTeamAve === johnTeamAve) {
  console.log('it was a draw!! score was ' + mikeTeamAve + ' : ' + johnTeamAve);
} else if (mikeTeamAve > johnTeamAve) {
  console.log('mikes team won!! score was ' + mikeTeamAve + ' : ' + johnTeamAve);
} else {
  console.log('johns team won!!score was ' + johnTeamAve + ' : ' + mikeTeamAve);
}

var maryTeamScore1, maryTeamScore2, maryTeamScore3, maryTeamAve;

maryTeamScore1 = 10;
maryTeamScore2 = 10;
maryTeamScore3 = 10;

maryTeamAve = calcAve(maryTeamScore1, maryTeamScore2, maryTeamScore3);

console.log('mikes ave: ' + mikeTeamAve + ' marys ave: ' + maryTeamAve + ' johns ave: ' + johnTeamAve);

if (maryTeamAve === mikeTeamAve === johnTeamAve) {
  console.log('its a 3 way tie!!! bonza');
} else if (maryTeamAve > mikeTeamAve && maryTeamAve > johnTeamAve) {
  console.log('marys team won!!');
} else if (mikeTeamAve > maryTeamAve && mikeTeamAve > johnTeamAve) {
  console.log('mikes team won!!');
} else if (johnTeamAve > mikeTeamAve && johnTeamAve > maryTeamAve) {
  console.log('johns team won!!');
} else if (johnTeamAve === mikeTeamAve && johnTeamAve > maryTeamAve) {
  console.log('johns team and marks team have tied for the lead');
} else if (johnTeamAve === maryTeamAve && johnTeamAve > mikeTeamAve) {
  console.log('johns team and marys team have tied for the lead');
} else if (maryTeamAve === mikeTeamAve && maryTeamAve > johnTeamAve) {
  console.log('johns team and marks team have tied for the lead');
}
  // this seems long winded, there has to be a better way
