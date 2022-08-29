// **************************Qno 17******************************
// Write a ts program to find all roots of a quadratic equation.
var x2 = prompt("Enter a: ");
var a = Number(x2);
var x1 = prompt("Enter b: ");
var b = Number(x1);
var cons = prompt("Enter c: ");
var c = Number(cons);
var xfirst = (-b + Math.sqrt((b * b) - (4 * a * c))) / 2 * a;
var xsecond = (-b - Math.sqrt((b * b) - (4 * a * c))) / 2 * a;
console.log("So the  roots are: ", xfirst, " ", xsecond);
