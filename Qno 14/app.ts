// ***************************************Qno 14**********************************************
// Write a ts program to input angles of a triangle and check whether triangle is valid or not.
var angle: string | null = prompt("Enter angle for triangle: ");
var angle1: number = Number(angle);
if (angle1== 180) {
    console.log("Triangle is valid.");

}
else {
    console.log("Triangle is not Valid");

}