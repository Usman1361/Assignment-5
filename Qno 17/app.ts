// **************************Qno 17******************************
// Write a ts program to find all roots of a quadratic equation.
var x2: string | null = prompt("Enter a: ");
var a: number = Number(x2);
var x1: string | null = prompt("Enter b: ");
var b: number = Number(x1);
var cons: string | null = prompt("Enter c: ");
var c: number = Number(cons);
var xfirst: number = (-b + Math.sqrt((b * b) - (4 * a * c))) / 2 * a;
var xsecond: number = (-b - Math.sqrt((b * b) - (4 * a * c))) / 2 * a;
console.log("So the  roots are: ", xfirst," ", xsecond);


