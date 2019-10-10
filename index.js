/*
Variables and data types
 */
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fuLLAge = true;
console.log(fuLLAge);

var job;
console.log(job);

job = 'teacher';
console.log(job);

//Variable naming rules
var e3years =3;
console.log(e3years)
var johnMark = 'John and Mark';
*/
 //Type coercion
/*
var firstName = "JOHN";
var age = 28;

console.log(firstName + ' '+ age)

var job, isMarrid;

job = 'teacher';
isMarrid = false;

console.log(firstName+' is a '+ age + ' years old '+  job + '. Is he married? '+isMarrid);

//Variable mutation
age = 'twenty eight';
job = 'driver';
alert(firstName+' is a '+ age + ' years old '+  job + '. Is he married? '+isMarrid);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
 */


/******************************
 * Basic operators
 */
/*
var now, yearJohn, yearMark;
now = 2019;
ageJohn = 28;
ageMark = 33;
//Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;
console.log(yearJohn);
console.log(now+2);
console.log((now*10));
console.log(now/10);

//Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

//TypeOF operator

console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark and John');
var x;
console.log(x);
*/

/************
 * Operator precedence
 */
// Multiple operators
    /*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge;//true
console.log(isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark)/2;
console.log(average);

//Multiple assignments
var x, y;
x = y = (3+5)*4-6;//8*4-6//32-6=26
console.log(x, y);

//More operators
x *= 2;
console.log(x);

x += 10;
console.log(x);
x++;
console.log(x);
*/
/*******************
 * Coding Challenge
  */
//BMI calculator
/*
var massMark = 75;
var heightMark = 1.8;
var massJohn = 80;
var heightJohn = 1.9;
var bmiJohn = massJohn/heightJohn**2;
var bmiMark = massMark/heightMark**2;
console.log(bmiJohn, bmiMark);
var isMarks = bmiMark > bmiJohn;
console.log("Is Mark's BMI is higher than John's?", isMarks);
*/


/******************
 * If / else statements
 */
/*
var firstName = 'John';
var civilStatus = 'single';
if (civilStatus === 'married'){
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon');
}
var isMarried = true;
if (isMarried === true){
    console.log(firstName + ' is married!');
}
 */


/*********
 * Boolean Logic
 */
/*
var firstName = 'John';
var age = 16;

if (age < 13){
    console.log(firstName+' is a boy.');
}
else if (age>=13 && age<20) {
    console.log(firstName + ' is a teenager');
}
else {
    console.log(firstName + ' is a man.');
}
*/

/******
 * Ternary Operators and Switch Statements
 */
/*
var firsName = 'John';
var age = 16;
//Ternary operator
age >= 18 ? console.log(firsName + ' drinks beer.')
: console.log(firsName + ' drinks juice.');

var drink = age>=18 ? 'beer' : 'juice';
console.log(drink);

//Switch statement
var job = 'teacher';
switch (job) {
    case 'teacher':
        console.log(firsName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firsName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firsName + ' designs pretty websites');
        break;
    default:
        console.log(firsName + ' does something else.');

}
*/

// false values: undefined, null, 0, '', NaN;
// truthy values: Not falsy values
/*
var height;
height = 0;
if (height){
    console.log('Variable is defined.');

}
else{
    console.log('Variable has nOT been defined');
}
*/
/*
var scoreJohn = 89+120+103;
var averageJ = scoreJohn/3;
var scoreMike = 116+94+123;
var averageM = scoreMike/3;



if (averageJ>averageM){
    console.log('Winner is John '+averageJ);
}
else {
    console.log('Winner is Mike '+averageM);
}
*/

/************
 * Functions
 */
/*
function calculateAge(birthYear){
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1989);
var ageJane = calculateAge(1988);
console.log(ageJohn, ageMike, ageJane);

function yearUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0){
    console.log(firstName + ' retires in '+retirement+ ' years.');}
    else {
        console.log(firstName + ' is already retired.')
    }
}

yearUntilRetirement(1990, 'John');
yearUntilRetirement(1989, 'John');
yearUntilRetirement(1988, 'John');
*/

/*************
 * Function Statements and Expressions
 */
/*
//Function expression
var whatDoYouDo = function(job, firstName){
    switch (job) {
        case 'teacher':
            return firstName + ' teaches kids how to code.';
        case 'driver':
            return firstName + ' drives a cab in Lisbon.';
        case 'designer':
            return firstName + ' designs beautiful websites.';
        default:
            return firstName + ' does something else';

    }
}
console.log(whatDoYouDo('teacher','John'));
*/


/****************
 * Arrays
 */
