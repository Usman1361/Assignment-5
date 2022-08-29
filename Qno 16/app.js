// **********************************Qno 16******************************************************
// Write a ts program to check whether the triangle is equilateral, isosceles or scalene triangle.
var angle = prompt("Enter 1st angle for triangle: ");
var angle1 = Number(angle);
var angle2 = prompt("Enter 2nd angle for triangle: ");
var angle3 = Number(angle2);
var angle4 = prompt("Enter 3rd angle for triangle: ");
var angle5 = Number(angle4);
if ((angle1 == angle3 && angle1 == angle5)) {
    console.log("Triangle is equilateral.");
}
else if ((angle1 == angle3 || angle1 == angle5 || angle3 == angle5)) {
    console.log("Triangle is isosceles.");
}
else if ((angle1 != angle3 && angle1 != angle5 && angle3 != angle5)) {
    console.log("Triangle is scalene.");
}
