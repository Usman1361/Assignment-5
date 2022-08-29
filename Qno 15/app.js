// ***************************************Qno 14************************************************
//  Write a ts program to input angles of a triangle and check whether triangle is valid or not.
var angle = prompt("Enter 1st angle for triangle: ");
var angle1 = Number(angle);
var angle2 = prompt("Enter 2nd angle for triangle: ");
var angle3 = Number(angle2);
var angle4 = prompt("Enter 3rd angle for triangle: ");
var angle5 = Number(angle4);
if ((angle1 + angle3 + angle5) == 180) {
    console.log("Triangle is valid.");
}
else {
    console.log("Triangle is not Valid");
}
