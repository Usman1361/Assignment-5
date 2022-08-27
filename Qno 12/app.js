// ********************************Qno 12*****************************************
// Write a ts program to input month number and print number of days in that month
var a = prompt("Enter any Month(i.e: june) to calculate days in it: ");
if (a == "january" || a == "march" || a == "may" || a == "july" || a == "august" || a == "october" || a == "december") {
    console.log("It has 31 days.");
}
else if (a == "february") {
    console.log("It has 28 days.");
}
else if (a == "april" || a == "june" || a == "september" || a == "november") {
    console.log("It has 30 days.");
}
