// ************************************************************Qno 20***********************************************
// 20. Write a ts program to input basic salary of an employee and calculate its Gross salary according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%
var salary1 = prompt("Enter your basic salarry: ");
var salary = Number(salary1);
var hra;
var da;
var grossSalary = 0;
if (salary <= 10000) {
    hra = 20 / 100;
    da = 80 / 100;
    grossSalary = salary + hra + da;
}
else if (salary <= 20000) {
    hra = 25 / 100;
    da = 90 / 100;
    grossSalary = salary + hra + da;
}
else if (salary > 20000) {
    hra = 30 / 100;
    da = 95 / 100;
    grossSalary = salary + hra + da;
}
console.log("So the Gross Salary Is: ", grossSalary);
