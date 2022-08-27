// ****************************Qno 6****************************
// Write a ts program to check whether a year is leap year or not.

var a: string | null = prompt("Enter any year: ");
var b: number = Number(a);
if (b % 4 == 0) {
    console.log("This is a leap year.");

}
else {
    console.log("This is not a leap year");

}