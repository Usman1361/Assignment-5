// ****************************QNo 13******************************
//  Write a ts program to count total number of notes in given amount.
var amount1 = prompt("Enter any amount: ");
var amount = parseInt(amount1);
var num;
num = [5000, 1000, 500, 100, 50, 20, 10];
var a;
for (var i = 0; i < 7; i++) {
    a = parseInt(amount / num[i]);
    console.log(num[i], " = ", a);
    amount = amount % num[i];
}
