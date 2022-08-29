// *****************************************Qno 21***********************************************************************
// Write a ts program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill


var unit1:string|null=prompt("Enter the electricity units consumed: ");
var unit:number=Number(unit1);
var bill:number=0;

var unitprice:number=0;
if(unit>=50 || unit<50){
    unit=unit-50;
    unitprice=unitprice+(0.50*50);
}
else if(unit>=100 || unit<100){
    unit=unit-100;
    unitprice=unitprice+(0.75*100);
}
else if(unit>=150 || unit<150){
    unit=unit-100;
    unitprice=unitprice+(0.75*100);
}