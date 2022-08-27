// *******************************Qno 3*****************************************
// 3. Write a ts program to check whether a number is negative, positive or zero.
var num2: string | null = prompt("Enter any number: ");
var num1: Number = Number(num2);
if (num1 > 0) {
    console.log("The number is positive. ");

}
else if (num1 == 0) {
    console.log("The number is Zero. ");

}
else {
    console.log("The number is negative");

}