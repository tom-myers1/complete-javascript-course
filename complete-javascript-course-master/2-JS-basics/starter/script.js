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

/*
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
  console.log('marys team and marks team have tied for the lead');
}
  // this seems long winded, there has to be a better way
*/ // did pretty much the same butcovered more cases than in solution ++

// functions

// basically using what i did above as example

/*
function calcAge(birthYear){
    return 2018 - birthYear;
}

var ageTom = calcAge(1982);
var ageTim = calcAge(1983);
var ageTam = calcAge(1984);
var ageTem = calcAge(1985);
console.log(ageTom, ageTam, ageTem, ageTim);

function yearsTilRetire(year, firstName){
  var age = calcAge(year);
  var retirement = 65 - age; // assuming 65 is when you retired

  if (retirement > 0){
  console.log(firstName + ' retires in ' + retirement + ' years');
} else {
  console.log(firstName + ' is already retired');
}
}

yearsTilRetire(1990, 'john');
yearsTilRetire(1991, 'jim');
yearsTilRetire(1992, 'tom');
*/

// function statements and function expressions
/*
// function expression
var job = function(job, firstName) {
  switch (job) {
    case 'teacher':
      return firstName + ' is a teacher';
    case 'driver':
      return firstName + ' is a driver';
    case 'just stuff':
      return firstName + ' does stuff';
    default:
      return firstName + ' does somthing else';

  }

}

console.log(job('driver', 'tom'));
console.log(job('nothing', 'tim'));
console.log(job('just stuff', 'jim'));

*/


// arrays

//arrays are 0 based - first element is 0 then second is 1
// can call them different ways
//var names = ['tom', 'mark', 'jo']; // usually used
//var years = new Array(1982, 1994, 1976);

//console.log(names[0]);
//console.log(names.length);
/*
names[1] = 'ben';
names[5] = 'mary';
console.log(names);



var tom = ['tom', 'myers', 1982, false];
/*
tom.push('black')
console.log(tom);
tom.unshift('mr.')
console.log(tom);
tom.reverse();
console.log(tom);
tom.pop();
console.log(tom);
tom.pop();
console.log(tom);
tom.shift();
console.log(tom);

console.log(tom.indexOf(1982));
console.log(tom.indexOf(70));

console.log(tom.indexOf('tom'));
var tom = tom.indexOf('tom') === -1 ? 'tom is not tom' : 'tom is tom';
console.log(tom);
*/


// CHALLENGE 3
/*
3 dinners £124, £48 and £265

tip calculator - if bill is less then £50 tip 20%
               - if bill is £50 to $100 tip 15%
               - if bill is over £100 tip 10%
return 2 arrays - all 3 tips
                - all total payments (bill + tip)
*/
/*
var bills = [124, 48, 265];

var tips = [];
var totals = [];

function calcTips(bill) {
  var tip;
  if (bill < 50) {
    tip = (bill * 0.2);
  } else if (bill >= 50 && bill <= 150) {
    tip = (bill * 0.15);
  } else {
    tip = (bill * 0.1);
  }
 return tip;
}

for (var i = 0; i < bills.length; i++) {
var tip = calcTips(bills[i]);
tips.push(tip);
totals.push(bills[i] + tip);
}

console.log('tips = ' + tips + ' totals = ' + totals);
*/
/*

var tom = {
  firstName: 'tom',
  lastName: 'myers',
  age: 36,
  family:['mza','gza','ben','kate'],
  job: 'stuff',
  yearBorn: 1982,
  calcAge: function(birthYear) {
    this.age =  2018 - this.birthYear;
  }
};

console.log(tom.calcAge());
*/
/*
// code challenge 4

var mark = {
  name: 'mark',
  mass: 78, //kg
  height: 1.84, //meters
  calcBmi: function() {
    this.bmi = this.mass / (this.height * this.height);
  }
}

var john = {
  name: 'john',
  mass: 99, //kg
  height: 1.92, //meters
  calcBmi: function() {
    this.bmi = this.mass / (this.height * this.height);
  }
}

mark.calcBmi();
john.calcBmi();

if (mark.bmi === john.bmi) {
  console.log('they have equal bmi: ' + john.bmi);
} else if (mark.bmi > john.bmi) {
  console.log('mark has the greater bmi: ' + mark.bmi + ' > ' + john.bmi);
} else {
  console.log('john has th greater bmi: ' + john.bmi + ' > ' + mark.bmi);
}
*/

// did exactly same as in example
// bare in mind that this isnt following DRY principal - but that will come later
// could have done the if like -- if (john.calcBmi() > mark.calcBmi())
// if you return from the method

/*
// loops and iterations
var nums = [1,2,3,4,5,6,7,8,9,10]

for (var i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}

var i = 0;
while (i < nums.length) {
  console.log(nums[i]);
  i++
}
*/

// continue + break
// break stops loops
// continue stops current iteration and continues with loop

/*

var nums = [1,2,3,4,false,6,7,true,9,'tom']
/*
for (var i = 0; i < nums.length; i++) {
  if (typeof nums[i] !== 'number') continue;
  console.log(nums[i]);
}

for (var i = 0; i < nums.length; i++) {
  if (typeof nums[i] !== 'number') break;
  console.log(nums[i]);
}
*/
/*
for (var i = nums.length - 1; i >= 0; i--) {
  //if (typeof nums[i] !== 'number') continue;
  console.log(nums[i]);
}
*/


// code challenge 5
// advanced tip collection

var johnTips = [];
var johnTotals = [];

var johnBills = {
  bills: [124, 48, 268, 180, 42],
  calcTips: function() {
    console.log(this.bills.length);
    for (var i = 0; i < this.bills.length; i++) {
    var bill = this.bills[i];
    var tip;
      if (bill < 50) {
        tip = (bill * 0.2);
      } else if (bill >= 50 && bill <= 200) {
        tip = (bill * 0.15);
      } else {
        tip = (bill * 0.1);
      }

      tip = Math.round(tip);
      console.log(tip, bill);
      johnTips.push(tip);
      johnTotals.push(tip + bill);
    }


  }
};
johnBills.calcTips();

console.log('tips = ' + johnTips + ' and totals = ' + johnTotals);

var markTips = [];
var markTotals = [];

var markBills = {
  bills: [77, 375, 110, 45],
  calcTips: function() {
    console.log(this.bills.length);
    for (var i = 0; i < this.bills.length; i++) {
    var bill = this.bills[i];
    var tip;
    if (bill < 100) {
      tip = (bill * 0.2);
    } else if (bill >= 100 && bill <= 300) {
      tip = (bill * 0.1);
    } else {
      tip = (bill * 0.25);
    }
      tip = Math.round(tip);
      console.log(tip, bill);
      markTips.push(tip);
      markTotals.push(tip + bill);
    }


  }
};
markBills.calcTips();

console.log('tips = ' + markTips + ' and totals = ' + markTotals);

function calcAvg(tips) {
  var tipsTotal = 0;
for (var i = 0; i < tips.length; i++) {
console.log(tips[i]);
tipsTotal += tips[i];

};
console.log(tipsTotal);
var tipsAve = (tipsTotal / tips.length);
console.log(tipsAve);
return tipsAve;
}

var marksAve = calcAvg(markTips);
var johnsAve = calcAvg(johnTips);

console.log('marks ave = ' + marksAve + ' johns ave = ' + johnsAve);
if (marksAve > johnsAve) {
  console.log('mark paid more in tips');

} else if (johnsAve > marksAve) {
  console.log('john paid more in tips');
} else {
  console.log('they paid the same in tips');
}
