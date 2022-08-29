// ****************************QNo 13******************************
//  Write a ts program to count total number of notes in given amount.

var amount1: any = prompt("Enter any amount: ");
var amount: any = parseInt(amount1);
var num:number[];
num=[5000,1000,500,100,50,20,10];
var a:number;
for(var i:number=0;i<7;i++){
    a=parseInt(amount/num[i]);
    console.log( num[i]," = ", a);
    amount=amount%num[i];
}