/*
var names = ['John', 'Mark', 'Jane'];
var year = new Array(1999, 1986, 1948);
console.log(names[0]);
console.log(names.length);

//Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names.length);
console.log(names);

//different data types
var John = ['John', 'Smith', 1990, 'teacher', false];
John.push('blue');
John.unshift('Mr.');
console.log(John);

John.pop();
John.pop();
John.shift();
console.log(John);


console.log(John.indexOf(1990));
*/
/*
function tipCalculator(bill){
    var percentage;
    if (bill <50){
        percentage = .2;
    }
    else if (bill>=50 && bill<200){
        percentage = .15;
    }
    else {
        percentage = .1;
    }
    return percentage * bill;
}
console.log(tipCalculator(100));

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2]) ];
console.log(tips);
var finalValues = [tips[0]+bills[0], tips[1]+bills[1], tips[2]+bills[2]];
console.log(finalValues);
*/
/*********
 * Objects are properties
 */
// Object literal
    /*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};
console.log(john);
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'driver';
john['isMarried'] = true;
console.log(john);
//new Object syntax
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane.lastName = 'Smith';
console.log(jane);
*/
/**************
 * Objects and methods
  */

/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function (birthYear) {
        this.age = 2018 - this.birthYear;

    }

};
john.calcAge();
console.log(john);
*/
/*******
 * BMI
 * @type {{mass: number, calcBMI: (function(): (number|*)), fullName: string, height: number}}
 */
/*
var John = {
    fullName: 'John Smith',
    mass: 78,
    height: 1.8,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}
var Mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.96,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}


John.calcBMI();
Mark.calcBMI();
console.log(John, Mark);

if (John.calcBMI() > Mark.calcBMI()){
    console.log(John.fullName + ' has a higher BMI of '+ John.bmi);
}
else if (Mark.calcBMI() > John.calcBMI()){
    console.log(Mark.fullName + ' has a higher BMI of '+Mark.bmi);
}
else {
    console.log('They have the same BMI');
}

*/


/************
 * Loops and iterations
 */
/*
var i = 0;
for (i; i<10; i++){
    console.log(i);
}
var john = ['John', 'Smith', 1990, 'designer'];
var i = 0;
for (i; i<john.length; i++){
    console.log(john[i]);
}
*/


//continue and break statements
/*
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i<john.length; i++){
    if (typeof john[i] !=='string'){
        continue;
    }
    console.log(john[i]);
}
*/


/*********
 * Extra task
 */
/*
var John = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function () {
        this.tips = [];
        this.finalValue = [];

        for  (var i = 0; i<John.bills.length; i++){
            var percentage;
            var bill = this.bills[i];

            if (bill<50){
                percentage = .2
            }
            else if (bill>=50 && bill<200){
                percentage = .15;
            }
            else {
                percentage = .1;
            }


            this.tips[i] = percentage*bill;
            this.finalValue[i] = bill + bill*percentage;

        }

    }
}
John.calcTips();

var Mark = {
    fullName: 'Mark Miller',
    bills: [124, 68, 300, 450, 35],
    calcTips: function () {
        this.tips = [];
        this.finalValue = [];

        for (var i = 0; i < Mark.bills.length; i++) {
            var percentage;
            var bill = this.bills[i];

            if (bill < 100) {
                percentage = .2
            } else if (bill >= 100 && bill < 300) {
                percentage = .1;
            } else {
                percentage = .25;
            }


            this.tips[i] = percentage * bill;
            this.finalValue[i] = bill + bill * percentage;

        }

    }
}

function calcAverage(tips){
    var sum = 0;
    for (var i=0; i<tips.length; i++){
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

Mark.average = calcAverage(Mark.tips);
John.average = calcAverage(John.tips);

if (John.average > Mark.average){
    console.log(John.fullName + "'s family pays higher tips with an average of &"+John.average);
}
else {
    console.log(Mark.fullName + "'s family pays higher tips with an average of &" + Mark.average);
}
*/


/***************
 * Lecture: Hoisting
 */
/*
calculateAge(1965);
function calculateAge(year) {
    console.log(2016 - year);

}
//retirement(1990);
var retirement = function (year) {
    console.log(65 - (2016 - year));
}

//variables

var age = 23;
console.log(age);

function foo() {
    var age = 65;
    console.log(age);

}
foo();
console.log(age);
*/


/*************
 * Scoping
 */
/*
var a = "Hello!";

first();
function first() {
    var b = 'Hey!';
    second();
    function second() {
        var c = "Hey!";
        third();
    }

}
function third() {
    var d = 'JOhn';
    console.log(a+' '+ d);

}
*/


/************
 * This keyword
 */








