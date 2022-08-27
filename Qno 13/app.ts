// ****************************QNo 13******************************
//  Write a ts program to count total number of notes in given amount.

var amount1: any = prompt("Enter any amount: ");
var amount: number = parseInt(amount1);
var num:number[];
num=[5000,1000,500,100,50,20,10];
for(var i:number=0;i<7;i++){
    
    console.log( num[i]," = ", amount/num[i]);
    amount=amount%num[i];
}
// var rup5000: any = 0;
// var rup1000: any = 0;
// var rup500: any = 0;
// var rup100: any = 0;
// var rup50: any = 0;
// var rup20: any = 0;
// var rup10: any = 0;
// if (amount >= 5000) {
//     rup5000 = amount / 5000;
//     amount -= rup5000 * 5000;
// }
// if (amount >= 1000) {
//     rup1000 = amount / 5000;
//     amount -= rup1000 * 1000;
// }
// if (amount >= 500) {
//     rup500 = amount / 500;
//     amount -= rup500 * 500;
// }
// if (amount >= 100) {
//     rup100 = amount / 100;
//     amount -= rup100 * 100;
// }
// if (amount >= 50) {
//     rup100 = amount / 50;
//     amount -= rup50 * 50;
// }
// if (amount >= 20) {
//     rup20 = amount / 20;
//     amount -= rup20 * 20;
// }
// if (amount >= 10) {
//     rup10 = amount / 10;
//     amount -= rup10 * 10;
// }
// rup5000 = parseInt(rup5000);
// rup1000 = parseInt(rup1000);
// rup500 = parseInt(rup500);
// rup100 = parseInt(rup100);
// rup50 = parseInt(rup50);
// rup20 = parseInt(rup20);
// rup10 = parseInt(rup10);

// console.log("So the result are: /n");
// console.log("5000 = ", rup5000);
// console.log("1000 = ", rup1000);
// console.log("500 = ", rup500);
// console.log("100 = ", rup100);
// console.log("50 = ", rup50);
// console.log("20 = ", rup20);
// console.log("10 = ", rup10);