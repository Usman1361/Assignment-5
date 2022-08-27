
//*******************************Qno 4****************************************
// Write a ts program to check whether a number is divisible by 5 and 11 or not

var num1: string | null = prompt("Enter any number: ");
var num2: number = Number(num1);
if (num2 % 5 == 0) {
    console.log(num2, " is divisible by 5.");

}
else if (num2 % 11 == 0) {
    console.log(num2, " is divisible by 11.");

}
else {
    console.log(num2, "is not divisble by either 5 nor 11.");

}